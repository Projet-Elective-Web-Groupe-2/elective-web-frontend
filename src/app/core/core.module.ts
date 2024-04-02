import { APP_INITIALIZER, LOCALE_ID, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ProfilPageComponent } from './components/profil-page/profil-page.component';
import { HistoricComponent } from './components/historic/historic.component';
import { CardComponent } from './components/card/card.component';
import { OrderListComponent } from './components/order-list/order-list.component';
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
      ModalComponent
    ],
  imports: [
      RouterModule,
      CommonModule,
      FormsModule,
      MatDialogModule,
      ReactiveFormsModule,
    ],  
  exports: [HeaderComponent,HistoricComponent,CardComponent],
  providers: [],

})
export class CoreModule {}