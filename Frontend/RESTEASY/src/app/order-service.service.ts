import { HttpClient } from '@angular/common/http';
import { SimplePlaceholderMapper } from '@angular/compiler/src/i18n/serializers/serializer';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderServiceService {
  private baseUrl = 'http://localhost:8080/api/orders';

  constructor(private http: HttpClient) {}

  addOrders(tqty: number, tprice: number): Observable<any> {
    return this.http.post(`${this.baseUrl}`, { tqty, tprice });
  }
}
