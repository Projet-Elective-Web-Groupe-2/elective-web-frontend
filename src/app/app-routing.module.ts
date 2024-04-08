import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './signup/signup.component';
import { ClientComponent } from './client/client.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DeveloperComponent } from './developer/developer.component';
import { SalesComponent } from './sales/sales.component';
import { ProfilPageComponent } from './core/components/profil-page/profil-page.component';
import { HistoricComponent } from './core/components/historic/historic.component';
import { StatisticComponent } from './restaurant/widget/statistic/statistic.component';
import { PanierComponent } from './client/widget/panier/panier.component';
import { OrderListComponent } from './core/components/order-list/order-list.component';
import { UsersInfoComponent } from './sales/widget/users-info/users-info.component';
import { AddArticleComponent } from './restaurant/widget/add-article/add-article.component';
import { AddMenuComponent } from './restaurant/widget/add-menu/add-menu.component';
import { RestaurantClientComponent } from './client/widget/restaurant-client/restaurant-client.component';
import { ErrorPageComponent } from './core/components/error-page/error-page.component';
import { DeliveryMapComponent } from './delivery/widget/delivery-map/delivery-map.component';


const routes: Routes = [{
  path: 'auth', component: AuthComponent
},
{path: '', redirectTo: 'auth', pathMatch: 'full'},
{path: 'signup', component: SignupComponent},
{path: 'client', component: ClientComponent},
{path: 'restaurant', component: RestaurantComponent},
{path: 'delivery', component: DeliveryComponent},
{path: 'developer', component: DeveloperComponent},
{path: 'sales', component: SalesComponent},

{path: 'error-page', component: ErrorPageComponent},
{path: '**', component: ErrorPageComponent},

{path: 'restaurant/add-menu', component: AddMenuComponent},
{path: 'restaurant/add-article', component: AddArticleComponent},

{path: 'client/restaurant/:id', component: RestaurantClientComponent},

{path: 'sales/:type/profil', component: ProfilPageComponent},
{path: 'sales/users-info', component: UsersInfoComponent},
{path: 'delivery/details-commande/:id', component: DeliveryMapComponent},

{path: ':type/profil', component: ProfilPageComponent},
{path: ':type/historic', component: HistoricComponent},
{path: ':type/statistic', component: StatisticComponent},
{path: ':type/panier', component: PanierComponent},

{path: '**', component: ErrorPageComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
