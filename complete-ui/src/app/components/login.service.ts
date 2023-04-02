import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Doctor } from './admin/add-doctor/doctor';
import { Nurse } from './admin/add-nurse/nurse';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http : HttpClient){}
  isLoggedIn = false
  login(email : string){
    if(email === 'admin.com' || 'doctor.com' || 'nurse.com'){
      this.isLoggedIn = true
      //u can add specific routes here
    }
    return this.isLoggedIn
  }

  getPatientByEmail(email : string | null):Observable<PatientInfo[]> {
    return this.http.get<PatientInfo[]>(`http://localhost:5103/apigateway/PatientByEmail/${email}`)
  }
  getDoctorByEmail(email:string){
    return this.http.get<Doctor>(`http://localhost:5103/apigateway/DoctorByEmail/${email}`)
  }

  getNurseByEmail(email:string){
    return this.http.get<Nurse>(`http://localhost:5103/apigateway/GetNurseByEmail/${email}`)
  }
}


export interface PatientInfo{
    patId : Guid,
    fullname : string,
    age : number,
    gender : string,
    email : string,
    pasword : string,
    phone : number,
    adressLine : string,
    city : string,
    state : string,
    created : string
}
