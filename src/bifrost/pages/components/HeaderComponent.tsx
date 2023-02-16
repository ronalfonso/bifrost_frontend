import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../store';
import logoWhite from '../../../assets/img/bifrost_color.png'
import {Button} from 'primereact/button';
import {Sidebar} from 'primereact/sidebar';
import {startLogout} from '../../../store/auth';



export const HeaderComponent = () => {
    const dispatch = useAppDispatch();
    const [visible, setVisible] = useState<boolean>(false);
    const { user } = useAppSelector((state) => state.auth)
    const name = user.username.substring(0, 1).toUpperCase() + user.username.substring(1, user.username.length)

    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <>
            <div className="card flex justify-content-center">
                <Sidebar visible={visible} className="w-15rem md:w-20rem lg:w-30rem" onHide={() => setVisible(false)}>
                    <div className="content_sidebar">
                        <div className="menu_sidebar">

                        </div>
                        <div className="footer_sidebar" onClick={handleLogout}>
                            <i className="pi pi-sign-out mr-2"></i>
                            <span>Cerrar sessión</span>
                        </div>
                    </div>
                </Sidebar>
            </div>
            <div className={'left'}>
                <div className="menu">
                    <div className={`button_content `}>
                        <Button icon={`pi pi-bars`}
                                onClick={() => setVisible(true)}
                                className={`p-button-rounded p-button-text `}
                                aria-label="Filter"/>
                    </div>
                </div>
            </div>
            <div className={'center'}>
                <div className="username">
                    <h5>Bienvenido</h5>
                    <h3>{name}</h3>
                </div>
            </div>
            <div className="right">
                <div className="content_img">
                    <img src={logoWhite} width={'35px'} alt={'logo'}/>
                </div>
            </div>
        </>
    )
}