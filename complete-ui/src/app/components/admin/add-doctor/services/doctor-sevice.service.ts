import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorSeviceService {

  constructor(private http : HttpClient) { }

  addDoctor(doctor : Doctor){
    return this.http.post<Doctor>("http://localhost:5103/apigateway/AddDoctor", doctor);
  }
}
