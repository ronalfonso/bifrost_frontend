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
    INVITATIONS: lazy(() => import(/*webpackChunkName: "Invitations" */'../pages/invitations/create/InvitationsPage')),
    CREATE_INVITATION: lazy(() => import(/*webpackChunkName: "Invitations list" */'../pages/invitations/list/InvitationsListPage')),
    CONTACTS: lazy(() => import(/*webpackChunkName: "Contacts list" */'../pages/contacts/list/ContactsListPage')),
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
    {
        to: '/create-invitation',
        path: 'create-invitation',
        Component: SCREENS.INVITATIONS,
        name: 'Create invitation'
    },
    {
        to: '/list-invitation',
        path: 'list-invitation',
        Component: SCREENS.CREATE_INVITATION,
        name: 'Invitations'
    },

    {
        to: '/list-contacts',
        path: 'list-contacts',
        Component: SCREENS.CONTACTS,
        name: 'Contancts'
    },
]