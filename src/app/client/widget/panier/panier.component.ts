import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderModel } from 'src/app/core/models/order.model';
import { PanierModel } from 'src/app/core/models/panier-create.model';
import { Panier } from 'src/app/core/models/panier.model';
import { ClientService } from 'src/app/core/services/client.service';
import { OrderService } from 'src/app/core/services/order.service';
import { PanierService } from 'src/app/core/services/panier.service';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  panierTest = new Panier();
  totalPrice!: number;
  tax!: number;
  deliveryFee!: number;
  type!: string | null;
  token!: any;
  paniers!:PanierModel[];

  constructor(private toastr: ToastrService,
    private clientService: ClientService,
    private orderService: OrderService,
    private sessionStorageService: SessionStorageService,
    private router: Router,
    private route: ActivatedRoute,
    private panierService: PanierService,
  ) { }

  ngOnInit() {
    this.token = this.sessionStorageService.getItem('token');
    this.type = this.sessionStorageService.getItem('type');
    if (this.type != 'client') {
      this.router.navigate([`/error-page`], { relativeTo: this.route });
    }

    this.panierTest.haveDrink = true;
    this.panierTest.name = "Happy Meal";
    this.panierTest.price = 66;
    this.tax = this.panierTest.price / 15;
    this.deliveryFee = this.panierTest.price / 10;
    this.totalPrice = this.panierTest.price + this.tax + this.deliveryFee;


    this.paniers=this.panierService.getPanier();
    console.log(this.paniers);
  }

  getDrink(value: string){
    console.log(value);
  }

  createOrder() {    
    let order:OrderModel[] = [];
    for(let i = 0;i<this.paniers.length;i++){
      this.paniers[i].drink = 'Coca-Cola';
      const valueOrder:OrderModel = {
        idProduit:this.paniers[i].id,
        isMenu:this.paniers[i].isMenu,
        drink:this.paniers[i].drink
      }
      order.push(valueOrder);
    }
    this.orderService.createOrder(this.token,order).subscribe({
      next: (response: HttpResponse<any>) => {
        console.log(response)
        this.router.navigate(['/client/payment']);
      },
      error: () => {
        this.toastr.error("Erreur lors de la connection. Veuillez réessayer ");
      }
    });
  }
}
