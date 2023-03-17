import { ResidentState } from '../../core/models/residents/Resident-homes';
import {createSlice} from '@reduxjs/toolkit';

const initialState:ResidentState[] = []

export const residentSlice = createSlice({
    name: 'Resident',
    initialState,
    reducers: {
        initResident: (state, {payload}) => [...payload]
    }
})

export const { initResident } = residentSlice.actions;