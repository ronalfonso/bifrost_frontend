import {createCondo, createInvitationCode, getCondo, getTypesCondos} from './api/condos.service';
import {getHomesCondo} from '../homes/api/homes.service';
import {active, inactive} from '../invitations/invitationSlice';
import {Home} from '../../core/models/homes/Home';
import {initCondo, initCondoHomes, initCondoResidents} from './condoSlice';
import {startLogout} from "../auth";

export const startCreateCondo = (data) => {
    return async (dispatch) => {
        return await createCondo(data).then(resp => {
            if (resp.status === 201) {
                return resp.data;
            }
        })
    }
}

export const startGetTypes = () => {
    return async (dispatch) => {
        return await getTypesCondos().then(resp => {
            if (resp.status === 202) {
                return resp.data;
            }
        })
    }
}

export const startGetListHomeOfCondo = () => {
    return async (dispatch: any) => {
        return await getHomesCondo().then(resp => {
            if (resp.status === 202) {
                const {data} = resp;
                const homesResp = data.map(home => ({...home}));
                const homesCloned = data.map(home => ({...home}));
                dispatchHomes(homesResp, dispatch);
                dispatchResidents(homesCloned, dispatch);
                dispatchInvitations(homesCloned, dispatch);
                return resp.data;
            }
        })
    }
}

export const startGetCondo = () => {
    return async (dispatch) => {
        return await getCondo().then(resp => {
            if (resp.status === 202) {
                dispatch(initCondo(resp.data))
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

export const startCreateInvitationCode = (quantity: number) => {
    return async (dispatch) => {
        return await createInvitationCode(quantity).then(resp => {
            if (resp.status === 202) {
                return resp;
            }
            if (resp.response !== undefined) {
                return resp.response;
            }
        })
            .catch(err => {
                console.log({err});
            })
    }
}

const dispatchHomes = (homesResp, dispatch) => {
    const homesList: Home[] = [];
    homesResp.forEach(home => {
        delete home.residents;
        delete home.invitations;
        homesList.push(home);
    })
    homesList.sort((a, b) => a.numberHouse - b.numberHouse);
    dispatch(initCondoHomes(homesList))
}

const dispatchResidents = (homesCloned, dispatch) => {
    const residentList = [];
    homesCloned.forEach((home) => {
        const residents = home.residents.map(resident => {
            return {
                ...resident,
                home: {
                    id: home.id,
                    description: home.description,
                    numberHouse: home.numberHouse
                }
            }
        });
        residents.forEach((resident) => residentList.push(resident));
    })
    dispatch(initCondoResidents([...residentList]))
}

const dispatchInvitations = (homesCloned, dispatch) => {
    const invitationsList = [];
    homesCloned.forEach((home) => {
        const invitations = home.invitations.map((invitation) => {
            return {
                ...invitation,
                homeId: home.id,
            }
        })
        invitations.forEach((invitation) => invitationsList.push(invitation));
    })
    dispatch(active(invitationsList.filter(invitation => invitation.isActive)));
    dispatch(inactive(invitationsList.filter(invitation => !invitation.isActive)));
}