import Dexie, { Table } from 'dexie';

export interface AuthData {
    id?: number,
    uuid: string,
    user: string,
    access_token: string,
    status: string,
    error: Error
}

export class DababaseConexion extends Dexie {

    authData!: Table<AuthData>;

    constructor() {
        super('bifrostApp');
        this.version(3).stores({
            authData: '++id,uuid,user,access_token,status,error'
        })
    }
}

export const db = new DababaseConexion();
