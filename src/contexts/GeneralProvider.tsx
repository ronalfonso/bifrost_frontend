import {GeneralContext} from './GeneralContext';
import {useState} from 'react';

export const GeneralProvider = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const data = {
        showSidebar, setShowSidebar
    }

    return (
        <GeneralContext.Provider value={ data } >
            { children }
        </GeneralContext.Provider>
    )
}