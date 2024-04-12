import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { RestaurantModel } from '../../models/restaurant.model';
import { Menu } from '../../models/menu.model';
import { PanierModel } from '../../models/panier-create.model';
import { PanierService } from '../../services/panier.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  panier: PanierModel[] = [];
  product!: PanierModel;

  constructor(private panierService: PanierService) { }

  @Input() restaurant!: RestaurantModel;
  @Input() menu!: Menu;
  @Input() isDetailResto!: boolean;
  @Input() isClient!: boolean;
  @Input() isMenu!: boolean;
  @Input() idRestaurant!: any;

  ngOnInit(): void {
  }


  onClick(id: any, isMenu: boolean, name: any, price: any, haveDrink: boolean) {
    var idRestaurantValue = this.idRestaurant;
    console.log(id);
    this.panierService.addPanier({ id,idRestaurantValue, isMenu, name, price, haveDrink, drink: "" })
    console.log(this.panierService.getPanier());
  }

}
