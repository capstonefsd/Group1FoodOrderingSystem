import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerloginService } from '../customerlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private customerlogin: CustomerloginService
  ) {}
  username: string;
  password: string;

  invalidLogin = false;
  ngOnInit(): void {}
  checkLogin() {
    this.customerlogin.authenticate(this.username, this.password).subscribe(
      (data) => {
        sessionStorage.setItem('username', this.username);
        sessionStorage.setItem('password', this.password);
        this.router.navigate(['/Udipi']);
        this.invalidLogin = false;
      },
      (error) => {
        alert('Invalid Username and Password');
        console.log(error);
      }
    );
  }
}
