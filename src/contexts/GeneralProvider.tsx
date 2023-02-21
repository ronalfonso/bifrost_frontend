import {GeneralContext} from './GeneralContext';
import {useState} from 'react';

export const GeneralProvider = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const data = {
        showSidebar, setShowSidebar,
        isLoading, setIsLoading
    }

    return (
        <GeneralContext.Provider value={ data } >
            { children }
        </GeneralContext.Provider>
    )
}