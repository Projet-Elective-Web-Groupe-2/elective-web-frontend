import { Component } from '@angular/core';
import { Delivery } from 'src/app/core/models/delivery.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card-command',
  templateUrl: './card-command.component.html',
  styleUrls: ['./card-command.component.css']
})
export class CardCommandComponent {

  @Input() delivery!:Delivery;
}
