import React, {SyntheticEvent, useContext, useEffect, useMemo, useState} from 'react';
import {LoginComponent} from '../components/LoginComponent';
import {useAppSelector} from '../../store';
import {useTranslation} from "react-i18next";
import {Alert, CircularProgress, IconButton, Snackbar, Tooltip} from '@mui/material';
import {LoginOutlined, PersonAddAlt1Outlined} from '@mui/icons-material';
import {RegisterComponent} from '../components/RegisterComponent';
import {RegisterContext} from "../../contexts/register/RegisterContext";
import {UseCheckAuth} from "../../core/hooks";

type positionHorizontal = "right" | "center" | "left";
type positionVertical = "top" | "bottom";

export const LoginPage = () => {
    const {status} = UseCheckAuth();
    const isAuthenticated = useMemo(() => status === 'authenticated', [status]);
    const {showRegister, setShowRegister} = useContext<any>(RegisterContext);
    const [alert, setAlert] = useState({
        open: false,
        vertical: 'top' as positionVertical,
        horizontal: 'right' as positionHorizontal,
        message: ''
    });
    const error = useAppSelector((state) => state.auth.error);
    const {t} = useTranslation();
    const {vertical, horizontal, open, message} = alert;

    const showToastError = (message: string) => {
        setAlert({...alert, open: true, message});
    }

    const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlert({...alert, open: false, message: ''});
    };

    useEffect(() => {
        if (error) {
            showToastError(error.message);
        }
    }, [error]);

    return (
        <>
            {
                isAuthenticated &&
                <div className={'loading-login'}>
                    <CircularProgress
                        color="primary"
                        size="md"
                        value={25}
                        title={'Loading...'}
                    />
                </div>
            }

            <div className="main__loginPage">
                <div className={`section_login ${!showRegister ? '' : "hideLogin"}`}>
                    <div className={`showLoginComponent ${!showRegister ? '' : "hideLoginComponent"}`}>
                        <LoginComponent/>
                    </div>
                </div>
                <div className="buttons">
                    <Tooltip title={'login'}>
                        <IconButton className={'button-login'}
                                    onClick={() => setShowRegister(false)}
                                    aria-label="delete">
                            <LoginOutlined/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={'register'} placement="top">
                        <IconButton className={'button-register'}
                                    onClick={() => setShowRegister(true)}
                                    aria-label="delete">
                            <PersonAddAlt1Outlined/>
                        </IconButton>
                    </Tooltip>
                </div>
                <div className={`section_register ${showRegister ? 'showRegister' : ""}`}>
                    <div className={`showRegisterComponent ${showRegister ? '' : "hideRegisterComponent"}`}>
                        <RegisterComponent/>
                    </div>

                </div>

            </div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                anchorOrigin={{vertical, horizontal}}
                onClose={handleClose}
                key={vertical + horizontal}
            >
                <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                    {t(`OUT.LOGIN.${message}`)}
                </Alert>
            </Snackbar>
        </>
    )
}

export default LoginPage;