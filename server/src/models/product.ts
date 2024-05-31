import { BaseData } from './base';

export interface IProduct {
    id: string ;
    name: string;
    des: string;
    img: string;
    categoryId: string;
    schome: string;
    price: string;
    qtt: string;
}

export class Products extends BaseData<IProduct> {
    constructor() {
        super('products');
    }
}
