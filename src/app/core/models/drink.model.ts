export class DrinkModel {
    _id!: string;
    name!: string;
    image!: string;
    description!: string;
    price!: number;
    isDrink!: boolean;
    __v!: number;
}

export interface InfoDrink {
    drinks: DrinkModel[];
}
