import {createHomesOfCondo, getHomesListByCode} from './api/homes.service';
import {Home} from '../../core/models/homes/Home';
import {CreateHomesCondo} from './models/homes-condo';

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

export const startCreateHomesOfCondo = (data: CreateHomesCondo) => {
    return async (dispatch) => {
        return await createHomesOfCondo(data).then((resp) => {
            if (resp.status === 201) {
                const homes: Home[] = resp.data;
                return homes;
            }
        })
    }
}