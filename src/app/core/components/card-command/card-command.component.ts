import { Component, Input, OnInit } from '@angular/core';
import { Orders } from '../../models/infoOrders.model';

@Component({
  selector: 'app-card-command',
  templateUrl: './card-command.component.html',
  styleUrls: ['./card-command.component.css']
})
export class CardCommandComponent  implements OnInit {

  @Input() OrderValues!: Orders;

  ngOnInit() {
   console.log(this.OrderValues);
  }
}
