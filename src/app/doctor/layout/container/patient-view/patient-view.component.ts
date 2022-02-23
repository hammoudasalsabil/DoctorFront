import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITblUsers } from 'src/app/model/user.model';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.scss']
})
export class PatientViewComponent implements OnInit {

  Patient!:ITblUsers;
  idPatient!: number;
  PatientsList!:ITblUsers[];
  
  constructor(private service:ServicesService,private router: Router,private activatedRoute: ActivatedRoute) { 
    this.idPatient = this.activatedRoute.snapshot.params['id'];
  }
 

  ngOnInit(): void {
    this.service.getUser().subscribe(data=>{
      this.PatientsList = data;

      console.log("this.PatientsList", this.PatientsList)
      this.PatientsList.forEach((element:any, index:number)=>{
        if(element['id'] == this.idPatient)  this.Patient=this.PatientsList[index];

          });
    });
  }

}
