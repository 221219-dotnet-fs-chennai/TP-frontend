import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, scheduled } from 'rxjs';
// import { Schedule } from '../../schedule';
import { Schedule } from '../admin/add-schedule/availability.service';
import { Doctor } from '../admin/add-doctor/doctor';
import { Patient } from '../admin/view-patients/get-patients.service';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  constructor(private http : HttpClient) { }

  AddSchedule(sch : Schedule) : Observable<Schedule> {
    return this.http.post<Schedule>('https://localhost:44337/api/PhysicianAvailability/AddSchedule', sch);
  }

  UpdateDaySchedule(day: number, sch : Schedule[]) {
    return this.http.put<Schedule[]>(`https://localhost:44337/api/PhysicianAvailability/UpdateAllSchedules?day=${day}`, sch);
  }

  GetDaySchedule(day: string | null) {
    return this.http.get<Schedule[]>(`http://localhost:5103/apigateway/GetScheduleByDay/${day}`);
  }

  getAllDoctors(){
    return this.http.get<Doctor[]>(`http://localhost:5103/apigateway/GetAllDoctor`)
  }
}

export interface DoctorSchedule{
  Doctor : Doctor
  schedule : Schedule
}