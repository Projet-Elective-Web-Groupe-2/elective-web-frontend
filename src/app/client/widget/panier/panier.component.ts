import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CardPanierComponent } from 'src/app/core/components/card-panier/card-panier.component';
import { Panier } from 'src/app/core/models/panier.model';
import { ClientService } from 'src/app/core/services/client.service';
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
  type!:string|null;

  constructor(private clientService: ClientService,private sessionStorageService: SessionStorageService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
    let token = this.sessionStorageService.getItem('token');
    this.type = this.sessionStorageService.getItem('type');
    if(this.type != 'client'){
      this.router.navigate([`/error-page`], { relativeTo: this.route });
    }

    this.clientService.getPanier(token).subscribe((response: HttpResponse<any>) => {
      console.log(response)
    });

    this.panierTest.haveDrink = true;
    this.panierTest.name="Happy Meal";
    this.panierTest.price=66;
    this.tax = this.panierTest.price/15;
    this.deliveryFee = this.panierTest.price/10;
    this.totalPrice = this.panierTest.price + this.tax + this.deliveryFee;
  }
}
