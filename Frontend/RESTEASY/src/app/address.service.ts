import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private baseUrl = 'http://localhost:8080/api/address';
  constructor(private http: HttpClient) {}

  //To add the address
  addAddress(address: any): Observable<any> {
    console.log(address);
    return this.http.post(this.baseUrl, address);
  }
}
