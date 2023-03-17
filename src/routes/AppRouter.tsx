import {Suspense} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AuthRoutes} from '../auth/routes/AuthRoutes';
import {BifrostRoutes} from '../bifrost/router/BifrostRoutes';
import {PublicRoutes} from './PublicRoutes';
import {PrivateRoutes} from './PrivateRoutes';
import {HeaderComponent} from '../bifrost/pages/UI/HeaderComponent';
import {FooterComponent} from '../bifrost/pages/UI/FooterComponent';
import {LoadingGlobalComponent} from '../core/shared/ui/components/LoadingGlobalComponent';

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

                        <div className={'main_container'}>
                            <HeaderComponent/>
                            <Suspense fallback={<LoadingGlobalComponent />}>
                                <div className={'body_container'}>
                                    <BifrostRoutes/>
                                </div>
                            </Suspense>

                            <div className={'footer_container'}>
                                <FooterComponent/>
                            </div>
                        </div>
                    </PrivateRoutes>
                }/>
            </Routes>
        </BrowserRouter>
    )
}