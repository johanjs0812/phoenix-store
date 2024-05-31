import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any[]>('http://localhost:3000/phoenix/products');
  };

  getbyID(id:string) {
    return this.http.get<any[]>(`http://localhost:3000/phoenix/products/${id}`);
  };

  update(id: string, updatedData: any) {
    return this.http.put(`http://localhost:3000/phoenix/products/edit/${id}`, updatedData);
  };

  addData(data: any) {
    return this.http.post(`http://localhost:3000/phoenix/products/add`, data);
  };

  delete(id: string) {
    return this.http.delete(`http://localhost:3000/phoenix/products/delete/${id}`);
  };
}
