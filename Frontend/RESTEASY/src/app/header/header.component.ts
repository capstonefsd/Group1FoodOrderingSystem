import { Component, OnInit } from '@angular/core';
import { CustomerloginService } from '../customerlogin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public customerlogin: CustomerloginService) {}
  cartItem: number = 0;

  //To get the number of items in the cart
  ngOnInit(): void {
    this.cartItem = JSON.parse(localStorage.getItem('count') || '{}');
  }
}
