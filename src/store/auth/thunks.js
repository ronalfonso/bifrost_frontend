import {checkingCredentials, login, logout} from './authSlice';
import {loginUser} from './api/auth.service';



export const starLogin = ({username, password}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        await loginUser({username, password}).then(resp => {
            if (resp.status === 201) {
                const {data} = resp;
                dispatch(login( data ))
            } else {
                dispatch(logout( resp ))
            }
        })
    }
}

