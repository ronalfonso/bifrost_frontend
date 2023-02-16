import {useContext} from 'react';
import { useAppSelector } from '../../../store';
import logoWhite from '../../../assets/img/bifrost_color.png'
import {Button} from 'primereact/button';
import {SidebarComponent} from './SidebarComponent';
import {GeneralContext} from '../../../core/context/GeneralContext';



export const HeaderComponent = () => {
    // @ts-ignore
    const { setShowSidebar } = useContext(GeneralContext);
    const { user } = useAppSelector((state) => state.auth)
    let name = '';
    if (user) {
        name = user.username.substring(0, 1).toUpperCase() + user.username.substring(1, user.username.length)
    }

    return (
        <>
            <SidebarComponent />
            <div className={'left'}>
                <div className="menu">
                    <div className={`button_content `}>
                        <Button icon={`pi pi-bars`}
                                onClick={() => setShowSidebar(true)}
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