import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { Card } from '../card';
import { Address } from '../address';
import { AddressService } from '../address.service';
import { OrderServiceService } from '../order-service.service';
import { MenuServiceService } from '../cart-service.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  customer: Customer = new Customer();
  card: Card = new Card();
  address: Address = new Address();
  constructor(
    private addressService: AddressService,
    private orderService: OrderServiceService,
    private menuService: MenuServiceService
  ) {}

  ngOnInit(): void {}

  //To save the address
  save() {
    this.addressService.addAddress(this.address).subscribe(
      (data) => {
        console.log(data);
        alert('Your Order is placed successfully');
      },
      (error) => console.log(error)
    );
    this.address = new Address();
  }

  OnSubmit() {
    this.save();
    this.removeAll();
    this.Orders();
  }

  Orders() {
    let tqty: number = JSON.parse(localStorage.getItem('count') || '{}');
    console.log(tqty);
    let tprice: number = JSON.parse(localStorage.getItem('price') || '{}');
    console.log(tprice);
    this.orderService.addOrders(tqty, tprice).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  //To remove all the items in the cart
  removeAll() {
    this.menuService.deleteAllItems();
  }
}
