import { Component } from '@angular/core';

@Component({
  selector: 'app-card-panier',
  templateUrl: './card-panier.component.html',
  styleUrls: ['./card-panier.component.css']
})
export class CardPanierComponent {


  drinks:string[]=[];
  ngOnInit():void{
    this.drinks.push("Coca");
    this.drinks.push("Fanta");
    this.drinks.push("Ice-Tea");
    this.drinks.push("Eau");
    this.drinks.push("Perrier");
  }
}
