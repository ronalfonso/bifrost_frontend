import {GeneralContext} from './GeneralContext';
import {useState} from 'react';
import {Invitation} from '../core/models/invitations/Invitation';
import {Home} from '../core/models/homes/Home';

export const GeneralProvider = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isUnauthorized, setIsUnauthorized] = useState(false);
    const [isOpenInvitation, setIsOpenInvitation] = useState(false);
    const [invitationSelected, setInvitationSelected] = useState<Invitation>(null);
    const [homeSelected, setHomeSelected] = useState(null);
    const [codeInvite, setCodeInvite] = useState('');
    const [userRegisterSubmit, setUserRegisterSubmit] = useState(false);
    const [residentRegisterSubmit, setResidentRegisterSubmit] = useState(false);
    const [userIdRegister, setUserIdRegister] = useState('');
    const [homeListRegister, setHomeListRegister] = useState<Home[]>([]);
    const [showRegister, setShowRegister] = useState(false);
    const [typeRegister, setTypeRegister] = useState('');

    const data = {
        showSidebar, setShowSidebar,
        isLoading, setIsLoading,
        isUnauthorized, setIsUnauthorized,
        isOpenInvitation, setIsOpenInvitation,
        invitationSelected, setInvitationSelected,
        homeSelected, setHomeSelected,
        codeInvite, setCodeInvite,
        userRegisterSubmit, setUserRegisterSubmit,
        residentRegisterSubmit, setResidentRegisterSubmit,
        userIdRegister, setUserIdRegister,
        homeListRegister, setHomeListRegister,
        showRegister, setShowRegister,
        typeRegister, setTypeRegister,
    }

    return (
        <GeneralContext.Provider value={ data } >
            { children }
        </GeneralContext.Provider>
    )
}