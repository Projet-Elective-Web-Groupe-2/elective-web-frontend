import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './signup/signup.component';
import { ClientComponent } from './client/client.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DeveloperComponent } from './developer/developer.component';
import { SalesComponent } from './sales/sales.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SignupComponent,
    ClientComponent,
    RestaurantComponent,
    DeliveryComponent,
    DeveloperComponent,
    SalesComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
