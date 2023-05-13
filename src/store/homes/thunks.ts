import {getHomesListByCode} from './api/homes.service';
import {Home} from '../../core/models/homes/Home';

export const startGetHomesByCode = (code: string) => {
    return async (dispatch) => {
        return await getHomesListByCode(code).then((resp) => {
            if (resp.status === 202) {
                const homes: Home[] = resp.data;
                return homes;
            }
        });
    }
}