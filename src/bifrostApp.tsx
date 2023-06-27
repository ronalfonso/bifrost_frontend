import React, {Suspense, useContext, useEffect, useMemo} from 'react';
import {createTheme, ThemeProvider, useMediaQuery} from '@mui/material';
import {theme} from './theme/theme';
import './core/translations/index';
import './styles/styles.scss';
import {FiltersProvider} from "./contexts/filters/FiltersProvider";
import {RegisterProvider} from "./contexts/register/RegisterProvider";
import {Wrapper} from "./layout/Wrapper/Wrapper";
import {LoadingGlobalComponent} from "./core/shared/ui/components/LoadingGlobalComponent";
import {useLocation, useNavigate} from "react-router-dom";
import {ToastCustom} from "./core/components/toast/ToastCustom";
import {GeneralContext} from "./contexts/general/GeneralContext";
import {TypeError} from "./core/models/general/Toast";

export const BifrostApp = () => {
    const {toast} = useContext<any>(GeneralContext);
    const location = useLocation();
    const navigate = useNavigate();
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    useMemo(() => createTheme({
        palette: {
            mode: prefersDarkMode ? 'dark' : 'light',
        },
    }), [prefersDarkMode]);

    useEffect(() => {
        const prev = window.localStorage.getItem('pathPrev')
        if (prev) {
            navigate(prev)
        }
    }, [location]);

    return (
        <ThemeProvider theme={theme}>
            <RegisterProvider>
                <FiltersProvider>
                    <div className={`toast_custom ${toast.type === TypeError.NONE ? 'toast-none' : ''} animate__animated ${toast.type === TypeError.NONE ? '' : 'animate__fadeInRight'} animate__faster`}>
                        <ToastCustom />
                    </div>
                    <Suspense fallback={<LoadingGlobalComponent/>}>
                        <Wrapper/>
                    </Suspense>
                </FiltersProvider>
            </RegisterProvider>
        </ThemeProvider>
    )
}
