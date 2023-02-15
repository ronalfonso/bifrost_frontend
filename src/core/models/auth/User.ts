import {Role} from './Role';

export class User {
    createdAt: string;
    deletedAt: string;
    email: string;
    isActive: boolean;
    isDeleted: boolean;
    role: Role;
    updatedAt: string;
    username: string;
    uuid: string;
}