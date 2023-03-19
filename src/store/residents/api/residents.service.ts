import { environment } from '../../../environment';
import { helpHttp } from '../../../core/helpers/helpHttp';


const BASE_URL = environment.BASE_URL;
const URL_COMPONENT = `${BASE_URL}/residents`

export const getHomeResidents = async (userId) => {
    const url = `${URL_COMPONENT}/${userId}/by-user`;
    return helpHttp().get(url).then(resp => {
        return resp;
    })
        .catch(err => console.log(err));
}