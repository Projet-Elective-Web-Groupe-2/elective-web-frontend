import { Component, Input, OnInit } from '@angular/core';
import { Orders } from '../../models/infoOrders.model';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from '../../services/order.service';
import { SessionStorageService } from '../../services/session-storage.service';
import { MessageModel } from '../../models/message.model';

@Component({
  selector: 'app-card-command',
  templateUrl: './card-command.component.html',
  styleUrls: ['./card-command.component.css']
})
export class CardCommandComponent  implements OnInit {

  token!:any;
  restaurantID!:any;
  @Input() OrderValues!: Orders;


  constructor(
    private sessionStorageService: SessionStorageService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private orderService: OrderService,
  ) { }

  
  ngOnInit() {
   console.log(this.OrderValues);
  }


  acceptCommand(){
    this.token = this.sessionStorageService.getItem('token');
    this.restaurantID = this.sessionStorageService.getItem('restaurantID');
    this.orderService.updateOrder(this.token,this.restaurantID,this.OrderValues.id,"In preparation").subscribe({
      next: (response: MessageModel) => {
        if(response.message == "Order status updated"){
          this.toastr.success("Commande validée");
          location.reload();
        }
        else{
          this.toastr.success("Erreur lors de la validation de la commande");
        }
      },
      error: () => {
        this.toastr.error("Erreur lors de la récupération des commandes");
      }
    });
  }

  refuseCommand(){
    this.orderService.updateOrder(this.token,this.restaurantID,this.OrderValues.id,'Order refused by restaurateur').subscribe({
      next: (response: MessageModel) => {
        if(response.message == "Order status updated"){
          this.toastr.success("Commande refusé");
        }
        else{
          this.toastr.success("Erreur lors du refus de la commande");
        }
      },
      error: () => {
        this.toastr.error("Erreur lors de la récupération des commandes");
      }
    });
  }
}
