import { BaseData } from './base';

export interface Icate {
    id: string;
    name: string;
    slug:string;
    cre?:string;
    up?:string;
}

export class Category extends BaseData<Icate> {
    constructor() {
        super('categories');
    }
}
