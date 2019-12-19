import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/employees';


  getAllEmployee(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  createEmployee(obj: Employee): Observable<any> {
    console.log(obj)
    return this.http.post<any>(this.baseUrl, obj);
  }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + "/" + id);
  }
  updateEmployee(id: number, obj: any): Observable<any> {
    return this.http.patch(this.baseUrl + "/" + id, obj);
  }
  getEmployee(id:number):Observable<any> {
    return this.http.get(this.baseUrl+"/"+id);
  }
}
