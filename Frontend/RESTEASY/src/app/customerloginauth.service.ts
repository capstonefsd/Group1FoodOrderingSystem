import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { CustomerloginService } from './customerlogin.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerloginauthService {
  constructor(
    private router: Router,
    private customerloginservice: CustomerloginService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.customerloginservice.isUserLoggedIn()) return true;
    this.router.navigate(['login']);
    return false;
  }
}
