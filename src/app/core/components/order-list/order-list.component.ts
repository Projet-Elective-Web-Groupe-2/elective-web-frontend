import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionStorageService } from '../../services/session-storage.service';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from '../../services/order.service';
import { Orders } from '../../models/infoOrders.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  userType!: string;
  OrderValuesList: Orders[] = [];

  constructor(
    private sessionStorageService: SessionStorageService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private orderService: OrderService,
  ) { }
  type!: string | null;

  ngOnInit() {
    let token = this.sessionStorageService.getItem('token');
    let restaurantID = this.sessionStorageService.getItem('restaurantID');
    this.type = this.sessionStorageService.getItem('type');
    this.route.params.subscribe(params => {
      this.userType = params['type'];
    });
    if ((this.type == 'client' && this.userType == 'client') || (this.type == 'restaurant' && this.userType == 'restaurant')) { }
    else {
      // this.router.navigate([`/error-page`], { relativeTo: this.route });
    }
    
    this.orderService.getAllCreatedOrdersFromRestaurant(token,restaurantID).subscribe({
      next: (response: any) => {
        const orders: Orders[] = response.orders.map((order: any) => ({
          id: order._id,
          clientID: order.clientID,
          address: order.address,
          date: order.date,
          menus: order.menus,
          status: order.status,
          products: order.products,
          totalPrice: order.totalPrice,
          refusedBy: order.refusedBy
        }));
        this.OrderValuesList = orders;    
      },
      error: () => {
        this.toastr.error("Erreur lors de la récupération des commandes");
      }
    });

  }
}
