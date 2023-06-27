import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit'
import { authSlice } from './auth';
import {residentSlice} from './residents/residentSlice';
import {invitationSlice} from './invitations/invitationSlice';
import {condoSlice} from './condos/condoSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        resident: residentSlice.reducer,
        invitation: invitationSlice.reducer,
        condo: condoSlice.reducer,
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
