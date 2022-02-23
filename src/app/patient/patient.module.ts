import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ContainerComponent } from './layout/container/container.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DocumentComponent } from './layout/container/document/document.component';
import { NotificationComponent } from './layout/container/notification/notification.component';
import { ForumComponent } from './layout/container/forum/forum.component';
import { ProfilComponent } from './layout/container/profil/profil.component';
import { PublicationComponent } from './layout/container/publication/publication.component';
import { AppRoutingModule } from './patient.route';



@NgModule({
  declarations: [
    LayoutComponent,
    ContainerComponent,
    NavbarComponent,
    FooterComponent,
    DocumentComponent,
    NotificationComponent,
    ForumComponent,
    ProfilComponent,
    PublicationComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class PatientModule { }
