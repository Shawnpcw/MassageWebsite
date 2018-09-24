import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PoliciesComponent } from './policies/policies.component';
import { PriceComponent } from './price/price.component';
import { AppointmentsComponent } from './appointments/appointments.component';

const routes: Routes = [
  {path:"",pathMatch: "full", redirectTo:"home"},
  {path:"home", component:HomeComponent},
  {path:"contact", component:ContactComponent},
  {path:"policies", component:PoliciesComponent},
  {path:"prices", component:PriceComponent},
  {path:"appointments", component:AppointmentsComponent},
  {path:"**", redirectTo: "home"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
