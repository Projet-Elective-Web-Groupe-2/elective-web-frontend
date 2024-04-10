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
  restoTest = new RestaurantModel();
  menuTest = new Menu();
  restaurantID: number = 21225;

  constructor(private sessionStorageService: SessionStorageService,private clientService: ClientService) { };

  ngOnInit(): void {
    let token = this.sessionStorageService.getItem('token');
    this.clientService.getRestaurant(token).subscribe((response: HttpResponse<any>) => {
      console.log(response)
    });

    this.restoTest.img = "https://images.bfmtv.com/NUJHUYUkXAYVPZAR888_w9rjrNc=/0x0:1196x1192/1196x0/images/-458880.jpg";
    this.restoTest.address = "2 rue du capitaine hadock St-Michel Chef Chef";
    this.restoTest.name = "MacRonaid"

   /* this.menuTest.img = "https://images.bfmtv.com/NUJHUYUkXAYVPZAR888_w9rjrNc=/0x0:1196x1192/1196x0/images/-458880.jpg";
    this.menuTest.description = "2 rue du capitaine hadock St-Michel Chef Chef";
    this.menuTest.name = "MacRonaid"
    this.menuTest.price = "12,40€";*/

    this.restoList.push(this.restoTest);
  }
}
