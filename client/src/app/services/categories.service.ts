import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<any[]>('http://localhost:3000/phoenix/categories');
  };

  getCategorybyID(id:string) {
    return this.http.get<any[]>(`http://localhost:3000/phoenix/categories/${id}`);
  };

  updateCategory(id: string, updatedData: any) {
    return this.http.put(`http://localhost:3000/phoenix/categories/edit/${id}`, updatedData);
  };

  addData(data: any) {
    return this.http.post(`http://localhost:3000/phoenix/categories/add`, data);
  };

  delete(id: string) {
    return this.http.delete(`http://localhost:3000/phoenix/categories/delete/${id}`);
  };
}
