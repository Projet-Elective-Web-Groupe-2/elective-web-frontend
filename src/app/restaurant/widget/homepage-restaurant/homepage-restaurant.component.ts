import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/core/models/menu.model';
import { MenuArticle } from 'src/app/core/models/menuArticle.model';
import { RestaurantModel } from 'src/app/core/models/restaurant.model';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';
import { NotificationsService } from 'src/app/core/services/notifications.service';
import { interval } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-homepage-restaurant',
  templateUrl: './homepage-restaurant.component.html',
  styleUrls: ['./homepage-restaurant.component.css']
})
export class HomepageRestaurantComponent implements OnInit {
  token!: any;
  userID!: any;
  restaurant!: string;
  address!: string;
  menuList: Menu[] = [];
  menuTest = new Menu();
  articleList: Menu[] = [];
  articleListForMenu: MenuArticle[] = [];
  restaurantID='';
  oldValue=0;


  constructor(private router: Router,
    private sessionStorageService: SessionStorageService,
    private restaurantService: RestaurantService,
    private toastr: ToastrService,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
    this.userID = this.sessionStorageService.getItem('userID');
    this.token = this.sessionStorageService.getItem('token');
    this.restaurantService.getRestaurantInfo(this.token, this.userID).subscribe({
      next: (response: RestaurantModel) => {
        let values = response.restaurant;
        console.log(values);
        this.restaurant = values.name;
        this.address = values.address;
        this.menuList = values.menus;
        this.articleList = values.products;
        this.restaurantID = values.id;
        this.sessionStorageService.setItem('articleList', JSON.stringify(this.articleList));
        this.sessionStorageService.setItem('restaurantID', values.id);
      },
      error: () => {
        this.toastr.error("Erreur lors de la recupération des informations du restaurant ");
      }
    });
    this.startFetchingOrderCount();
  }

  onClickArticle(articleSelected: Menu): void {
    this.sessionStorageService.setItem("description", articleSelected.description);
    this.sessionStorageService.setItem("img", articleSelected.img);
    this.sessionStorageService.setItem("name", articleSelected.name);
    this.sessionStorageService.setItem("price", articleSelected.price);
    this.router.navigate(['/restaurant/article/' + articleSelected.id]);
  }
  onClickMenu(menuSelected: Menu): void {
    this.sessionStorageService.setItem("description", menuSelected.description);
    this.sessionStorageService.setItem("drink", menuSelected.drink);
    this.sessionStorageService.setItem("img", menuSelected.img);
    this.sessionStorageService.setItem("name", menuSelected.name);
    this.sessionStorageService.setItem("price", menuSelected.price);
    this.router.navigate(['/restaurant/menu/' + menuSelected.id]);

  }
  startFetchingOrderCount(): void {
    console.log('test reponse'),
    interval(10000).subscribe(() => {
      this.notificationsService.getOrderCount(this.token, this.userID, this.restaurantID)
        .subscribe(
          (response: any) => {
            console.log('test reponse',response),
            this.oldValue = this.sessionStorageService.getItem("orderCount");
            if(this.oldValue<response.orderCount){
              
              this.sessionStorageService.setItem("orderCount", response.orderCount );
              this.toastr.success(
                `Vous avec une commande en attente`,
  
                'Commande reçu !',
                { timeOut: 5000, progressBar: true }
              );
            };
            
        
          },
          (error: any) => {
            console.error('Erreur lors de la récupération du nombre de commandes : ', error);
          }
        );
    });
  }
}



