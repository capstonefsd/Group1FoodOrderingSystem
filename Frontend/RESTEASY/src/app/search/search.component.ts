import { Component, OnInit } from '@angular/core';
import { HotelServiceService } from '../hotel-service.service';
import { Menu } from '../menu';
import { MenuServiceService } from '../cart-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  dishname: string;
  dishes: Menu[];
  dishid: number;
  constructor(
    private hotelService: HotelServiceService,
    private menuService: MenuServiceService
  ) {}

  ngOnInit(): void {}
  submitted = false;

  private searchDish() {
    this.dishes = [];
    console.log(this.dishname);
    this.hotelService.getDishByName(this.dishname).subscribe((data) => {
      this.dishes = data;
      this.submitted = true;

      if (this.dishes == null) {
        alert('No results found');
      }
    });
  }
  searchSubmit() {
    this.searchDish();
  }

  OnAddCart(menu: Menu) {
    this.dishid = menu.dishid;

    this.menuService.addMenu(menu).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
}
