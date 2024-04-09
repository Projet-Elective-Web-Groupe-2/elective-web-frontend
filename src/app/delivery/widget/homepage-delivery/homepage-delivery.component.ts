import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Delivery } from 'src/app/core/models/delivery.model';
import { DeliveryService } from 'src/app/core/services/delivery.service';

@Component({
  selector: 'app-homepage-delivery',
  templateUrl: './homepage-delivery.component.html',
  styleUrls: ['./homepage-delivery.component.css']
})
export class HomepageDeliveryComponent {
  deliveryTest = new Delivery();
  deliveries:Delivery[] = [];

  constructor(private deliveryService: DeliveryService) { }


  ngOnInit(){
    this.deliveryService.getOrdersList().subscribe((response: HttpResponse<any>) => {
      console.log(response)
    });

    this.deliveries.push(this.deliveryTest);
    this.deliveryTest.desc="un composant super cool :]";
    this.deliveryTest.name="Composant Cool";
    this.deliveryTest.link="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    this.deliveryTest.isAccepted=!true;
  }
}
