import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { RestaurantModel } from '../../models/restaurant.model';
import { Menu } from '../../models/menu.model';
import { SessionStorageService } from '../../services/session-storage.service';
import { PanierModel } from '../../models/panier-create.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {


  panier:PanierModel[]=[];
  product!:PanierModel;

  constructor(private serviceStorage: SessionStorageService){}

  @Input() restaurant!:RestaurantModel;
  @Input() menu!:Menu;
  @Input() isDetailResto!:boolean;
  @Input() isClient!: boolean;
  @Input() isMenu!: boolean;


  quantity !: number;

  decrease = document.querySelector('.decrease');
  increase = document.querySelector('.increase');
  text = document.querySelector('.text-quantity');
  num=0;
  
  
  onChangePlus(){
    console.log('+')
    this.num +=1;
    this.text!.innerHTML=this.num.toString();
  }
  
  onChangeMinus(){
    console.log('-')
    this.num -=1;
    this.text!.innerHTML=this.num.toString();
  }

  onClick(id:any,isMenu:boolean){
    // this.product = {id,isMenu};
    // // console.log(this.product)
    // this.panier.push(this.product)  
    // // console.log(this.panier)
    // // console.log(this.serviceStorage.getItem("panier"))
    // if (this.serviceStorage.getItem("panier")!=null) {

    //   //récupere le string
    //   let text = this.serviceStorage.getItem("panier");
    //   // console.log(text)
    //   //convertit le string en json
    //   let obj =JSON.parse(text);
    //   console.log(obj)
    //   //rajoute le tableau au json
    //   obj.panier.panier.panier.push(this.panier) 
    //   //delete l'objet du session storage
    //   sessionStorage.removeItem("panier")
    //   console.log(obj)
    //   //convertir le tout en string
    //   let jsonObj = {"panier":obj}
    //   //ecrire dans le session storage
    //   sessionStorage.setItem("panier",JSON.stringify(jsonObj))
    // }
    // else{
    //   //convertir le tout en string
    //   let jsonObj = {"panier":this.panier}
    //   //ecrire dans le session storage
    //   sessionStorage.setItem("panier",JSON.stringify(jsonObj))
    // }


    this.product = { id: id, isMenu: isMenu };
    this.panier.push(this.product);
    console.log(this.serviceStorage.getItem("panier"))
    // Récupérer le JSON du sessionStorage
let text = this.serviceStorage.getItem("panier");

// Déclarer un tableau pour stocker les éléments à ajouter
let elementsToAdd = [];

if (text != null) {
  // Convertir le JSON en objet JavaScript
  let obj = JSON.parse(text);

  // Si l'objet contient déjà un tableau panier, ajouter les nouveaux éléments
  if (obj.panier && obj.panier.length) {
    for (let item of this.panier) {
      // Vérifier si l'élément n'est pas déjà présent dans le panier
      if (!obj.panier.some((existingItem: { id: any; }) => existingItem.id === item.id)) {
        elementsToAdd.push(item);
      }
    }
  }
}

// Ajouter les nouveaux éléments au panier dans l'objet JSON
if (elementsToAdd.length > 0) {
  let jsonObj = { "panier": elementsToAdd };
  // Fusionner les nouveaux éléments avec les éléments existants dans le panier
  this.serviceStorage.setItem("panier", JSON.stringify(Object.assign({}, JSON.parse(text || "{}"), jsonObj)));
}

  }
}
