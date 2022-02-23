import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './layout/container/document/document.component';
import { ForumComponent } from './layout/container/forum/forum.component';
import { NotificationComponent } from './layout/container/notification/notification.component';
import { ProfilComponent } from './layout/container/profil/profil.component';
import { PublicationComponent } from './layout/container/publication/publication.component';
import { LayoutComponent } from './layout/layout.component';

  const adminRoute : Routes = [
    {
      path:'',component:LayoutComponent,
      children:[
        {path:'',component:ProfilComponent},
        {path:'Document',component:DocumentComponent},
        {path:'Notification',component:NotificationComponent},
        {path:'Forum',component:ForumComponent},
        {path:'publication',component:PublicationComponent},
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
