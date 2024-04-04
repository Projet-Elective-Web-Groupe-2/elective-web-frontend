import { Component } from '@angular/core';
import { Menu } from 'src/app/core/models/menu.model';

@Component({
  selector: 'app-restaurant-client',
  templateUrl: './restaurant-client.component.html',
  styleUrls: ['./restaurant-client.component.css']
})
export class RestaurantClientComponent {
  restaurant!:string;
  address!:string;
  menuList:Menu[] = [];
  menuTest = new Menu();
  articleList:Menu[] = [];
  articleTest = new Menu();
  
  ngOnInit(): void {
    this.restaurant = "Mcgronald’s";
    this.address = "243 rue de la Republique , 95239";
    this.addMenu();
  }

  addMenu(){
    this.menuTest.img="https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt9418bc6e38e6544a/660439b26eb29729ab905cdf/MxBO_BIGMAC.png?auto=webp&width=1280&disable=upscale";
    this.menuTest.description="Burger maison, boisson, frites";
    this.menuTest.name="Menu ElClassico"
    this.menuTest.price="12,40€";
    this.menuList.push(this.menuTest);
    this.menuList.push(this.menuTest);

    this.articleTest.img="https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blta639ebc798204a17/66043a77dd76c70108f663a3/400x400_Big_Mac.png?auto=webp&width=1280&disable=upscale";
    this.articleTest.description="Bun's, Steak, Salade, Fromage";
    this.articleTest.name="Big Muc"
    this.articleTest.price="5€40";
    this.articleList.push(this.articleTest);
  }
}
