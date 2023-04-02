import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Doctor } from '../admin/add-doctor/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http : HttpClient) { }

  getDoctorByEmail(email : string | undefined) : Observable<Doctor> {
    return this.http.get<Doctor>(`http://localhost:5103/apigateway/DoctorByEmail/${email}`)
  }
}


