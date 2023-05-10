import axios from 'axios';
import {db} from '../database/db';

export const AxiosInterceptor = () => {
    const updateHeader = async (request) => {
        const accessToken = localStorage.getItem('access_token');
        const response = await db.authData.toArray();

        if (response.length > 0) {
            request.headers = {
                Authorization: 'Bearer ' + response[0].access_token,
            };
        } else {
            request.headers = {
                Authorization: 'Bearer ' + accessToken,
            };
        }
        return request;
    }
    axios.interceptors.request.use( (request) => {
        if (request.url?.includes('auth')) return request;
        return updateHeader(request);
    })


}