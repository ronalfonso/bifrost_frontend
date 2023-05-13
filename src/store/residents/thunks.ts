import {initCondos, initHomes, initResident} from './residentSlice';
import { startLogout } from '../auth';
import {active, inactive} from '../invitations/invitationSlice';
import {getCondoList} from './api/condos.services';
import {Home} from '../../core/models/homes/Home';
import {createResident, getResident} from './api/residents.service';
import {capitalizeLabel} from '../../core/utils/handle-lables';

export const startGetResidentHome = (userId) => {
    return async (dispatch) => {
        return await getCondoList(userId).then(resp => {
            if (resp.status === 202) {
                const {data} = resp;
                const condosHomes = data.map(condo => ({...condo}));
                const homesList = dispatchHomes(condosHomes, dispatch);
                const condos = data.map(condo => ({...condo}));
                dispatchCondos(condos, dispatch);
                dispatchInvitations(homesList, dispatch);
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

export const startGetResident = (userId) => {
    return async (dispatch) => {
        return await getResident(userId).then(resp => {
            if (resp.status === 202) {
                dispatch(initResident(resp.data))
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

export const startCreateResident = (data) => {
    return async (dispatch) => {
        return await createResident(data).then(resp => {
            if (resp.status === 201) {
                return resp.data;
            }
        })
    }
}

function dispatchCondos(condos, dispatch) {
    condos.forEach((condo) => delete condo.homes);
    dispatch(initCondos([...condos]));
}

function dispatchHomes(condos, dispatch) {
    const homesList: Home[] = [];
    condos.forEach(condo => {
        const homes = condo.homes.map((home) => {
            return {
                ...home,
                condo
            }
        })
        homes.forEach(((home: Home) => {
            homesList.push(home)
        }));
        delete condo.homes
    })
    dispatch(initHomes([...homesList]));
    return homesList;
}

function dispatchInvitations(homeList, dispatch) {
    const invitationsList = [];
    homeList.forEach((home) => {
        const invitations = home.invitations.map((invitation) => {
            return {
                ...invitation,
                homeId: home.id,
                condoName: capitalizeLabel(home.condo.name),
            }
        })
        invitations.forEach((invitation) => invitationsList.push(invitation));
    })
    dispatch(active(invitationsList.filter(invitation => invitation.isActive)));
    dispatch(inactive(invitationsList.filter(invitation => !invitation.isActive)));
}
