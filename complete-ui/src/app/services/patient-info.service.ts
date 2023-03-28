import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientInfo } from '../components/login.service';
import { AppointmentDoctor } from '../models/appointmentServiceModel';

@Injectable({
  providedIn: 'root'
})
export class PatientInfoService {

  constructor(private http: HttpClient) { } 

  getAllPatientInfos() {
    return this.http.get<PatientInfo[]>(`http://localhost:5103/apigateway/GetAllPatients`);
  }
  
  getPatientInfoById(id : string | null | undefined) {
    return this.http.get<PatientInfo>(`http://localhost:5103/apigateway/PatientById/${id}`);
  }
}

export interface PatientAppointmentInfo {
    appointment : AppointmentDoctor
    patient : PatientInfo
}
