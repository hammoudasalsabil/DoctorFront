import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ContainerComponent } from './layout/container/container.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProfilComponent } from './layout/container/profil/profil.component';
import { DoctorsComponent } from './layout/container/doctors/doctors.component';
import { NotificationComponent } from './layout/container/notification/notification.component';
import { AppRoutingModule } from './admin.route';
import { AdddoctorComponent } from './layout/container/adddoctor/adddoctor.component';
import { SidbarComponent } from './layout/sidbar/sidbar.component';
import { EditdoctorComponent } from './layout/container/editdoctor/editdoctor.component';



@NgModule({
  declarations: [
    LayoutComponent,
    ContainerComponent,
    NavbarComponent,
    FooterComponent,
    ProfilComponent,
    DoctorsComponent,
    NotificationComponent,
    AdddoctorComponent,
    SidbarComponent,
    EditdoctorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AdminModule { }
