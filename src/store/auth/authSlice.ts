import {createSlice} from '@reduxjs/toolkit';
import {User} from '../../core/models/auth/User';
import {Errors} from '../../core/models/Errors';

export interface AuthState {
    access_token: string,
    status: string,
    user: User,
    error: Errors,
}

const initialState: AuthState = {
    access_token: '',
    status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
    user: null,
    error: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, {payload}) => {
            state.status = 'authenticated'; // 'checking', 'not-authenticated', 'authenticated'
            state.access_token = payload.access_token;
            state.user = payload.user;
        },
        logout: (state, {payload}) => {
            state.status = 'not-authenticated'; // 'checking', 'not-authenticated', 'authenticated'
            state.access_token = '';
            state.user = null;
            state.error = payload;
        },
        checkingCredentials: (state) => {
            state.status = 'checking'
        },
    },
})

export const {login, logout, checkingCredentials} = authSlice.actions;