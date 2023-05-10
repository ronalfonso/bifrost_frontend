import {checkingCredentials, login, logout} from './authSlice';
import {loginUser} from './api/auth.service';
import {db} from '../../core/database/db';
import {initResident} from '../residents/residentSlice';

export const starLogin = ({username, password}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        await loginUser({username, password}).then(resp => {
            if (resp.status === 201) {
                const {data} = resp;
                localStorage.setItem('access_token', data.access_token);
                dispatch(login(data))
                dispatch(initResident(data.user.resident))
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
            if (deleteUser !== undefined) {
                dispatch(logout(message))
            }
        } catch (e) {

        }
    }
}

