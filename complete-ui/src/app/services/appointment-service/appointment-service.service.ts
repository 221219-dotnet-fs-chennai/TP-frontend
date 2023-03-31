import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppointmentDoctor, AppointmentDoctorOne } from 'src/app/models/appointmentServiceModel';

import { catchError, Observable, of } from 'rxjs';

import { Guid } from 'guid-typescript';
import { Appointment } from 'src/app/components/doctor/notification/notification.component';
import { Patient } from 'src/app/components/admin/view-patients/get-patients.service';
import { patientinfo } from 'src/app/models/patientinfomodel';
import { PatientInfo } from 'src/app/components/login.service';


@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  constructor(private http: HttpClient) { }

  baseapiurl: string = 'http://localhost:5103';

  addAppointmentByPatient(addAppointment : AppointmentDoctorOne) : Observable<AppointmentDoctor>{
    console.log(addAppointment);

    return this.http.post<AppointmentDoctor>(this.baseapiurl + '/apigateway/AddNewAppointment', addAppointment);
  }

  getAppointmentsByStatusOne(): Observable<AppointmentDoctor[]> {
    return this.http.get<AppointmentDoctor[]>(this.baseapiurl + '/apigateway/GetAcceptedAppointments')
  }

  getAppointmentsByStatus(status: number): Observable<AppointmentDoctor[]> {
    return this.http.get<AppointmentDoctor[]>(`${this.baseapiurl}/apigateway/GetAppointmentsByStatus/${status}`)
  }


  getAppointmentsByDoctorId(doctor_id: string | null | undefined): Observable<AppointmentDoctor[]> {
    return this.http.get<AppointmentDoctor[]>(`${this.baseapiurl}/apigateway/GetAppointmentsByDocId/${doctor_id}`)
  }

  getAppointmentsByNurseId(nurse_id: string | null | undefined): Observable<AppointmentDoctor[]> {
    return this.http.get<AppointmentDoctor[]>(`${this.baseapiurl}/apigateway/GetAppointmentsByNurId/${nurse_id}`)
  }

  updateStatusByDoctor(appointment_id: Guid | undefined, status: number | undefined): Observable<AppointmentDoctor> {
    // return this.http.put<AppointmentDoctor>(this.baseapiurl + '/api' + '/Appointment' + '/UpdateStatusByDoctor?appointment_id=' + appointment_id + '&status=' + status , {});
    return this.http.put<AppointmentDoctor>(`${this.baseapiurl}/apigateway/UpdateAppointmentStatusByDoctor/${appointment_id}/${status}`, {});

  }

  updateNurseIdByNurse(appointment_id: Guid | undefined, nurse_id: string | undefined | null): Observable<AppointmentDoctor> {
    return this.http.put<AppointmentDoctor>(`${this.baseapiurl}/apigateway/UpdateAppointmentNurseId/${appointment_id}/${nurse_id}`, {}).pipe(
      catchError(error => of("400",error))    
    );
  }
}

export interface AppointmentPatient{
  appointment : AppointmentDoctor
  patient : PatientInfo
}