import {environment} from '../../../environment';
import {create, getListByUserId} from '../../thunks-utils';
import {helpHttp} from "../../../core/helpers/helpHttp";


const BASE_URL = environment.BASE_URL;
const URL_COMPONENT = `${BASE_URL}/condos`;

export const getTypesCondos = async () => {
    const url = `${URL_COMPONENT}/types`;
    return await getListByUserId(url);
}

export const getCondoList = async ()=> {
    const url = `${URL_COMPONENT}/list-by-user`;
    return await getListByUserId(url);
}

export const getCondo = async ()=> {
    const url = `${URL_COMPONENT}`;
    return await getListByUserId(url);
}

export const createCondo = async (data) => {
    const url = `${URL_COMPONENT}`;
    return await create(data, url);
}

export const createInvitationCode = async (quantity: number)=> {
    const url = `${URL_COMPONENT}/invite-resident/${quantity}`;
        return await helpHttp().post(url)
            .then(resp => resp)
            .catch(err => {
                console.error('ser ', err);
                return err.response;
            })
}

