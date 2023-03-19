import { getHomeResidents } from './api/residents.service';
import { initResident } from './residentSlice';
import { startLogout } from '../auth';

export const startGetResidentHome = (userId) => {
    return async (dispatch) => {
        return await getHomeResidents(userId).then(resp => {
            if (resp.status === 202) {
                const {data} = resp;
                dispatch(initResident(data));
                return data;
            } else if (resp?.response.status >= 400) {
                dispatch(startLogout('UNAUTHORIZED'))
                return resp.response;
            } else {
                return [];
            }
        })
            .catch(err => {
                console.log(err);
            })
    }
}