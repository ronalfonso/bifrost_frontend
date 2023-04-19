import { createInvitation } from "./api/invitations.service";

export const startCreateInvitation = (data) => {
    return async (dispatch) => {
        console.log(data);
        return await createInvitation(data).then(resp => {
            console.log(resp);
        })
    }
}