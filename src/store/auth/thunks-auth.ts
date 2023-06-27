import {checkingCredentials, login, logout} from './authSlice';
import {loginUser} from './api/auth.service';
import {db} from '../../core/database/db';
import {initResident} from '../residents/residentSlice';
import {CreateUserDto} from './dtos/create-user.dto';
import {createUser} from './api/users.service';
import {UserCreateResponse} from './models/UserCreateResponse';
import {initCondo} from '../condos/condoSlice';

export const starLogin = ({username, password}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        await loginUser({username, password}).then(resp => {
            if (resp.status === 201) {
                const {data} = resp;
                localStorage.setItem('access_token', data.access_token);
                window.localStorage.setItem('pathPrev', '/');
                dispatch(login(data))
                if (data.user.condo !== null) {
                    dispatch(initCondo(data.user.condo))
                }

                if (data.user.resident !== null) {
                    dispatch(initResident(data.user.resident))
                }


            } else {
                dispatch(logout(resp))
            }
        })
    }
}

export const startLogout = (message = '') => {
    return async (dispatch) => {
        try {
            const resp = await db.authData.toArray();
            const user = resp[0];
            const deleteUser = await db.authData.where("uuid").anyOf(user.uuid).delete();
            window.localStorage.clear();
            if (deleteUser !== undefined) {
                dispatch(logout(message))
            }
        } catch (e) {

        }
    }
}

export const startCreateUser = (user: CreateUserDto) => {
    return async (dispatch) => {
        return await createUser(user).then((resp) => {
            console.log(resp);
            if (resp.status === 201) {
                const user: UserCreateResponse = resp.data;
                return user;
            }
        }, err => {
            console.error(err);
        })
    }
}

