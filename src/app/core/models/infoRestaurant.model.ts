import { Menu } from "./menu.model";

export interface Restaurant {
    _id: string;
    name: string;
    image: string;
    ownerID: number;
    address: string;
    isOpen: boolean;
    menus: any[]; // Vous pouvez remplacer any par le type approprié si nécessaire
    products: Menu[];
    orders: any[]; // Vous pouvez remplacer any par le type approprié si nécessaire
    __v: number;
    id: string;
}

export interface InfoRestaurantModel {
    restaurant: Restaurant;
}
