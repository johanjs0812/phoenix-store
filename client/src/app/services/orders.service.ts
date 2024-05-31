import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any[]>('phoenix/ordershttp://localhost:3000/');
  };

  getbyID(id:string) {
    return this.http.get<any[]>(`http://localhost:3000/phoenix/orders/${id}`);
  };

  update(id: string, updatedData: any) {
    return this.http.put(`http://localhost:3000/phoenix/orders/edit/${id}`, updatedData);
  };

  addData(data: any) {
    return this.http.post(`http://localhost:3000/phoenix/orders/add`, data);
  };

}
