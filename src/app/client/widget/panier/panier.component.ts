import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CardPanierComponent } from 'src/app/core/components/card-panier/card-panier.component';
import { Panier } from 'src/app/core/models/panier.model';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  panierTest = new Panier();
  type!:string|null;

  constructor(private sessionStorageService: SessionStorageService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
    this.type = this.sessionStorageService.getItem('type');
    if(this.type != 'client'){
      this.router.navigate([`/error-page`], { relativeTo: this.route });
    }

    this.panierTest.haveDrink = true;
    this.panierTest.name="Happy Meal"
    this.panierTest.price="66€"
  }
}
