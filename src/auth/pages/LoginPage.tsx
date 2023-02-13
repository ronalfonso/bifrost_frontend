import {Button} from 'primereact/button';
import {useState} from 'react';
import {LoginComponent} from './components/LoginComponent';

export const LoginPage = () => {
    const [showRegister, setShowRegister] = useState(false);

    return (
        <div className="main__loginPage">
            <div className={`section_login ${!showRegister ? '' : "hideLogin"}`}>
                <div className={`showLoginComponent ${!showRegister ? '' : "hideLoginComponent"}`}>
                    <LoginComponent />
                </div>
            </div>
            <div className="buttons">
                <Button onClick={() => setShowRegister(false)} icon="pi pi-sign-in" className="p-button-rounded button-login" aria-label="Filter" />

                <Button onClick={() => setShowRegister(true)} icon="pi pi-user-plus" className="p-button-rounded" aria-label="Filter" />
            </div>
            <div className={`section_register ${showRegister ? 'showRegister' : ""}`}>Register</div>

        </div>
    )
}