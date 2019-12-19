import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/services';


  getAllService(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  createService(obj: any): Observable<any> {
    console.log(obj)
    return this.http.post<any>(this.baseUrl, obj);
  }
  deleteService(id:number):Observable<any> {
    return this.http.delete<any>(this.baseUrl+"/"+id);
  }
  updateService(id: number, obj: any): Observable<any> {
    return this.http.patch(this.baseUrl + "/" + id, obj);
  }
  getService(id:number):Observable<any> {
    return this.http.get(this.baseUrl+"/"+id);
  }

}
