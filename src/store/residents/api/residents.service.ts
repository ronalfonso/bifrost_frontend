import { environment } from '../../../environment';
import { helpHttp } from '../../../core/helpers/helpHttp';


const BASE_URL = environment.BASE_URL;
const URL_COMPONENT = `${BASE_URL}/residents`

export const getResident = async (userId) => {
    const url = `${URL_COMPONENT}/${userId}/by-user`;
    return helpHttp().get(url).then(resp => {
        return resp;
    })
        .catch(err => console.log(err));
}

export const createResident = async (data) => {
    const url = `${URL_COMPONENT}`;
    try {
        return await helpHttp().post(url, {data})
            .then(resp => resp);
    } catch (err) {
        const {data} = err.response;
        return data;
    }
}