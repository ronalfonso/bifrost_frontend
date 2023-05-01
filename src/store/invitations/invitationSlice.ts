import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    actives: [],
    inactives: [],
}

export const invitationSlice = createSlice({
    name: 'Invitations',
    initialState,
    reducers: {
        active: (state, {payload}) => {
            state.actives = [...payload]
        },
        inactive: (state, {payload}) => {
            state.inactives = [...payload]
        }
    }
})

export const {active, inactive} = invitationSlice.actions;