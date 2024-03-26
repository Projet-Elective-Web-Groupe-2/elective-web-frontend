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

{path: ':type/profil', component: ProfilPageComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
