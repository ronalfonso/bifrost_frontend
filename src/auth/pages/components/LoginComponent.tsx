import { useMemo } from 'react';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import logo from '../../../assets/img/bifrost_color.png';
import {Button} from 'primereact/button';
import { useForm } from '../../../core/hooks';
import { starLogin } from '../../../store/auth';
import { useAppDispatch, useAppSelector } from '../../../store';

const formData = {
    username: '',
    password: ''
}

const formValidations = {
    username: [(value) => value.length > 1, 'El username es requerido'],
    password: [(value) => value.length > 1, 'El password es requerido'],
}

export const LoginComponent = () => {
    const dispatch = useAppDispatch();
    const status = useAppSelector((state) => state.auth.status);
    const isCheckingAuth = useMemo(() => status === 'checking', [status]);

    const {username, password, onInputChange, isFormValid, usernameValid, passwordValid}: any = useForm(formData, formValidations);

    const onSubmit = async (e: any) => {
        e.preventDefault();
        if (!isFormValid) return;
        dispatch(starLogin({username, password}))
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="header_login">
                <div className="logo">
                    <img src={logo} alt="" width={'80px'}/>
                </div>
                <div className="title">
                    <h1>Bienvenido</h1>
                    <h4>Bifrost Security</h4>
                </div>
            </div>
            <div className="form_login flex flex-wrap row-gap-3">
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-user"></i>
                    </span>
                    <InputText placeholder="Username" value={username} onChange={onInputChange} name="username"/>
                </div>

                <div className="p-inputgroup p-mt">
                    <span className="p-inputgroup-addon"> <i className="pi pi-eye-slash"></i></span>
                    <Password value={password} onChange={onInputChange} name="password" feedback={false}
                              placeholder={'Contraseña'}/>
                </div>
            </div>

            <div className="footer_login ">
                <Button type="submit" label={'Iniciar sesión'} className={'p-button-text p-button-raised'}
                        style={{backgroundColor: 'white'}} disabled={!isFormValid || isCheckingAuth}/>
                <a href="/auth/login">¿Olvidaste tu contraseña?</a>
            </div>
        </form>
    )
}