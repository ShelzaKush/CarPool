import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FindRideComponent } from './pages/find-ride/find-ride.component';
import { RidingDetailsComponent } from './pages/riding-details/riding-details.component';
import { RidingInfoComponent } from './pages/riding-info/riding-info.component';
import { PassengerInfoComponent } from './Pages/passenger-info/passenger-info.component';
import { Login2Component } from './login2/login2.component';
import { UserhomeComponent } from './pages/userhome/userhome.component';
import { OfferHeaderComponent } from './offer-header/offer-header.component';
import { OfferRideDetailsComponent } from './pages/offer-ride-details/offer-ride-details.component';

import { OffHeaderComponent } from './off-header/off-header.component';








const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home' , component:HomeComponent},
  {path: 'login' , component:LoginComponent},
  {path: 'signup' , component:SignupComponent},
  {path:'findride',component:FindRideComponent},
  {path:'ride-details',component:RidingDetailsComponent},
  {path:'ride-info',component:RidingInfoComponent},
  {path:'passenger-info',component:PassengerInfoComponent},
  {path:'loginn',component:Login2Component},
  {path:'home-user',component:UserhomeComponent},
  {path:'o-header',component:OfferHeaderComponent},
  {path:'off-ride',component:OfferRideDetailsComponent},
  {path:'off-head',component:OffHeaderComponent},








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
