import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PoliciesComponent } from './policies/policies.component';
import { PriceComponent } from './price/price.component';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    ContactComponent,
    HomeComponent,
    PoliciesComponent,
    PriceComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
