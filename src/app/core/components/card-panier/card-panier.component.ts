import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Panier } from '../../models/panier.model';
import { PanierModel } from '../../models/panier-create.model';
import { RestaurantService } from '../../services/restaurant.service';
import { SessionStorageService } from '../../services/session-storage.service';
import { ToastrService } from 'ngx-toastr';
import { DrinkModel, InfoDrink } from '../../models/drink.model';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-card-panier',
  templateUrl: './card-panier.component.html',
  styleUrls: ['./card-panier.component.css']
})
export class CardPanierComponent {
  selectedValue: FormControl = new FormControl();

  @Input() panier!: PanierModel;
  @Output() selectedValueChanged = new EventEmitter<string>();


  constructor(
    private restaurantService: RestaurantService,
    private sessionStorageService: SessionStorageService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
  ) {}

  drinkForm = this.formBuilder.group({
    drink: new FormControl(),
  });

  drinks: string[] = [];
  ngOnInit(): void {
    let token = this.sessionStorageService.getItem('token');
    console.log(this.panier);
    this.restaurantService.getDrinks(token, this.panier.idRestaurantValue).subscribe({
      next: (response: InfoDrink) => {
        let values = response.drinks;
        for (let i = 0; i < values.length; i++) {
          this.drinks.push(values[i].name);
        }
      },
      error: () => {
        this.toastr.error("Erreur lors de la récupération du détail des restaurants ");
      }
    });
  }

  onValueChanged() {
    this.selectedValueChanged.emit(this.selectedValue.value);
  }
}
