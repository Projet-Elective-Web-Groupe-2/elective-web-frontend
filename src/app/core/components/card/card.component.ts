import { Component } from '@angular/core';
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
export class CardComponent {


  panier:PanierModel[]=[];
  product!:PanierModel;

  constructor(private panierService: PanierService){}

  @Input() restaurant!:RestaurantModel;
  @Input() menu!:Menu;
  @Input() isDetailResto!:boolean;
  @Input() isClient!: boolean;
  @Input() isMenu!: boolean;

  
  

  onClick(id:any,isMenu:boolean,name:any,price:any,haveDrink:boolean){
    this.panierService.addPanier({id,isMenu,name,price,haveDrink})
    console.log(this.panierService.getPanier());
  }

}
