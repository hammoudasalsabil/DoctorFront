import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITblPatiens } from 'src/app/model/patient.model';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.scss']
})
export class PatientAddComponent implements OnInit {

  tblpatient!: ITblPatiens;
  addpatientForm!: FormGroup;
  name!: string;

  constructor(private service:ServicesService,private router: Router) { }

  ngOnInit(): void {
    
    this.addpatientForm = new FormGroup({
      'name': new FormControl(null,[Validators.required]),
      'surname': new FormControl(null,[Validators.required]),
      'adress': new FormControl(null,[Validators.required,Validators.minLength(8)]),
      'phone': new FormControl(null,[Validators.required]),
      'id_doctor': new FormControl(2,[])

    })
  }

  addpatient(){
    this.tblpatient = this.addpatientForm.value;
    console.log("this.addpatientForm.value",this.addpatientForm.value);
    console.log("this.tblpatient",this.tblpatient);
    this.service.addPatient(this.tblpatient).subscribe(res=>{
      
    });
  }

}
