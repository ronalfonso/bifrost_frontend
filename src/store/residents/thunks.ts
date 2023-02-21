import {getHomeResidents} from './api/residents.service';

export const startGetResidentHome = (userId) => {
    return async (dispatch) => {
        console.log(userId);

        await getHomeResidents(userId).then(resp => {
            console.log(resp);
            if (resp.status === 202) {
                const {data} = resp;
                console.log(data);
                return data;
            } else {
                // dispatch(logout(resp))
            }
        })
    }
}