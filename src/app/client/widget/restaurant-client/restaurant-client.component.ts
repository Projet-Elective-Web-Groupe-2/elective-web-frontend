import { Component } from '@angular/core';
import { Menu } from 'src/app/core/models/menu.model';

@Component({
  selector: 'app-restaurant-client',
  templateUrl: './restaurant-client.component.html',
  styleUrls: ['./restaurant-client.component.css']
})
export class RestaurantClientComponent {
  restaurant!:string;
  address!:string;
  menuList:Menu[] = [];
  menuTest = new Menu();
  articleList:Menu[] = [];
  articleTest = new Menu();
}
