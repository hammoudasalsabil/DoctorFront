import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  ApUrl = "http://localhost:8080/";
  
  httpHeadrs = new HttpHeaders ({
    'Content-Type':  'application/json',
    // 'Authorization': 'mon-jeton',
    // 'Access-Control-Allow-Origin':'http://localhost:8080',
    // 'responseType': 'text' 
  });


  constructor(private http: HttpClient) { }

  //GET
  getUser():Observable<any[]>{
    return this.http.get<any[]>(this.ApUrl+ 'User')
  }
  //Add
  addPatient(data:any){
    return this.http.post(this.ApUrl+ 'AddPatient',data)
  }
  //update
  updateP(data:any){
    //return this.http.put("http://localhost:8553/Fournisseurs/"+data.id,data);
    return this.http.put(this.ApUrl+ 'UpdPatient/'+data.id,data);
  } 
   //delate
   deletUser(id:number){
    return this.http.delete(this.ApUrl+'DelUser/'+id)
  }
}
