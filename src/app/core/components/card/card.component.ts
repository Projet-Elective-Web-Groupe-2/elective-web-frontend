import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Restaurant } from '../../models/restaurant.model';
import { Menu } from '../../models/menu.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() restaurant!:Restaurant;
  @Input() menu!:Menu;

  

}
