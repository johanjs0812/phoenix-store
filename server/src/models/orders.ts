import { BaseData } from './base';

interface Product {
    productId: string;
    quantity: string;
}

export interface Iorders {
    id: string;
    userId: string;
    products: Product[];
    total: string;
    cre: string;
}

export class Orders extends BaseData<Iorders> {
    constructor() {
     super('orders');
    }
}
