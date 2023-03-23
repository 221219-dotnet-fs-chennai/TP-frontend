import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppointmentDoctor } from 'src/app/models/appointmentServiceModel';
import { Observable } from 'rxjs';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  constructor(private http : HttpClient) { }

  baseapiurl : string = 'https://localhost:55516';

  addAppointmentByPatient(addAppointment : AppointmentDoctor) : Observable<AppointmentDoctor>{
    console.log(addAppointment);

    return this.http.post<AppointmentDoctor>(this.baseapiurl + '/api' + '/Appointment' + '/AddAppointmentByPatient' , addAppointment);
  }

  getAppointmentsByStatusOne() : Observable<AppointmentDoctor[]>
{
  return this.http.get<AppointmentDoctor[]>(this.baseapiurl + '/api' + '/Appointment' + '/GetAppointmentsByStatusOne')

}

getAppointmentsByDoctorId(doctor_id : string) : Observable<AppointmentDoctor[]>{
  return this.http.get<AppointmentDoctor[]>(`${this.baseapiurl}/api/Appointment/GetAppointmentsByDoctorId?doctor_id=${doctor_id}`)
}

updateStatusByDoctor(appointment_id : Guid|undefined , status : number | undefined) : Observable<AppointmentDoctor> {
  // return this.http.put<AppointmentDoctor>(this.baseapiurl + '/api' + '/Appointment' + '/UpdateStatusByDoctor?appointment_id=' + appointment_id + '&status=' + status , {});
  return this.http.put<AppointmentDoctor>(`${this.baseapiurl}/api/Appointment/UpdateStatusByDoctor?appointment_id=${appointment_id}&status=${status}`,{});

}

updateNurseIdByNurse(appointment_id : Guid|undefined , nurse_id : string|undefined) : Observable<AppointmentDoctor>{


  return this.http.put<AppointmentDoctor>(`${this.baseapiurl}/api/Appointment/UpdateNurseIdByNurse?appointment_id=${appointment_id}&nurse_id=${nurse_id}`,{});

}
}
