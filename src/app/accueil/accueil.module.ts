import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ContainerComponent } from './layout/container/container.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/container/home/home.component';
import { LoginComponent } from './layout/container/login/login.component';
import { InscriptionComponent } from './layout/container/inscription/inscription.component';
import { ContactComponent } from './layout/container/contact/contact.component';
import { AppRoutingModule } from './accueil.route';



@NgModule({
  declarations: [
    LayoutComponent,
    ContainerComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    InscriptionComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AccueilModule { }
