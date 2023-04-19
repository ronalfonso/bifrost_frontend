import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    invitations: []
}

export const invitationSlice = createSlice({
    name: 'Invitation',
    initialState,
    reducers: {
        invitations: (state, {payload}) => {
            state.invitations = [...payload]
        }
    }
})

export const {invitations} = invitationSlice.actions;