import {environment} from '../../../environment';
import axios from 'axios';


const BASE_URL = environment.BASE_URL;
const URL_COMPONENT = `${BASE_URL}/residents`

export const getHomeResidents = async (userId) => {
    const url = `${URL_COMPONENT}/${userId}/by-user`;
    try {
        return await axios.get(url)
            .then(resp => resp.data);
    } catch (err) {
        const {data} = err.response;
        return data;
    }
}