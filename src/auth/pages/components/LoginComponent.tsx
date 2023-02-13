import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {useState} from 'react';
import logo from '../../../assets/img/bifrost_color.png';
import {Button} from 'primereact/button';


export const LoginComponent = () => {
    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const handleInput = ({target}: any) => {
        const {value, name} = target;
        if (value.length > 1000) {
            return;
        }
        setData({...data, [name]: value});
    };

    return (
        <>
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
                    <InputText placeholder="Username" value={data.username} onChange={handleInput} name="username"/>
                </div>

                <div className="p-inputgroup p-mt">
                    <span className="p-inputgroup-addon"> <i className="pi pi-eye-slash"></i></span>
                    <Password value={data.password} onChange={handleInput} name="password" feedback={false}
                              placeholder={'Contraseña'}/>
                </div>
            </div>

            <div className="footer_login ">
                <Button label={'Iniciar sesión'} className={'p-button-text p-button-raised'} style={{backgroundColor: 'white'}}/>
                <a >¿Olvidaste tu contraseña?</a>
            </div>
        </>
    )
}