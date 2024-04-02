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

@NgModule({
  declarations: [
      HeaderComponent,
      ProfilPageComponent,
      HistoricComponent,
      CardComponent,
      OrderListComponent,
      CardPanierComponent,
      CardHistoricComponent
    ],
  imports: [
      RouterModule,
      CommonModule,
    ],  
  exports: [HeaderComponent,HistoricComponent,CardComponent],
  providers: [],

})
export class CoreModule {}