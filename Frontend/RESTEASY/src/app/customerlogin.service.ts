import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerloginService {
  username: string;
  password: string;

  private baseUrl = 'http://localhost:8080/api/customer/checklogin';
  constructor(private http: HttpClient) {}

  // Checks the username and password are there in the customer database
  authenticate(username: string, password: string): Observable<any> {
    console.log(username);
    return this.http.get(`${this.baseUrl}/${username}/${password}`);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    this.username = user || '{}';
    return !(user === null);
  }

  // Logout
  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
  }
}
