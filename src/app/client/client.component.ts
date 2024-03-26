import { Component } from '@angular/core';
import { CardComponent } from '../core/components/card/card.component';
import { Restaurant } from '../core/models/restaurant.model';
import { OnInit } from '@angular/core';
import { Menu } from '../core/models/menu.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{
  restoTest = new Restaurant();
  menuTest = new Menu();

  ngOnInit(): void {
    this.restoTest.img="https://images.bfmtv.com/NUJHUYUkXAYVPZAR888_w9rjrNc=/0x0:1196x1192/1196x0/images/-458880.jpg";
    this.restoTest.address="2 rue du capitaine hadock St-Michel Chef Chef";
    this.restoTest.name="MacRonaid"

    this.menuTest.img="https://images.bfmtv.com/NUJHUYUkXAYVPZAR888_w9rjrNc=/0x0:1196x1192/1196x0/images/-458880.jpg";
    this.menuTest.description="2 rue du capitaine hadock St-Michel Chef Chef";
    this.menuTest.name="MacRonaid"
    this.menuTest.price="12,40€";
  }
}
