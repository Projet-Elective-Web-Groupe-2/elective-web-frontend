import { Component } from '@angular/core';
import { Historic } from 'src/app/core/models/historic.model';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-historic-restaurant',
  templateUrl: './historic-restaurant.component.html',
  styleUrls: ['./historic-restaurant.component.css']
})
export class HistoricRestaurantComponent {
  userType!: string;
  
  constructor(private route: ActivatedRoute) { }

  histoTest = new Historic();
  historics:Historic[] = [];

  ngOnInit(): void {
    this.historics.push(this.histoTest);
    this.histoTest.img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Pizza_Hut_international_logo_2014.svg/1087px-Pizza_Hut_international_logo_2014.svg.png";
    this.histoTest.desc="2 plats. 23.56 $ 30 Mars 2024.";
    this.histoTest.statut="Terminé";
    this.histoTest.name="Pizza hut"
    console.log(this.historics);
    this.route.params.subscribe(params => {
      this.userType = params['type'];
    });

  }
}
