import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AuthRoutes} from '../auth/routes/AuthRoutes';
import {BifrostRoutes} from '../bifrost/routes/BifrostRoutes';
import {PublicRoutes} from '../auth/routes/PublicRoutes';
import {PrivateRoutes} from '../auth/routes/PrivateRoutes';

export const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/auth/*' element={
                    <PublicRoutes>
                        <AuthRoutes/>
                    </PublicRoutes>
                }/>

                <Route path='/*' element={
                    <PrivateRoutes>
                        <BifrostRoutes/>
                    </PrivateRoutes>
                }/>
            </Routes>
        </BrowserRouter>
    )
}