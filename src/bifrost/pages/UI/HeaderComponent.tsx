import {useContext, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../store';
import logo from '../../../assets/img/bifrost_delimited.png'
import {SidebarMobileComponent} from './SidebarMobileComponent';
import {GeneralContext} from '../../../contexts/general/GeneralContext';
import {useTranslation} from "react-i18next";
import {useNavigate} from 'react-router-dom';
import {IconButton} from '@mui/material';
import {FilterAlt, Logout} from '@mui/icons-material';
import {capitalizeLabel} from '../../../core/utils/handle-lables';
import {RoleEnum} from '../../../store/auth/enum/role.enum';
import {menu} from "../../../routes/routes";
import {startLogout} from "../../../store/auth";

export const HeaderComponent = () => {
    const {setShowSidebar} = useContext<any>(GeneralContext);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {user} = useAppSelector((state) => state.auth)
    const {role} = useAppSelector((state) => state.auth.user);
    const {infoResident} = useAppSelector((state) => state.resident)
    const {t} = useTranslation();
    const [name, setName] = useState('');

    const handleGoHome = () => {
        navigate(`../${menu.home.path}`)
    }

    const handleLogout = () => {
        dispatch(startLogout()).then(() => {
            navigate(`../${menu.login.path}`)
        });
    }

    useEffect(() => {
        if (user.role.name === RoleEnum.CONDO) {
            setName(capitalizeLabel(user['condo'].name));
        } else if (user.role.name === RoleEnum.RESIDENT) {
            setName(capitalizeLabel(infoResident.firstName) + ' ' + capitalizeLabel(infoResident.lastName))
        }
    }, [user]);

    return (
        <>
            <SidebarMobileComponent/>
            <div className={'left'}>
                <div className="content_img" onClick={handleGoHome}>
                    <img src={logo} alt={'logo'}/>
                </div>
            </div>
            <div className={'center'}>
                <div className="username">
                    <h5>{t('OUT.LOGIN.WELCOME')}</h5>
                    <h3 style={{fontSize: '1rem'}}>{name}</h3>
                </div>
            </div>
            <div className="right">
                <div className="menu">
                    <div className={`button_content `}>
                        {
                            role.name === RoleEnum.VIGILANT &&
                            <IconButton onClick={() => handleLogout()} aria-label="delete">
                                <Logout/>
                            </IconButton>
                        }
                        {
                            role.name !== RoleEnum.VIGILANT &&
                            <IconButton onClick={() => setShowSidebar(true)} aria-label="delete">
                                <FilterAlt/>
                            </IconButton>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderComponent;