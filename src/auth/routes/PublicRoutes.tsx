import {UseCheckAuth} from '../../core/hooks';
import {Navigate} from 'react-router-dom';

export const PublicRoutes = ({children}) => {
    const {status} = UseCheckAuth();

    return (
        (status !== 'not-authenticated' && status !== 'checking')
            ? <Navigate to={'/'}/>
            : children
    )

}