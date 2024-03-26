import { APP_INITIALIZER, LOCALE_ID, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
      HeaderComponent
    ],
  imports: [
      RouterModule,
      CommonModule,
    ],  
  exports: [HeaderComponent],
  providers: [],

})
export class CoreModule {}