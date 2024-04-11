import { Component } from '@angular/core';
import { Delivery } from 'src/app/core/models/delivery.model';
import { Input } from '@angular/core';
import { DeliveryService } from 'src/app/core/services/delivery.service';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';

@Component({
  selector: 'app-card-command',
  templateUrl: './card-command.component.html',
  styleUrls: ['./card-command.component.css']
})
export class CardCommandComponent {
  commandeID:number = 12131;
  token!:any;
  constructor(private deliveryService:DeliveryService,private sessionStorage : SessionStorageService){}

  @Input() delivery!:Delivery;

  ngOnInit(){
    this.token = this.sessionStorage.getItem("token");
  }

  onClickAccept(id:any){
    this.deliveryService.acceptDelivery(this.token,id).subscribe((response: any) => {
      
    });
  }
  onClickRefuse(id:any){
    this.deliveryService.refuseDelivery(this.token,id).subscribe((response: any) => {
      
    });
  }
}
