import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelServiceService } from '../hotel-service.service';
import { Menu } from '../menu';
import { MenuServiceService } from '../cart-service.service';

@Component({
  selector: 'app-adigas',
  templateUrl: './adigas.component.html',
  styleUrls: ['./adigas.component.css'],
})
export class AdigasComponent implements OnInit {
  hotel: string = 'AdiGas';
  items: Observable<Menu[]>;
  dishid: number;

  constructor(
    private hotelService: HotelServiceService,
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
