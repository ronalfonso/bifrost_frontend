import {confirmInvitation, createInvitation, validateInvitation} from "./api/invitations.service";

export const startCreateInvitation = (data) => {
    return async (dispatch) => {
        return await createInvitation(data).then(resp => resp)
    }
}

export const startValidateInvitation = (invitationId: number) => {
    return async (dispatch) => {
        return await validateInvitation(invitationId).then(resp => resp)
    }
}

export const startConfirmInvitation = (data: any) => {
    return async (dispatch) => {
        return await confirmInvitation(data).then(resp => resp)
    }
}