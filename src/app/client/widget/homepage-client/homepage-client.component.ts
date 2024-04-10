import { Component, Input, OnInit } from '@angular/core';
import { RestaurantModel } from 'src/app/core/models/restaurant.model';
import { Menu } from 'src/app/core/models/menu.model';
import { HttpResponse } from '@angular/common/http';
import { ClientService } from 'src/app/core/services/client.service';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';

@Component({
  selector: 'app-homepage-client',
  templateUrl: './homepage-client.component.html',
  styleUrls: ['./homepage-client.component.css']
})
export class HomepageClientComponent implements OnInit {
  restoList: RestaurantModel[] = []
  menuTest = new Menu();

  constructor(private sessionStorageService: SessionStorageService,private clientService: ClientService) { };

  ngOnInit(): void {
    let token = this.sessionStorageService.getItem('token');
    this.clientService.getRestaurant(token).subscribe((response: RestaurantModel) => {
      for(let i = 0;i<response.restaurants.length;i++){
        console.log(response.restaurants[i])
        let restaurantInformation = response.restaurants[i];
        this.restoList.push(restaurantInformation);
      }
    });
  }
}
