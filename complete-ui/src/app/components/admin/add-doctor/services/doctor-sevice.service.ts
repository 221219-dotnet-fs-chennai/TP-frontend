import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../doctor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorSeviceService {

  constructor(private http : HttpClient) { }

  addDoctor(doctor : Doctor){
    return this.http.post<any>("http://localhost:5103/apigateway/AddDoctor", doctor);
  }
}
