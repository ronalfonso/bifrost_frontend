import axios from 'axios';
import {db} from '../database/db';


export const AxiosInterceptor = () => {

    const updateHeader = async (request) => {
        const response = await db.authData.toArray();

        if (response.length > 0) {
            request.headers = {
                Authorization: 'Bearer ' + response[0].access_token,
            };
        }
        return request;
    }
    axios.interceptors.request.use( (request) => {
        if (request.url?.includes('auth')) return request;
        return updateHeader(request);
    })


}