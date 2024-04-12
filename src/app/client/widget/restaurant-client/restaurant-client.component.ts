import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InfoRestaurantModel } from 'src/app/core/models/infoRestaurant.model';
import { Menu } from 'src/app/core/models/menu.model';
import { ClientService } from 'src/app/core/services/client.service';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';

@Component({
  selector: 'app-restaurant-client',
  templateUrl: './restaurant-client.component.html',
  styleUrls: ['./restaurant-client.component.css']
})
export class RestaurantClientComponent  implements OnInit{
  restaurant!: string;
  address!: string;
  menuList: Menu[] = [];
  articleList: Menu[] = [];
  type!: string | null;
  idRestaurant!: string|null;

  constructor(
    private toastr: ToastrService,
    private clientService: ClientService,
    private sessionStorageService: SessionStorageService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.type = this.sessionStorageService.getItem('type');
    if (this.type != 'client') {
      this.router.navigate([`/error-page`], { relativeTo: this.route });
    }


    this.addValue();
  }

  addValue() {
    let token = this.sessionStorageService.getItem('token');
    this.route.paramMap.subscribe(params => {
      // Récupérer la valeur de resto.id
      this.idRestaurant = params.get('id');
    });

    this.clientService.getRestaurantDetail(this.idRestaurant, token).subscribe({
      next: (response: InfoRestaurantModel) => {   
        let value = response.restaurant;
        this.restaurant = value.name;
        this.address = value.address;
        this.articleList = value.products;
        this.menuList = value.menus;
      },
      error: () => {
        this.toastr.error("Erreur lors de la récupération du détail des restaurants ");
      }
    });
  }
}
