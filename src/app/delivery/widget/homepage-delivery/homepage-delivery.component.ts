import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Delivery } from 'src/app/core/models/delivery.model';
import { Orders } from 'src/app/core/models/infoOrders.model';
import { DeliveryService } from 'src/app/core/services/delivery.service';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';

@Component({
  selector: 'app-homepage-delivery',
  templateUrl: './homepage-delivery.component.html',
  styleUrls: ['./homepage-delivery.component.css']
})
export class HomepageDeliveryComponent {
  deliveryTest = new Delivery();
  deliveries: Orders[] = [];

  constructor(private toastr: ToastrService, private sessionStorageService: SessionStorageService, private deliveryService: DeliveryService) { }


  ngOnInit() {
    let token = this.sessionStorageService.getItem('token');
    this.deliveryService.getDeliveryWithFilter(token).subscribe({
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
        this.deliveries = orders;    
      },
      error: () => {
        this.toastr.error("Erreur lors de la récupération des commandes");
      }
    });
  }
}
