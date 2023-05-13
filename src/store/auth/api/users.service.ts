import {environment} from '../../../environment';
import {helpHttp} from '../../../core/helpers/helpHttp';
import {CreateUserDto} from '../dtos/create-user.dto';

const BASE_URL = environment.BASE_URL;
const URL_COMPONENT = `${BASE_URL}/users`

export const createUser = async (data: CreateUserDto) => {
    const url = `${URL_COMPONENT}`;
    try {
        return await helpHttp().post(url, {data})
            .then(resp => resp);
    } catch (err) {
        console.error('ser ', err);
        const {data} = err.response;
        return data;
    }
}