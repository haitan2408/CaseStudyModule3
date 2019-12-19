import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/customers';


  getAllCustomer(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  createCustomer(obj: any): Observable<any> {
    console.log(obj)
    return this.http.post<any>(this.baseUrl, obj);
  }
  deleteCustomer(id:number):Observable<any> {
    return this.http.delete<any>(this.baseUrl+"/"+id);
  }
  getCustomer(id:number):Observable<any> {
    return this.http.get(this.baseUrl+"/"+id);
  }

  updateCustomer(id:number,obj:any):Observable<any> {
    return this.http.patch(this.baseUrl+"/"+id,obj);
  }
}
