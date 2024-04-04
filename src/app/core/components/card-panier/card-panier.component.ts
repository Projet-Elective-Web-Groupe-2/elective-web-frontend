import { Component, Input } from '@angular/core';
import { Panier } from '../../models/panier.model';

@Component({
  selector: 'app-card-panier',
  templateUrl: './card-panier.component.html',
  styleUrls: ['./card-panier.component.css']
})
export class CardPanierComponent {

  @Input() panier!:Panier;

  drinks:string[]=[];
  ngOnInit():void{
    this.drinks.push("Coca");
    this.drinks.push("Fanta");
    this.drinks.push("Ice-Tea");
    this.drinks.push("Eau");
    this.drinks.push("Perrier");
  }
}
