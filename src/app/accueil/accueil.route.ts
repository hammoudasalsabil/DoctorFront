import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './layout/container/contact/contact.component';
import { HomeComponent } from './layout/container/home/home.component';
import { InscriptionComponent } from './layout/container/inscription/inscription.component';
import { LoginComponent } from './layout/container/login/login.component';
import { LayoutComponent } from './layout/layout.component';

  const adminRoute : Routes = [
    {
      path:'',component:LayoutComponent,
      children:[
        {path:'',component:HomeComponent},
        {path:'Login',component:LoginComponent},
        {path:'Inscription',component:InscriptionComponent},
        {path:'Contact',component:ContactComponent}
        // {path:'**',component:HomeComponent}
      ]
    } 
   ]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoute),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
