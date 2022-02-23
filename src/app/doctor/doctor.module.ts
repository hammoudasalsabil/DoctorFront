import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ContainerComponent } from './layout/container/container.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DocumentComponent } from './layout/container/document/document.component';
import { ProfilComponent } from './layout/container/profil/profil.component';
import { NotificationComponent } from './layout/container/notification/notification.component';
import { ForumComponent } from './layout/container/forum/forum.component';
import { PatientsComponent } from './layout/container/patients/patients.component';
import { PublicationComponent } from './layout/container/publication/publication.component';
import { AppRoutingModule } from './doctor.route';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientAddComponent } from './layout/container/patient-add/patient-add.component';
import { PatientEdidComponent } from './layout/container/patient-edid/patient-edid.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PatientViewComponent } from './layout/container/patient-view/patient-view.component';



@NgModule({
  declarations: [
    LayoutComponent,
    ContainerComponent,
    NavbarComponent,
    FooterComponent,
    DocumentComponent,
    ProfilComponent,
    NotificationComponent,
    ForumComponent,
    PatientsComponent,
    PublicationComponent,
    SidebarComponent,
    PatientAddComponent,
    PatientEdidComponent,
    PatientViewComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class DoctorModule { }
