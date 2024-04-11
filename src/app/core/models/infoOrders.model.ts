import { Menu } from "./menu.model";


export interface Orders {
    adress: string;
    clientID: number;
    date: string;
    id: string;
    menus: Menu[];
    status: boolean;
    products: Menu[];
    totalPrice: number; 
    refusedBy: any[];
}