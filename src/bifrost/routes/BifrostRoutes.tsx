import {Navigate, Route, Routes} from 'react-router-dom';
import {BifrostPage} from '../pages/BifrostPage';

export const BifrostRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <BifrostPage /> }/>

            <Route path="/*" element={ <Navigate to="/"/> }/>
        </Routes>
    )
}