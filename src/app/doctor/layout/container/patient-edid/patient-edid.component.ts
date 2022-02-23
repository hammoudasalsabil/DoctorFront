import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ITblUsers } from 'src/app/model/user.model';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-patient-edid',
  templateUrl: './patient-edid.component.html',
  styleUrls: ['./patient-edid.component.scss']
})
export class PatientEdidComponent implements OnInit {

  PatientsList!: ITblUsers[];
  Patient!: ITblUsers;
  idPatient!: number;
  addpatientForm!: FormGroup;
  tblpatient: any = [];
  
  constructor(private service:ServicesService,private router: Router,private activatedRoute: ActivatedRoute) { 
    this.idPatient = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.service.getUser().subscribe(data=>{
      this.PatientsList = data;

      this.PatientsList.forEach((element:any, index:number)=>{
        if(element['id'] == this.idPatient)  {
          this.Patient=this.PatientsList[index];
          console.log(this.Patient);

          this.addpatientForm = new FormGroup({
            'id' : new FormControl(this.Patient.id,[Validators.required ]),
            'name' : new FormControl(this.Patient.name,[Validators.required ]),
            'surname': new FormControl(this.Patient.surname,[Validators.required]),
            'adress': new FormControl(this.Patient.adress,[Validators.required,Validators.minLength(8)]),
            'phone': new FormControl(this.Patient.phone,[Validators.required]),
            })
        }

          });
    });

  }
  updpatient(){
    this.tblpatient = this.addpatientForm.value;
    console.log("this.addpatientForm.value",this.addpatientForm.value);
    console.log("this.tblpatient",this.tblpatient);
    this.service.updateP(this.tblpatient).subscribe(res=>{
    });
  }

}
