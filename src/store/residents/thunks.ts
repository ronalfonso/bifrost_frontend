import { getHomeResidents } from './api/residents.service';
import {initCondos, initHomes, initResident} from './residentSlice';
import { startLogout } from '../auth';

export const startGetResidentHome = (userId) => {
    return async (dispatch) => {
        return await getHomeResidents(userId).then(resp => {
            if (resp.status === 202) {
                const {data} = resp;
                const homesList = data.map((resident) => {
                    return {
                        ...resident.home,
                        residentId: resident.id
                    }
                })
                const condosList = homesList.map((home) => {
                    return {
                        ...home.condo,
                        homeId: home.id,
                        residentId: home.residentId
                    }
                })
                dispatch(initResident(data));
                dispatch(initHomes(homesList));
                dispatch(initCondos(condosList));
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