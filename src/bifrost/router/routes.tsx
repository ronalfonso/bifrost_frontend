import {lazy, LazyExoticComponent} from 'react';

type JSXComponent = () => JSX.Element;
interface Route {
    to: string,
    path: string,
    Component:  LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string,
}

const SCREENS = {
    HOME: lazy(() => import(/*webpackChunkName: "Home" */'../pages/BifrostPage')),
    PROFILE: lazy(() => import(/*webpackChunkName: "Profile" */'../pages/ProfilePage')),
}

export const routes: Route[] = [
    {
        to: '/home',
        path: 'home',
        Component: SCREENS.HOME,
        name: 'Home'
    },
    {
        to: '/profile',
        path: 'profile',
        Component: SCREENS.PROFILE,
        name: 'Profile'
    },
]