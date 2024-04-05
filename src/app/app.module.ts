import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy, NgFor, NgIf, UpperCasePipe } from '@angular/common';

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
import { ComponentListComponent } from './developer/widget/component-list/component-list.component';
import { UsersInfoComponent } from './sales/widget/users-info/users-info.component';
import { DashboardComponent } from './sales/widget/dashboard/dashboard.component';
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
    ComponentListComponent,
    UsersInfoComponent,
    DashboardComponent,
    HomepageClientComponent,
    HomepageRestaurantComponent,
    HomepageDeliveryComponent,
    HomepageDeveloperComponent,
    HomepageSalesComponent,
    AddMenuComponent,
    AddArticleComponent,
    RestaurantClientComponent
  ],
  imports: [
    HttpClientModule,
    ToastrModule.forRoot(), 
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    NgIf,
    UpperCasePipe,
    NoopAnimationsModule
  ],
  providers: [],
  exports: [DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
