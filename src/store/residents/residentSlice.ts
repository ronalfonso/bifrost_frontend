import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    residents: [],
    homes: [],
    condos: [],
}

export const residentSlice = createSlice({
    name: 'Resident',
    initialState,
    reducers: {
        initCondos: (state, {payload}) => {
            state.residents = [...state.residents];
            state.homes = [...state.homes];
            state.condos = [...payload];
        },
        initHomes: (state, {payload}) => {
            state.residents = [...state.residents];
            state.homes = [...payload];
            state.condos = [...state.condos];
        },
        initResident: (state, {payload}) => {
            state.residents = [...payload];
            state.homes = [...state.homes];
            state.condos = [...state.condos];
        },
    }
})

export const { initResident, initHomes, initCondos } = residentSlice.actions;