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
import { ComponentListComponent } from './developer/widget/component-list/component-list.component';
import { UsersInfoComponent } from './sales/widget/users-info/users-info.component';
import { AddArticleComponent } from './restaurant/widget/add-article/add-article.component';
import { AddMenuComponent } from './restaurant/widget/add-menu/add-menu.component';


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

{path: 'restaurant/add-menu', component: AddMenuComponent},
{path: 'restaurant/add-article', component: AddArticleComponent},

{path: ':type/profil', component: ProfilPageComponent},
{path: ':type/historic', component: HistoricComponent},
{path: ':type/statistic', component: StatisticComponent},

{path: ':type/panier', component: PanierComponent},
{path: ':type/order-list', component: OrderListComponent},
{path: ':type/component-list', component: ComponentListComponent},
{path: ':type/users-info', component: UsersInfoComponent},


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
