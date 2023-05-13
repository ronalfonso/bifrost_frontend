import {environment} from '../../../environment';
import {helpHttp} from '../../../core/helpers/helpHttp';

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