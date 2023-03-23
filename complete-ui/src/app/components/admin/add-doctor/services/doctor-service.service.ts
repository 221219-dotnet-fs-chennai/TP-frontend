import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  constructor(private http : HttpClient) { }
  addDoctor(doctor : Doctor){
    return this.http.post<Doctor>('https://localhost:7255/api/Doctor/addDoctor', doctor)
  }
}
