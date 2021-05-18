import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerregisterService {
  private baseUrl = 'http://localhost:8080/api/customers';
  constructor(private http: HttpClient) {}

  //adding the customer 
  createCustomer(customer: any): Observable<any> {
    console.log(customer);
    return this.http.post(this.baseUrl, customer);
  }
}
