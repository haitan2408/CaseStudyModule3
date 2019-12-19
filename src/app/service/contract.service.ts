import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/contracts';


  getAllContract(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  createContract(obj: any): Observable<any> {
    console.log(obj)
    return this.http.post<any>(this.baseUrl, obj);
  }
  deleteContract(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + "/" + id);
  }
  getContract(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/" + id);
  }
}
