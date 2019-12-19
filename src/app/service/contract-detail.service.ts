import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractDetailService {
  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/contractDetails';


  getAllContract(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  createContract(obj: any): Observable<any> {
    console.log(obj)
    return this.http.post<any>(this.baseUrl, obj);
  }
}
