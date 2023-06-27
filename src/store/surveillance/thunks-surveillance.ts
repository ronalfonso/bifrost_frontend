import {getSurveillanceList} from "./api/surveillance.service";


export const startGetSurveillanceList = () => {
    return async (dispatch: any) => {
        return await getSurveillanceList().then(resp => {
            if (resp.status === 200) {
                return resp.data;
            }
        })
    }
}