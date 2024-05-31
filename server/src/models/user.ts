import { BaseData } from './base';

export interface Iusers {
    id: string;
    name: string;
    email: string;
    pass: string;
    role: string;
}

export class Users extends BaseData<Iusers> {
    constructor() {
        super('users');
    }
}