import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

export interface healthdata{
  date_Time: Date,
  patient_Id: string,
  doctor_Id: string,
  appointment_Id: string,
  conclusion: string,
}

export interface testdata{
  appointment_Id: string,
  health_Id: string,
  test: string,
  result: string
}

export interface medicaldata{
  appointment_Id: string,
  drugs:string
}

@Injectable({
  providedIn: 'root'
})
export class AddhealthservService {

  constructor(private http:HttpClient) {}
  saveHealth(data:healthdata){
    return this.http.post<healthdata>('http://localhost:5103/apigateway/AddPatientHealthRecord',data)
    .pipe(catchError(err => of('error', err)))
  }
  savetest(data:testdata){
    return this.http.post<testdata>('http://localhost:5103/apigateway/AddPatientTests',data)
    .pipe(catchError(err => of('error', err)))
  }
  savemedical(data:medicaldata){
    return this.http.post<medicaldata>('http://localhost:5103/apigateway/AddPatientDrug',data)
    .pipe(catchError(err => of('error', err)))
  }
}
