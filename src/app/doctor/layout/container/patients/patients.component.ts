import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITblPatiens } from 'src/app/model/patient.model';
import { ITblUsers } from 'src/app/model/user.model';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  tblUserList: any =[];
  tblPatientsList: any =[];
  constructor(private service:ServicesService,private router: Router) { }

  ngOnInit(): void {
    this.getPatient();
  }
  getPatient(){
    this.service.getUser().subscribe(res=>{
      this.tblUserList = res;
      console.log("this.tblUserList :",this.tblUserList);
      this.tblUserList.forEach((element:any , index:number) => {

        if(element["type_per"] != "P") delete this.tblUserList[index];

        if(element["type_per"] =="P")  this.tblPatientsList.push(this.tblUserList[index]);
        
      
      });
      console.log("this.tblPatientsList :",this.tblPatientsList);
    })
  }
  editPatient(id:number){
    this.router.navigate(['/Doctor/patientEdit',id])
  }
  deletePatient(id:number){
    let confirm=window.confirm('are you sure?')
    if(confirm==true){

      this.service.deletUser(id).subscribe(res=>{

        this.router.navigate(['/Doctor/patients'])
      
        //alert(res.toString());
      });
    }
    
  }
  showPatient(id:number){
    this.router.navigate(['/Doctor/PatientView',id])
  }

}
