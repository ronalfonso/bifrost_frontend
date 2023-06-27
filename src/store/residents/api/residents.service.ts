import { environment } from '../../../environment';
import {create, getListByUserId} from '../../thunks-utils';


const BASE_URL = environment.BASE_URL;
const URL_COMPONENT = `${BASE_URL}/residents`

export const getResident = async () => {
    const url = `${URL_COMPONENT}/find/resident-by-user`;
    return await getListByUserId(url);
}

export const createResident = async (data) => {
    const url = `${URL_COMPONENT}`;
    return await create(data, url);
}