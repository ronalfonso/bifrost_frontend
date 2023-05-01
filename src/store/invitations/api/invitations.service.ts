import {environment} from '../../../environment';
import {helpHttp} from '../../../core/helpers/helpHttp';


const BASE_URL = environment.BASE_URL;
const URL_COMPONENT = `${BASE_URL}/invitations`;

export const createInvitation = async (data: any) => {
    const url = `${URL_COMPONENT}`;
    return helpHttp().post(url, {data}).then((resp) => {
        return resp;
    })
        .catch(err => console.log(err));
}