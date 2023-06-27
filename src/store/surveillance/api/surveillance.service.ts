import {environment} from "../../../environment";
import {getListByUserId} from "../../thunks-utils";

const BASE_URL = environment.BASE_URL;
const URL_COMPONENT = `${BASE_URL}/surveillance`;

export const getSurveillanceList = async () => {
    const url = `${URL_COMPONENT}/list-by-user`;
    return await getListByUserId(url);
}