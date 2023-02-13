import {Route, Routes} from 'react-router-dom';
import {AuthRoutes} from '../auth/routes/AuthRoutes';
import {BifrostRoutes} from '../bifrost/routes/BifrostRoutes';

export const AppRouter = () => {
    return (
        <Routes>
            {/*Login y registro*/}
            <Route path="/auth/*" element={ <AuthRoutes /> } />

            {/*Rutas protegidas*/}
            <Route path="/*" element={ <BifrostRoutes /> } />
        </Routes>
    )
}