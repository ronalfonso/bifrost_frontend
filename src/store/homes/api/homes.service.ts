import {environment} from '../../../environment';
import {helpHttp} from '../../../core/helpers/helpHttp';
import {create} from '../../thunks-utils';

const BASE_URL = environment.BASE_URL;
const URL_COMPONENT = `${BASE_URL}/homes`;

export const getHomesListByCode = async (code: string) => {
    const url = `${URL_COMPONENT}/condo/${code}`;
    try {
        return await helpHttp().get(url)
            .then(resp => resp);
    } catch (err) {
        const {data} = err.response;
        return data;
    }
}

export const getHomesCondo = async () => {
    const url = `${URL_COMPONENT}/of-condo`;
    try {
        return await helpHttp().get(url)
            .then(resp => resp);
    } catch (err) {
        const {data} = err.response;
        return data;
    }
}

export const createHomesOfCondo = async (data) => {
    const url = `${URL_COMPONENT}/condo`;
    return await create(data, url);
}