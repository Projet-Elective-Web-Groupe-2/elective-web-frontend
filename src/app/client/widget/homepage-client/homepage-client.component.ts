import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/core/models/restaurant.model';
import { Menu } from 'src/app/core/models/menu.model';

@Component({
  selector: 'app-homepage-client',
  templateUrl: './homepage-client.component.html',
  styleUrls: ['./homepage-client.component.css']
})
export class HomepageClientComponent implements OnInit {
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
