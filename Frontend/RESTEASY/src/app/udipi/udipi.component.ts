import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HotelServiceService } from '../hotel-service.service';
import { Menu } from '../menu';
import { MenuServiceService } from '../cart-service.service';

@Component({
  selector: 'app-udipi',
  templateUrl: './udipi.component.html',
  styleUrls: ['./udipi.component.css'],
})
export class UdipiComponent implements OnInit {
  hotel: string = 'Udipi';
  items: Observable<Menu[]>;
  dishid: number;

  clicked: boolean = true;
  constructor(
    private hotelService: HotelServiceService,
    private router: Router,
    private menuService: MenuServiceService
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.items = this.hotelService.getHotelByName(this.hotel);
  }

  //Item is added to cart on clicking the button
  OnAddCart(menu: Menu) {
    this.dishid = menu.dishid;
    this.menuService.addMenu(menu).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  isAdded(menu: Menu) {
    return menu.dishid === this.dishid;
  }
}
