import { Route, Routes } from 'react-router-dom';
import { BifrostPage } from '../pages/BifrostPage';
import {routes} from './routes';

export const BifrostRoutes = () => {
    return (
        <Routes>
            {
                routes.map((page) => (
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    <Route key={page.path} path={page.path} element={page.element} />
                ))
            }
            {/*<Route path="/home" element={ <BifrostPage /> }/>*/}
            {/*<Route path="/profile" element={ <ProfilePage /> }/>*/}

            <Route path="/" element={ <BifrostPage /> }/>
        </Routes>
    )
}