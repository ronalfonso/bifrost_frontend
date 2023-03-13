import {UseCheckAuth} from '../core/hooks';
import {Navigate} from 'react-router-dom';

export const PrivateRoutes = ({children}) => {
    const {status} = UseCheckAuth();

    return (
        (status === 'authenticated')
            ?  children
            :  <Navigate to={'/auth/login'}/>
    )

}