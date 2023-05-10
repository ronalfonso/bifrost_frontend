import {Home} from "../homes/Home";
import {Invitation} from '../invitations/Invitation';

export interface ResidentHomes {
    id: string;
    firstName: string;
    lastName: string;
    invitations: Invitation[]
    mobilePhone: string;
    phoneNumber: string;
    home: Home;
    isDeleted: boolean;
    updatedAt: string;
    createdAt: string;
    deletedAt: string;
}

export interface ResidentState extends Omit<ResidentHomes, 'createdAt' | 'deletedAt' | 'updatedAt' | 'invitations'> {

}