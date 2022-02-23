import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddoctorComponent } from './layout/container/adddoctor/adddoctor.component';
import { DoctorsComponent } from './layout/container/doctors/doctors.component';
import { EditdoctorComponent } from './layout/container/editdoctor/editdoctor.component';
import { NotificationComponent } from './layout/container/notification/notification.component';
import { ProfilComponent } from './layout/container/profil/profil.component';
import { LayoutComponent } from './layout/layout.component';

  const adminRoute : Routes = [
    {
      path:'',component:LayoutComponent,
      children:[
        {path:'',component:ProfilComponent},
        {path:'Doctors',component:DoctorsComponent},
        {path:'Notification',component:NotificationComponent},
        {path:'addDoctor',component:AdddoctorComponent},
        {path:'EditDoctor',component:EditdoctorComponent}
        // {path:'**',component:ProfilComponent}
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
