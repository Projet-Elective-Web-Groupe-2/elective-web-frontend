import { APP_INITIALIZER, LOCALE_ID, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ProfilPageComponent } from './components/profil-page/profil-page.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HistoricComponent } from './components/historic/historic.component';

@NgModule({
  declarations: [
      HeaderComponent,
      ProfilPageComponent,
      HomepageComponent,
      HistoricComponent
    ],
  imports: [
      RouterModule,
      CommonModule,
    ],  
  exports: [HeaderComponent,HomepageComponent,HistoricComponent],
  providers: [],

})
export class CoreModule {}