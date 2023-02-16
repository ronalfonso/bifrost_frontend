import { Route, Routes } from 'react-router-dom';
import { BifrostPage } from '../pages/BifrostPage';
import { ProfilePage } from '../pages/ProfilePage';

export const BifrostRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={ <BifrostPage /> }/>
            <Route path="/profile" element={ <ProfilePage /> }/>

            <Route path="/" element={ <BifrostPage /> }/>
        </Routes>
    )
}