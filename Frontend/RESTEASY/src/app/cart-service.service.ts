import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root',
})
export class MenuServiceService {
  private baseUrl = 'http://localhost:8080/api/cart';

  constructor(private http: HttpClient) {}
  
  //To add an item into the cart
  addMenu(menu: any): Observable<any> {
    return this.http.post(this.baseUrl, menu);
  }

  //Fetching and getting the items from the cart
  getItems(): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.baseUrl}`);
  }

  //To remove a single item from the cart 
  deleteItems(dishid: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${dishid}`);
  }

  //To remove all the items from the cart
  deleteAllItems(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
