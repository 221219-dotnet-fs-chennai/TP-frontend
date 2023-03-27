import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from './admin/add-doctor/doctor';


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
  getDoctorByEmail(email:string){
    return this.http.get<Doctor>(`http://localhost:5103/apigateway/DoctorByEmail/${email}`)
  }
}
