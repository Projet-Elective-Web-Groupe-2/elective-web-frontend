import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [{
  path: 'auth', component: AuthComponent
},
{path: '', redirectTo: 'auth', pathMatch: 'full'},
{path: 'signup', component: SignupComponent},
//{path: 'tracker', component: FlowMonitoringComponent,},


//{path: 'detail-desadv/:id', component: DetailDesadvComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
