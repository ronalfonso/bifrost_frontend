import {GeneralContext} from './GeneralContext';
import {useState} from 'react';
import {Invitation} from '../core/models/invitations/Invitation';

export const GeneralProvider = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isUnauthorized, setIsUnauthorized] = useState(false);
    const [isOpenInvitation, setIsOpenInvitation] = useState(false);
    const [invitationSelected, setInvitationSelected] = useState<Invitation>(null);
    const data = {
        showSidebar, setShowSidebar,
        isLoading, setIsLoading,
        isUnauthorized, setIsUnauthorized,
        isOpenInvitation, setIsOpenInvitation,
        invitationSelected, setInvitationSelected
    }

    return (
        <GeneralContext.Provider value={ data } >
            { children }
        </GeneralContext.Provider>
    )
}