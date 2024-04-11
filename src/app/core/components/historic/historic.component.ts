import { Component } from '@angular/core';
import { Historic } from '../../models/historic.model';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionStorageService } from '../../services/session-storage.service';
import { OrderService } from '../../services/order.service';
import { ToastrService } from 'ngx-toastr';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent {
  userType!: string;
  histoTest = new Historic();
  historics: Historic[] = [];

  constructor(
    private sessionStorageService: SessionStorageService,
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private toastr: ToastrService,
  ) { }
  type!: string | null;

  ngOnInit() {
    let token = this.sessionStorageService.getItem('token');
    let userID = this.sessionStorageService.getItem('userID');
    this.route.params.subscribe(params => {
      this.userType = params['type'];
    });

    this.type = this.sessionStorageService.getItem('type');
    if ((this.type == 'client' && this.userType == 'client') ||
      (this.type == 'restaurant' && this.userType == 'restaurant') ||
      (this.type == 'delivery' && this.userType == 'delivery')) {
    }
    else {
      this.router.navigate([`/error-page`], { relativeTo: this.route });
    }



    this.orderService.getAllOrdersFromRestaurant(token, userID).subscribe({
      next: (response: HttpResponse<any>) => {
        console.log(response);
      },
      error: () => {
        this.toastr.error("Erreur lors de la récupération des commandes");
      }
    });

    this.historics.push(this.histoTest);
    this.histoTest.img = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Pizza_Hut_international_logo_2014.svg/1087px-Pizza_Hut_international_logo_2014.svg.png";
    this.histoTest.desc = "2 plats. 23.56 $ 30 Mars 2024.";
    this.histoTest.statut = "Terminé";
    this.histoTest.name = "Pizza hut"

  }
}
