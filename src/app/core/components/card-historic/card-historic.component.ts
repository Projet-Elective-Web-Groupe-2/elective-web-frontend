import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Historic } from '../../models/historic.model';
import { Orders } from '../../models/infoOrders.model';

@Component({
  selector: 'app-card-historic',
  templateUrl: './card-historic.component.html',
  styleUrls: ['./card-historic.component.css']
})
export class CardHistoricComponent {

  @Input() historic!:Orders;

  
}
