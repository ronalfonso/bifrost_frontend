import React, {lazy} from 'react';

const SCREENS = {
    HOME: lazy(() => import('../pages/BifrostPage')),
    PROFILE: lazy(() => import('../pages/ProfilePage')),
}

export const routes = [
    {
        path: '/home',
        element: <SCREENS.HOME />,
        name: 'home'
    },
    {
        path: '/profile',
        element: <SCREENS.PROFILE />,
        name: 'profile'
    },
]