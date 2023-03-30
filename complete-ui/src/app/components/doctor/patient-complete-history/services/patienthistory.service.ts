import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Basic {
  patient_Id: string,
  bp: string,
  heart_Rate: number,
  spO2: string,
  weight: string,
  height: string,
  bloodGroup: string,
  temperature: string
}

export interface Health{
  drugs:string,
  test:string,
  result:string,
  conslusion:string
}

@Injectable({
  providedIn: 'root'
})
export class PatienthistoryService {

  constructor(private http: HttpClient) { }

  getBasicRecord(id:string):Observable<any>{
    return this.http.get<any>('http://localhost:5103/apigateway/GetPatientRecord/'+id)
  }

  getHealthRecord(id:string):Observable<any>{
    return this.http.get<any>('http://localhost:5103/apigateway/GetPatientHealthRecord/'+id)
  }
}
