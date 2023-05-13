import {Role} from '../../../store/auth/models/Role';

export class User {
    createdAt: string;
    deletedAt: string;
    email: string;
    isActive: boolean;
    isDeleted: boolean;
    role: Role;
    updatedAt: string;
    username: string;
    id: string;
}