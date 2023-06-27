import {Condo} from '../../core/models/condos/Condo';
import {HousingType} from '../../core/models/condos/housing-type';
import {createSlice} from '@reduxjs/toolkit';
import {Resident} from '../../core/models/residents/Resident';
import {Home} from '../../core/models/homes/Home';

const initType: HousingType = {
    id: 0,
    description: ''
}

const initCondoState: Condo = {
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

const initResidentsState: Resident[] = [
    {
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
    infoCondo: initCondoState,
    residentsCondo: initResidentsState,
    homesCondo: initHomesState
}

export const condoSlice = createSlice({
    name: 'Condo',
    initialState,
    reducers: {
        initCondo: (state, {payload}) => {
            state.infoCondo = payload;
        },
        initCondoResidents: (state, {payload}) => {
            state.residentsCondo = payload;
        },
        initCondoHomes: (state, {payload}) => {
            state.homesCondo = payload;
        },
    }
})

export const {initCondo, initCondoResidents, initCondoHomes} = condoSlice.actions;