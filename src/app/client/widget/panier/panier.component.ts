import { Component } from '@angular/core';
import { CardPanierComponent } from 'src/app/core/components/card-panier/card-panier.component';
import { Panier } from 'src/app/core/models/panier.model';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  panierTest = new Panier();

  ngOnInit(){
    this.panierTest.haveDrink = true;
    this.panierTest.name="Happy Meal"
    this.panierTest.price="66€"
  }
}
