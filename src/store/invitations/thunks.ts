import { createInvitation } from "./api/invitations.service";

export const startCreateInvitation = (data) => {
    return async (dispatch) => {
        return await createInvitation(data).then(resp => resp)
    }
}