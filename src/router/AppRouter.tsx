import {Navigate, Route, Routes} from 'react-router-dom';
import {AuthRoutes} from '../auth/routes/AuthRoutes';
import {BifrostRoutes} from '../bifrost/routes/BifrostRoutes';
import {UseCheckAuth} from '../core/hooks';

export const AppRouter = () => {
    const { status } = UseCheckAuth();

    return (
        <Routes>
            {
                (status === 'authenticated')
                    ? <Route path="/*" element={<BifrostRoutes/>}/>
                    : <Route path="/auth/*" element={<AuthRoutes/>}/>
            }

            <Route path='/*' element={<Navigate to='/auth/login'/>}/>

        </Routes>
    )
}