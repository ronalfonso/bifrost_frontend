import {Home} from "../homes/Home";

export interface ResidentHomes {
    id: string;
    firsName: string;
    lastName: string;
    invitations: any[]
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