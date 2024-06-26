import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

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
import { StatisticComponent } from './restaurant/widget/statistic/statistic.component';
import { PanierComponent } from './client/widget/panier/panier.component';
import { UsersInfoComponent } from './sales/widget/users-info/users-info.component';
import { HomepageClientComponent } from './client/widget/homepage-client/homepage-client.component';
import { HomepageRestaurantComponent } from './restaurant/widget/homepage-restaurant/homepage-restaurant.component';
import { HomepageDeliveryComponent } from './delivery/widget/homepage-delivery/homepage-delivery.component';
import { HomepageDeveloperComponent } from './developer/widget/homepage-developer/homepage-developer.component';
import { HomepageSalesComponent } from './sales/widget/homepage-sales/homepage-sales.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AddMenuComponent } from './restaurant/widget/add-menu/add-menu.component';
import { AddArticleComponent } from './restaurant/widget/add-article/add-article.component';
import { RestaurantClientComponent } from './client/widget/restaurant-client/restaurant-client.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CardDeveloperComponent } from './developer/widget/card-developer/card-developer.component';

import { CardCommandComponent } from './delivery/widget/card-command/card-command.component';
import { UserCardComponent } from './sales/widget/user-card/user-card.component';
import { DeliveryMapComponent } from './delivery/widget/delivery-map/delivery-map.component';
import { PaymentComponent } from './client/widget/payment/payment.component';
import { TechnicalComponent } from './technical/technical.component';
import { EditMenuComponent } from './restaurant/widget/edit-menu/edit-menu.component';
import { EditArticleComponent } from './restaurant/widget/edit-article/edit-article.component';


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
    StatisticComponent,
    PanierComponent,
    UsersInfoComponent,
    HomepageClientComponent,
    HomepageRestaurantComponent,
    HomepageDeliveryComponent,
    HomepageDeveloperComponent,
    HomepageSalesComponent,
    AddMenuComponent,
    AddArticleComponent,
    RestaurantClientComponent,
    CardDeveloperComponent,
    UserCardComponent,
    CardCommandComponent,
    DeliveryMapComponent,
    PaymentComponent,
    TechnicalComponent,
    EditMenuComponent,
    EditArticleComponent
  
  ],
  imports: [
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
    }), 
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    NgIf,
    UpperCasePipe,
    NoopAnimationsModule,
    LeafletModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
