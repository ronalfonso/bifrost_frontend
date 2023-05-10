import {createSlice} from '@reduxjs/toolkit';
import {Resident} from '../../core/models/residents/Resident';
import {Condo} from '../../core/models/condos/Condo';
import {HousingType} from '../../core/models/condos/housing-type';
import {Home} from '../../core/models/homes/Home';

const initResidentState: Resident = {
    createdAt: '',
    deletedAt: '',
    firstName: '',
    id: '',
    isDeleted: false,
    lastName: '',
    mobilePhone: '',
    phoneNumber: '',
    updatedAt: ''
}

const initType: HousingType = {
    id: 0,
    description: ''
}

const initCondosState: Condo[] = [
    {
        createdAt: '',
        deletedAt: '',
        direction: '',
        id: '',
        idCondo: '',
        isActive: false,
        isDeleted: false,
        name: '',
        phoneNumber: '',
        type: initType,
        updatedAt: ''
    }
]

const initHomesState: Home[] = [
    {
        condo: undefined,
        createdAt: '',
        deletedAt: '',
        description: '',
        id: 0,
        latitude: 0,
        longitude: 0,
        numberHouse: 0,
        statusAssetsId: 0,
        updatedAt: ''
    }
]

const initialState = {
    resident: initResidentState,
    condos: initCondosState,
    homes: initHomesState
}

export const residentSlice = createSlice({
    name: 'Resident',
    initialState,
    reducers: {
        initResident: (state, {payload}) => {
            state.resident = payload;
        },
        initCondos: (state, {payload}) => {
            state.condos = payload;
        },
        initHomes: (state, {payload}) => {
            state.homes = payload;
        },
    }
})

export const { initResident, initCondos, initHomes } = residentSlice.actions;