import {Role} from './Role';

export class UserCreateResponse {
    id: string;
    username: string;
    email: string;
    isActive: boolean;
    isDeleted: boolean;
    isTemporal: boolean;
    updated: Date;
    delete: Date;
    created: Date;
    role: Role
}