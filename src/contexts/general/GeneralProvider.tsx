import {useState} from 'react';
import {GeneralContext} from './GeneralContext';
import {Invitation} from '../../core/models/invitations/Invitation';
import {StepInvitation} from "../models/step-invitation";
import {Toast, TypeError} from "../../core/models/general/Toast";


export const GeneralProvider = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isUnauthorized, setIsUnauthorized] = useState(false);
    const [isOpenInvitation, setIsOpenInvitation] = useState(false);
    const [invitationSelected, setInvitationSelected] = useState<Invitation>(null);
    const [homeSelected, setHomeSelected] = useState(null);
    const [codeInvite, setCodeInvite] = useState('');
    const [itemEdit, setItemEdit] = useState(null);
    const [prevStep, setPrevStep] = useState(false);
    const [toast, setToast] = useState<Toast>({
        message: '',
        subMessage: '',
        type: TypeError.NONE,
        time: 3000,
    });
    const [stepInv, setStepInv] = useState<StepInvitation>({
        personalData: false,
        vehicleData: false,
        invData: false
    });


    const data = {
        showSidebar, setShowSidebar,
        isLoading, setIsLoading,
        isUnauthorized, setIsUnauthorized,
        isOpenInvitation, setIsOpenInvitation,
        invitationSelected, setInvitationSelected,
        homeSelected, setHomeSelected,
        codeInvite, setCodeInvite,
        itemEdit, setItemEdit,
        stepInv, setStepInv,
        prevStep, setPrevStep,
        toast, setToast,
    }

    return (
        <GeneralContext.Provider value={ data } >
            { children }
        </GeneralContext.Provider>
    )
}