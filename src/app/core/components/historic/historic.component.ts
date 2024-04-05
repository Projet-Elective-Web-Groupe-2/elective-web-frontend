import { Component } from '@angular/core';
import { Historic } from '../../models/historic.model';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent {
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
    this.route.params.subscribe(params => {
      this.userType = params['type'];
    });

  }
}
