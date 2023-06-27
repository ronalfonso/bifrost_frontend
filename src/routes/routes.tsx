import {lazy} from 'react';
import LoginPage from "../auth/pages/LoginPage";

const SCREENS = {
    LOGIN: lazy(() => import(/*webpackChunkName: "Login" */'../auth/pages/LoginPage')),
    HOME: lazy(() => import(/*webpackChunkName: "Home" */'../bifrost/pages/BifrostPage')),
    CONFIG: lazy(() => import(/*webpackChunkName: "Profile" */'../bifrost/pages/config/ConfigPage')),
    CREATE_INVITATION: lazy(() => import(/*webpackChunkName: "Invitations" */'../bifrost/pages/invitations/create/InvitationsPage')),
    INVITATIONS: lazy(() => import(/*webpackChunkName: "Invitations list" */'../bifrost/pages/invitations/list/InvitationsListPage')),
    CONTACTS: lazy(() => import(/*webpackChunkName: "Contacts list" */'../bifrost/pages/contacts/list/ContactsListPage')),
}

export const menu = {
    home: {
        id: 'home',
        name: 'home',
        text: 'HOME',
        path: '/',
    },
    config: {
        id: 'config',
        name: 'config',
        text: 'CONFIG',
        path: 'config',
    },
    createInvitation: {
        id: 'login',
        name: 'create invitation',
        text: 'CREATE INVITATION',
        path: 'create-invitation',
    },
    listInvitation: {
        id: 'list-invitation',
        name: 'invitations',
        text: 'LIST INVITATIOn',
        path: 'list-invitation',
    },
    listContacts: {
        id: 'contacts',
        name: 'contacts',
        text: 'CONTACTS',
        path: 'list-contacts',
    },
    login: {
        id: 'login',
        name: 'login',
        text: 'LOGIN',
        path: 'auth/login',
    },
}

export const routes = [

    /**
     * Landing
     */
    {
        path: menu.home.path,
        Component: SCREENS.HOME,
        exact: true
    },
    {
        path: menu.config.path,
        Component: SCREENS.CONFIG,
        exact: true
    },
    {
        path: menu.createInvitation.path,
        Component: SCREENS.CREATE_INVITATION,
        exact: true
    },
    {
        path: menu.listInvitation.path,
        Component: SCREENS.INVITATIONS,
        exact: true
    },

    {
        path: menu.listContacts.path,
        Component: SCREENS.CONTACTS,
        exact: true
    },

    /**
     * Auth Page
     */
    {
        path: menu.login.path,
        element: <LoginPage />,
        exact: true
    },

    /**
     * Headers
     */
    {
        path: menu.login.path,
        element: <LoginPage />,
        exact: true
    },

    /**
     * Footers
     */
]

export default routes;