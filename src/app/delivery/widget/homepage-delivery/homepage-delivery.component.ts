import { Component } from '@angular/core';
import { Delivery } from 'src/app/core/models/delivery.model';

@Component({
  selector: 'app-homepage-delivery',
  templateUrl: './homepage-delivery.component.html',
  styleUrls: ['./homepage-delivery.component.css']
})
export class HomepageDeliveryComponent {
  deliveryTest = new Delivery();

  ngOnInit(){
    this.deliveryTest.desc="un composant super cool :]";
    this.deliveryTest.name="Composant Cool";
    this.deliveryTest.img="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }
}
