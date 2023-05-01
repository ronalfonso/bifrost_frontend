import {environment} from '../../../environment';
import {helpHttp} from '../../../core/helpers/helpHttp';

const BASE_URL = environment.BASE_URL;
const URL_COMPONENT = `${BASE_URL}/auth`


export const loginUser = async (data) => {
    const url = `${URL_COMPONENT}/login`;
    try {
        return await helpHttp().post(url, {data})
            .then(resp => resp);
    } catch (err) {
        const {data} = err.response;
        return data;
    }
}