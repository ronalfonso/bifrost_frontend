import {useContext} from 'react';
import { useAppSelector } from '../../../store';
import logo from '../../../assets/img/bifrost_color.png'
import {SidebarMobileComponent} from './SidebarMobileComponent';
import {GeneralContext} from '../../../contexts/GeneralContext';
import {useTranslation} from "react-i18next";
import {useNavigate} from 'react-router-dom';
import {IconButton} from '@mui/material';
import {MenuRounded} from '@mui/icons-material';



export const HeaderComponent = () => {
    // @ts-ignore
    const { setShowSidebar } = useContext(GeneralContext);
    const navigate = useNavigate();
    const { user } = useAppSelector((state) => state.auth)
    const { t } = useTranslation();
    let name = '';
    if (user) {
        name = user.username.substring(0, 1).toUpperCase() + user.username.substring(1, user.username.length)
    }

    const handleGoHome = () => {
        navigate('./home')
    }

    return (
        <div className={'header_container'}>
            <SidebarMobileComponent />
            <div className={'left'}>
                <div className="menu">
                    <div className={`button_content `}>
                        <IconButton onClick={() => setShowSidebar(true)} aria-label="delete">
                            <MenuRounded />
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className={'center'}>
                <div className="username">
                    <h5>{t('OUT.LOGIN.WELCOME')}</h5>
                    <h3>{name}</h3>
                </div>
            </div>
            <div className="right">
                <div className="content_img" onClick={handleGoHome}>
                    <img src={logo} alt={'logo'}/>
                </div>
            </div>
        </div>
    )
}