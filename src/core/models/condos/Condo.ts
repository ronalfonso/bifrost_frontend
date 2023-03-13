import {HousingType} from "./housing-type";

export class Condo {
    id: string;
    idCondo: string;
    direction: string;
    name: string;
    isActive: boolean;
    isDeleted: boolean;
    phoneNumber: string;
    createdAt: string;
    deletedAt: string;
    updatedAt: string;

    type:HousingType;
}