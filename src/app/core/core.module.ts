import { APP_INITIALIZER, LOCALE_ID, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ProfilPageComponent } from './components/profil-page/profil-page.component';
import { HistoricComponent } from './components/historic/historic.component';
import { CardComponent } from './components/card/card.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { CardPanierComponent } from './components/card-panier/card-panier.component';
import { CardHistoricComponent } from './components/card-historic/card-historic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
      HeaderComponent,
      ProfilPageComponent,
      HistoricComponent,
      CardComponent,
      OrderListComponent,
      CardPanierComponent,
      CardHistoricComponent,
      ModalComponent,
    ],
  imports: [
      RouterModule,
      CommonModule,
      FormsModule,
      MatDialogModule,
      ReactiveFormsModule,
    ],  
  exports: [HeaderComponent,HistoricComponent,CardComponent,CardPanierComponent,CardHistoricComponent],
  providers: [],

})
export class CoreModule {}