import { Menu } from "./menu.model";

export interface Restaurants {
    _id: string;
    name: string;
    image: string;
    ownerID: number;
    address: string;
    isOpen: boolean;
    menus: any[]; 
    products: Menu[];
    orders: any[]; 
    __v: number;
    id: string;
}

export interface InfoRestaurantModel {
    restaurant: Restaurants;
}
