import {helpHttp} from '../core/helpers/helpHttp';


export const getListByUserId = async (url) => {
    return helpHttp().get(url).then(resp => {
        return resp;
    })
        .catch(err => console.log(err));
}

export const create = async (data, url) => {
    try {
        return await helpHttp().post(url, {data})
            .then(resp => resp);
    } catch (err) {
        const {data} = err.response;
        return data;
    }
}