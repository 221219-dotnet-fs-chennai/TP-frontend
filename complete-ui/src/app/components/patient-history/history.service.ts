import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Guid } from 'guid-typescript';
import { BasicDetails } from '../doctor/basic-details/basic-details.component';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http : HttpClient) { }

  getHR(id : string | undefined):Observable<HealthR[]>{
    return this.http.get<HealthR[]>(`http://localhost:5103/apigateway/GetHR/${id}`)
    .pipe(catchError(err =>of("err", err)))
  }
  getBR(id : string | undefined): Observable<BasicR[]>{
    return this.http.get<BasicR[]>(`http://localhost:5103/apigateway/GetBR/${id}`)
    .pipe(catchError(err =>of("err", err)))
  }
  
  getTR(id : string | undefined , AID:string| undefined):Observable<TestR[]>{
    return this.http.get<TestR[]>(`http://localhost:5103/apigateway/GetTRByAID/${id}/${AID}`)
    .pipe(catchError(err =>of("err", err)))
  }
  getMR(id : string | undefined, AID : string | undefined): Observable<Drugs[]>{
    return this.http.get<Drugs[]>(`http://localhost:5103/apigateway/GetMRByAID/${id}/${AID}`)
    .pipe(catchError(err =>of("err", err)))
  }
  getAR(id : string | undefined, AID : string | undefined) : Observable<AllergyR[]>{
   return this.http.get<AllergyR[]>(`http://localhost:5103/apigateway/GetARByAID/${id}/${AID}`)
    .pipe(catchError(err =>of("err", err)))
  }

  getPatientBasicRecord(id : string | undefined, AID : string | undefined): Observable<BasicDetails[]>{
    return this.http.get<BasicDetails[]>(`http://localhost:5103/apigateway/GetBasic/ByPatientId/ByAppointmentId/${id}/${AID}`)
    .pipe(catchError(err =>of("err", err)))
  }
}

export interface HealthR{
  id : Guid
  dateTime : string
  patientId : string
  doctorId : string
  appointmentId : string
  conclusion : string
}

export interface BasicR{
heart_Rate: any;
  id : Guid
  dateTime : string
  nurseId : string
  heartRate : number
  appointmentId : string
  patientId : string
  bp : string
  spO2: string
  weight : string
  height: string
  bloodGroup : string
  temperature : string
}

export interface TestR{
  id : Guid
  healthId : string
  appointmentId : string
  test : string
  result  : string
}

export interface Drugs{
  id:Guid
  healthId : string
  appointmentId : string
  drug : string
  quantity : string
}

// {
//   "id": "5be283b2-5b68-4f9c-aa55-a5a4fe6ef439",
//   "healthId": "4979f825-324a-4351-b0da-21732eeb3732",
//   "appointmentId": "85cc289a-8c27-4a1d-998f-c65282cfc6b7",
//   "drug": "Fersamal ",
//   "quantity": "1-1-1/day for 3Days"
// },

export interface AllergyR{
  id: string,
  healthId : string,
  appointmentId : string,
  allergy : string,
  appointment : string | null
}

export interface AllR{
  healthR : HealthR
  basicR : BasicR
}
// {
//   "id": "0385b46a-1073-4855-a1cc-0694831a9734",
//   "healthId": "4979f825-324a-4351-b0da-21732eeb3732",
//   "appointmentId": "85cc289a-8c27-4a1d-998f-c65282cfc6b7",
//   "test": "Hemoglobin count",
//   "result": "14 g/dL"
// },