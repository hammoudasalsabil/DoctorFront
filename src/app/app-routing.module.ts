import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilModule } from './accueil/accueil.module';
import { AdminModule } from './admin/admin.module';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';

const routes: Routes = [
  {path:'', loadChildren: () => import('./accueil/accueil.module').then(m => m.AccueilModule)},
  { path: 'Admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'Doctor', loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule) },
  { path: 'Patient', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            AccueilModule,
            AdminModule,
            DoctorModule,
            PatientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
