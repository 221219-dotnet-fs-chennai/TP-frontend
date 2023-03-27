import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';

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

  getPatientByEmail(email : string | null) {
    return this.http.get<PatientInfo[]>(`http://localhost:5103/apigateway/PatientByEmail/${email}`)
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
