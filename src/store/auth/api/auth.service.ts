import {environment} from '../../../environment';
import axios from 'axios';

const BASE_URL = environment.BASE_URL;
const URL_COMPONENT = `${BASE_URL}/auth`


export const loginUser = async (body) => {
    try {
        return await axios.post(`${URL_COMPONENT}/login`, body)
            .then(resp => resp);
    } catch (err) {
        const {data} = err.response;
        return data;
    }
}