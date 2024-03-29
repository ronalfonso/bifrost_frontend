import {Condo} from "../condos/Condo";

export interface Home {
    description: string;
    id: number;
    latitude: number;
    longitude: number;
    numberHouse: number;
    statusAssetsId: number;
    condo: Condo;
    createdAt: string;
    deletedAt: string;
    updatedAt: string;
}