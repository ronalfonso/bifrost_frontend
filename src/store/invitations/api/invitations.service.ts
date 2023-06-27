import {environment} from '../../../environment';
import {helpHttp} from '../../../core/helpers/helpHttp';


const BASE_URL = environment.BASE_URL;
const URL_COMPONENT = `${BASE_URL}/invitations`;

export const createInvitation = async (data: any) => {
    const url = `${URL_COMPONENT}`;
    return helpHttp().post(url, {data}).then((resp) => {
        return resp;
    })
        .catch(err => console.log(err));
}

export const validateInvitation = async (invitationId: any) => {
    const url = `${URL_COMPONENT}/validate/${invitationId}`;
    return helpHttp().get(url).then((resp) => {
        return resp;
    })
        .catch(err => console.log(err));
}

export const confirmInvitation = async (data: any) => {
    const url = `${URL_COMPONENT}/confirm-invitation`;
    return helpHttp().put(url, {data}).then((resp) => {
        return resp;
    })
}