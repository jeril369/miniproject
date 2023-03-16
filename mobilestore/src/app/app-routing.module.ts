import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuynowComponent } from './pages/buynow/buynow.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleComponent } from './pages/single/single.component';

const routes: Routes = [


 { 
  path:'',component:HomeComponent
},
  {
    path:'home',component:HomeComponent
  },
  {
    path:'buynow',component:BuynowComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'contact',component:ContactComponent
  }, 
  {
    path:'single',component:SingleComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
