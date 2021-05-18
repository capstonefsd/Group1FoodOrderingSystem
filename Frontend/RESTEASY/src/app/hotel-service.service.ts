import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HotelServiceService {
  private baseUrl = 'http://localhost:8080/api/menu';

  constructor(private http: HttpClient) {}

  //Build Url based on restaurant name and getting the items based on restaurant name

  getHotelByName(hotel: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/hotel/${hotel}`);
  }

  //Build Url based on dishname and getting the items based on dishname

  getDishByName(dishname: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/dishname/${dishname}`);
  }
}
