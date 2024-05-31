import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any[]>('http://localhost:3000/phoenix/users');
  };

  getbyID(id:string) {
    return this.http.get<any[]>(`http://localhost:3000/phoenix/users/${id}`);
  };

  update(id: string, updatedData: any) {
    return this.http.put(`http://localhost:3000/phoenix/users/edit/${id}`, updatedData);
  };

  addData(data: any) {
    return this.http.post(`http://localhost:3000/phoenix/users/add`, data);
  };

  delete(id: string) {
    return this.http.delete(`http://localhost:3000/phoenix/users/delete/${id}`);
  };
}
