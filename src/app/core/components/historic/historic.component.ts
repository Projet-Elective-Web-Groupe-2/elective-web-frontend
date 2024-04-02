import { Component } from '@angular/core';
import { Historic } from '../../models/historic.model';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent {
histoTest = new Historic();

  ngOnInit(): void {
    this.histoTest.img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Pizza_Hut_international_logo_2014.svg/1087px-Pizza_Hut_international_logo_2014.svg.png";
    this.histoTest.desc="2 plats. 23.56 $ 30 Mars 2024.";
    this.histoTest.statut="Terminé";
    this.histoTest.name="Pizza hut"


  }
}
