import {useEffect, useState} from 'react';
import {LoginComponent} from '../components/LoginComponent';
import {useAppSelector} from '../../store';
import {useTranslation} from "react-i18next";
import {Alert, IconButton, Snackbar} from '@mui/material';
import {LoginOutlined, PersonAddAlt1Outlined} from '@mui/icons-material';

type positionHorizontal = "right" | "center" | "left";
type positionVertical = "top" | "bottom";

export const LoginPage = () => {
    const [ showRegister, setShowRegister ] = useState(false);
    const [alert, setAlert] = useState({
        open: false,
        vertical: 'top' as positionVertical,
        horizontal: 'right' as positionHorizontal,
        message: ''
    });
    const error = useAppSelector((state) => state.auth.error);
    const { t } = useTranslation();
    const { vertical, horizontal, open, message } = alert;

    const showToastError = (message: string) => {
        setAlert({...alert, open: true, message});
    }

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
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
            <div className="main__loginPage">
                <div className={`section_login ${!showRegister ? '' : "hideLogin"}`}>
                    <div className={`showLoginComponent ${!showRegister ? '' : "hideLoginComponent"}`}>
                        <LoginComponent/>
                    </div>
                </div>
                <div className="buttons">
                    <IconButton className={'button-login'}
                                onClick={() => setShowRegister(false)}
                                aria-label="delete">
                        <LoginOutlined />
                    </IconButton>
                    <IconButton className={'button-register'}
                                onClick={() => setShowRegister(true)}
                                aria-label="delete">
                        <PersonAddAlt1Outlined />
                    </IconButton>
                </div>
                <div className={`section_register ${showRegister ? 'showRegister' : ""}`}>Register</div>

            </div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                anchorOrigin={{ vertical, horizontal }}
                onClose={handleClose}
                key={vertical + horizontal}
            >
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {t(`OUT.LOGIN.${message}`)}
                </Alert>
            </Snackbar>
        </>
    )
}