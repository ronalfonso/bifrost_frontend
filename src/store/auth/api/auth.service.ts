import {environment} from '../../../environment';
import axios from 'axios';

const BASE_URL = environment.BASE_URL;
const URL_COMPONENT = `${BASE_URL}/auth`


export const loginUser = async (body) => {
    const url = `${URL_COMPONENT}/login`;
    try {
        return await axios.post(url, body)
            .then(resp => resp);
    } catch (err) {
        const {data} = err.response;
        return data;
    }
}