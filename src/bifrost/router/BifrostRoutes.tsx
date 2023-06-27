import {useEffect, useMemo} from "react";
import {Route, Routes, useNavigate} from 'react-router-dom';
import routes, {menu} from '../../routes/routes';
import {UseCheckAuth} from "../../core/hooks";

const BifrostRoutes = () => {
    const navigate = useNavigate();
    const {status} = UseCheckAuth();
    const isAuthenticated = useMemo(() => status === 'authenticated', [status]);

    useEffect(() => {
            if (isAuthenticated) {
                navigate(`../${menu.home.path}`);
            }
            if (!isAuthenticated) {
                navigate(`../${menu.login.path}`);
            }

        return () => {
        };
    }, [isAuthenticated]);

    return (
        <Routes>
            {
                routes.map((page) => (
                    <Route key={page.path} {...page} />
                ))
            }

            {/*<Route path="/auth/login" element={isAuthenticated ? <Navigate replace to={'/'} /> : <LoginPage /> }/>*/}
        </Routes>
    )
}

export default BifrostRoutes;