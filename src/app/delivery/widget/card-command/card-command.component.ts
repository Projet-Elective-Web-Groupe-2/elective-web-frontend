import { Component } from '@angular/core';
import { Delivery } from 'src/app/core/models/delivery.model';
import { Input } from '@angular/core';
import { DeliveryService } from 'src/app/core/services/delivery.service';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';
import { Orders } from 'src/app/core/models/infoOrders.model';
import { MessageModel } from 'src/app/core/models/message.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card-command',
  templateUrl: './card-command.component.html',
  styleUrls: ['./card-command.component.css']
})
export class CardCommandComponent {
  commandeID!: string;
  token!: any;
  constructor(private deliveryService: DeliveryService,
    private sessionStorage: SessionStorageService,
    private toastr: ToastrService,
  ) { }

  @Input() delivery!: Orders;

  ngOnInit() {
    console.log(this.delivery);
    this.commandeID = this.delivery.id;
    this.token = this.sessionStorage.getItem("token");
  }

  onClickAccept() {
    this.sessionStorage.setItem('deliveryAddress', this.delivery.address);
    this.deliveryService.acceptDelivery(this.token, this.delivery.id).subscribe((response: MessageModel) => {
      console.log(response.message);
      if (response.message == "Delivery accepted") {
        this.toastr.success("Commande délivré");
          location.reload();
      }
      else {
        this.toastr.error("Erreur lors de la livraison");
      }
    });
  }
  onClickRefuse() {
    this.deliveryService.refuseDelivery(this.token, this.delivery.id).subscribe((response: any) => {
      console.log(response);
    });
  }
}
