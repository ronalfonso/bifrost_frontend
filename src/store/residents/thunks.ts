import {getHomeResidents} from './api/residents.service';
import {initResident} from './residentSlice';

export const startGetResidentHome = (userId) => {
    return async (dispatch) => {
        return await getHomeResidents(userId).then(resp => {
            if (resp) {
                dispatch(initResident(resp));
                return resp;
            } else {
                // dispatch(logout(resp))
            }
        })
    }
}