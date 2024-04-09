import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/core/models/menu.model';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';

@Component({
  selector: 'app-homepage-restaurant',
  templateUrl: './homepage-restaurant.component.html',
  styleUrls: ['./homepage-restaurant.component.css']
})
export class HomepageRestaurantComponent implements OnInit {
  restaurant!:string;
  address!:string;
  menuList:Menu[] = [];
  menuTest = new Menu();
  articleList:Menu[] = [];
  articleTest = new Menu();


  constructor(private router: Router,private sessionStorageService: SessionStorageService) { }

  ngOnInit(): void {
    this.restaurant = "Mcgronald’s";
    this.address = "243 rue de la Republique , 95239";
    this.addMenu();
  }

  addMenu(){
    this.menuTest.img="https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt9418bc6e38e6544a/660439b26eb29729ab905cdf/MxBO_BIGMAC.png?auto=webp&width=1280&disable=upscale";
    this.menuTest.description="Burger maison, boisson, frites";
    this.menuTest.name="Menu ElClassico"
    this.menuTest.price="12.40€";
    this.menuTest.id=684684;
    this.menuTest.drink=true;
    this.menuList.push(this.menuTest);
    this.menuList.push(this.menuTest);

    this.articleTest.img="https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blta639ebc798204a17/66043a77dd76c70108f663a3/400x400_Big_Mac.png?auto=webp&width=1280&disable=upscale";
    this.articleTest.description="Bun's, Steak, Salade, Fromage";
    this.articleTest.name="Big Muc"
    this.articleTest.price="5.40€";
    this.articleTest.id=2165165;
    this.articleList.push(this.articleTest);
  }

  onClickArticle(articleSelected:Menu):void{
    this.sessionStorageService.setItem("description",articleSelected.description);
    this.sessionStorageService.setItem("img",articleSelected.img);
    this.sessionStorageService.setItem("name",articleSelected.name);
    this.sessionStorageService.setItem("price",articleSelected.price);
    this.router.navigate(['/restaurant/article/'+articleSelected.id]);
  }
  onClickMenu(menuSelected:Menu):void{
    this.sessionStorageService.setItem("description",menuSelected.description);
    this.sessionStorageService.setItem("drink",menuSelected.drink);
    this.sessionStorageService.setItem("img",menuSelected.img);
    this.sessionStorageService.setItem("name",menuSelected.name);
    this.sessionStorageService.setItem("price",menuSelected.price);
    this.router.navigate(['/restaurant/menu/'+menuSelected.id]);
  }
}
