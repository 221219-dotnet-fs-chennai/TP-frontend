import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppointmentDoctor } from 'src/app/models/appointmentServiceModel';
import { Observable } from 'rxjs';
import { Guid } from 'guid-typescript';
import { patientinfo } from 'src/app/models/patientinfomodel';
@Injectable({
  providedIn: 'root'
})
export class PatientInfoService {

  constructor(private http : HttpClient) { }


  baseapiurl : string = 'http://localhost:5103';


  getPatientInfo(patientId : string | undefined) : Observable<patientinfo>{

    return this.http.get<patientinfo>(`${this.baseapiurl}/apigateway/PatientById/${patientId}`);

  }


}
