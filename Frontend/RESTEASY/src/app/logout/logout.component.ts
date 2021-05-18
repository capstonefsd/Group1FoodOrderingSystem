import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerloginService } from '../customerlogin.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(
    private router: Router,
    private customerloginservice: CustomerloginService
  ) {}

  ngOnInit(): void {
    this.customerloginservice.logOut();

    this.router.navigate(['']);
  }
}
