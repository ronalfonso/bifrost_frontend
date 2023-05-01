import { getHomeResidents } from './api/residents.service';
import {initCondos, initHomes, initResident} from './residentSlice';
import { startLogout } from '../auth';
import {active, inactive} from '../invitations/invitationSlice';
import {ResidentHomes} from '../../core/models/residents/Resident-homes';

export const startGetResidentHome = (userId) => {
    return async (dispatch) => {
        return await getHomeResidents(userId).then(resp => {
            if (resp.status === 202) {
                const {data} = resp;
                const homesList = dispatchHomes(data, dispatch);
                dispatchCondos(homesList, dispatch);
                dispatchInvitations(data, dispatch);
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

function getResidents(data, dispatch) {
    const residentList: any[] = data.map((resident) => resident);
    dispatch(initResident(residentList));
    return residentList;
}

function dispatchHomes(data, dispatch) {
    const homesList = data.map((resident) => {
        return {
            ...resident.home,
            residentId: resident.id
        }
    })
    dispatch(initHomes(homesList));
    return homesList;
}

function dispatchCondos(homesList, dispatch) {
    const condosList = homesList.map((home) => {
        return {
            ...home.condo,
            homeId: home.id,
            residentId: home.residentId
        }
    })
    dispatch(initCondos(condosList));
}

function dispatchInvitations(data, dispatch) {
    let residentList: ResidentHomes[] = [...getResidents(data, dispatch)];
    const invitationsList = [];
    getInvitationList(residentList, invitationsList);
    dispatch(active(invitationsList.filter(invitation => invitation.isActive)));
    dispatch(inactive(invitationsList.filter(invitation => !invitation.isActive)));
}

function getInvitationList(residentList: ResidentHomes[], invitationsList: any[]) {
    residentList.forEach((resident: ResidentHomes) => {
        const invitations = resident.invitations.map(invitation => {
            return {
                ...invitation,
                condoName: resident.home.condo.name
            }
        })
        invitations.forEach(invitation => {
            invitationsList.push(invitation)
        })
    })
}