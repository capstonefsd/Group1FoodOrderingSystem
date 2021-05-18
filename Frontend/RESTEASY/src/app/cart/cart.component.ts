import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuServiceService } from '../cart-service.service';
import { CustomerloginService } from '../customerlogin.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  dishid: number;
  items: Menu[];
  sum: number = 0;
  subtotal: number = 0;
  count: number;
  totalqty: number = 0;

  subtotal1: number = 0;
  constructor(
    private menuService: MenuServiceService,
    public customerlogin: CustomerloginService
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.menuService.getItems().subscribe((item) => {
      this.items = item;
      for (let item of this.items) {
        this.subtotal = item.qty * item.dishprice;
        this.sum = this.sum + this.subtotal;
        this.count = this.items.length;
        localStorage.setItem('price', JSON.stringify(this.sum));
        localStorage.setItem('count', JSON.stringify(this.items.length));
      }
    });
    this.totalqty = JSON.parse(localStorage.getItem('count') || '{}');
  }

  //To increase the quantity
  plus(item: any) {
    if (item.qty != 10) {
      item.qty += 1;
      this.subtotal1 = 1 * item.dishprice;
      this.sum = this.sum + this.subtotal1;
      console.log(this.sum);
      this.totalqty += 1;
      console.log(this.totalqty);
    }
  }

  //To decrease the quantity
  minus(item: any) {
    if (item.qty != 1) {
      item.qty -= 1;
      this.subtotal = -1 * item.dishprice;
      this.sum = this.sum + this.subtotal;
      console.log(this.sum);
      this.totalqty -= 1;
    }
  }

  //To remove an item from the cart
  removeItem(dishid: number) {
    this.menuService.deleteItems(dishid).subscribe(
      (data) => {
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }
}
