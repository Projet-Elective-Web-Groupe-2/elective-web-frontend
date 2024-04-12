import { Menu } from "./menu.model";


export interface Orders {
    address: string;
    clientID: number;
    date: string;
    id: string;
    menus: Menu[];
    status: string;
    products: Menu[];
    totalPrice: number; 
    refusedBy: any[];
}