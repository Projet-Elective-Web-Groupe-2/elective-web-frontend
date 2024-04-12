import { Component } from '@angular/core';
import { Historic } from '../../models/historic.model';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionStorageService } from '../../services/session-storage.service';
import { OrderService } from '../../services/order.service';
import { ToastrService } from 'ngx-toastr';
import { HttpResponse } from '@angular/common/http';
import { Orders } from '../../models/infoOrders.model';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent {
  userType!: string;
  histoTest = new Historic();
  OrdersList: Orders[] = [];

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



    this.orderService.getAllFromUser(token).subscribe({
      next: (response: any) => {
        const orders: Orders[] = response.orders.map((order: any) => ({
          id: order._id,
          clientID: order.clientID,
          address: order.address,
          date: this.getDate(order.date),
          menus: order.menus,
          status: order.status,
          products: order.products,
          totalPrice: order.totalPrice,
          refusedBy: order.refusedBy
        }));
        this.OrdersList = orders;
      },
      error: () => {
        this.toastr.error("Erreur lors de la récupération des commandes");
      }
    });
  }

  getDate(date: string) {
    let goodDate = date.split('T')[0] + ' ' + date.split('T')[1].slice(0, -5);
    return goodDate;
  }
}
