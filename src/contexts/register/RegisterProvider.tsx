import {RegisterContext} from "./RegisterContext";
import {useState} from "react";
import {Home} from "../../core/models/homes/Home";


export const RegisterProvider = ({children}) => {
    const [userRegisterSubmit, setUserRegisterSubmit] = useState(false);
    const [residentRegisterSubmit, setResidentRegisterSubmit] = useState(false);
    const [condoRegisterSubmit, setCondoRegisterSubmit] = useState(false);
    const [userIdRegister, setUserIdRegister] = useState('');
    const [homeListRegister, setHomeListRegister] = useState<Home[]>([]);
    const [showRegister, setShowRegister] = useState(false);
    const [typeRegister, setTypeRegister] = useState('');

    const data = {
        userRegisterSubmit, setUserRegisterSubmit,
        residentRegisterSubmit, setResidentRegisterSubmit,
        condoRegisterSubmit, setCondoRegisterSubmit,
        userIdRegister, setUserIdRegister,
        homeListRegister, setHomeListRegister,
        showRegister, setShowRegister,
        typeRegister, setTypeRegister,
    }
    return (
        <RegisterContext.Provider value={ data }>
            {children}
        </RegisterContext.Provider>
    )


}