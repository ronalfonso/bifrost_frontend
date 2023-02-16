import {Button} from 'primereact/button';
import {useEffect, useRef, useState} from 'react';
import {LoginComponent} from './components/LoginComponent';
import {useAppSelector} from '../../store';
import {Toast} from 'primereact/toast';

export const LoginPage = () => {
    const toastError = useRef(null);
    const [showRegister, setShowRegister] = useState(false);
    const error = useAppSelector((state) => state.auth.error);

    const showToastError = () => {
        toastError.current.show({severity: 'error', summary: 'Error', detail: 'Usuario o password incorrectos'})
    }

    useEffect(() => {
        if (error) {
            showToastError();
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
                    <Button onClick={() => setShowRegister(false)} icon="pi pi-sign-in"
                            className="p-button-rounded button-login" aria-label="Filter"/>

                    <Button onClick={() => setShowRegister(true)} icon="pi pi-user-plus" className="p-button-rounded"
                            aria-label="Filter"/>
                </div>
                <div className={`section_register ${showRegister ? 'showRegister' : ""}`}>Register</div>

            </div>
            <Toast ref={toastError}/>
        </>
    )
}