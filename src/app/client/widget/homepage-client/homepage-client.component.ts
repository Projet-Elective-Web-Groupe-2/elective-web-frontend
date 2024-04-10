import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantModel } from 'src/app/core/models/restaurant.model';
import { ClientService } from 'src/app/core/services/client.service';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';

@Component({
  selector: 'app-homepage-client',
  templateUrl: './homepage-client.component.html',
  styleUrls: ['./homepage-client.component.css']
})
export class HomepageClientComponent implements OnInit {
  restoList: RestaurantModel[] = [];

  constructor(private sessionStorageService: SessionStorageService,
              private clientService: ClientService,
              private http: HttpClient) { }

  ngOnInit(): void {
    let token = this.sessionStorageService.getItem('token');
    this.clientService.getRestaurant(token).subscribe((response: any) => {
      this.restoList = response.restaurants;
    });
  }

  createOrder() {
    let token = this.sessionStorageService.getItem('token');
    const orderData = {
      items: [
        {
          itemID: '',
          isMenu: false, 
          drink: false,
          restaurantID: ''
        }
      ]
    };

    this.http.post('http://order.localhost/order/create', orderData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe(response => {
      console.log('Order created:', response);
    }, error => {
      console.error('Error creating order:', error);
    });
  }
}
