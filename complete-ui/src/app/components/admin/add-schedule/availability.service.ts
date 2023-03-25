import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, scheduled } from 'rxjs';
import { Doctor } from '../add-doctor/doctor';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  constructor(private http : HttpClient) { }

  AddSchedule(sch : Schedule) : Observable<Schedule> {
    return this.http.post<Schedule>('http://localhost:5103/apigateway/AddDoctorSchedule', sch);
  }

  UpdateDaySchedule(day: number, sch : Schedule[]) {
    return this.http.put<Schedule[]>(`http://localhost:5103/apigateway/UpdateAllSchedule/${day}`, sch);
  }

  GetDaySchedule(day: string) {
    return this.http.get<Schedule[]>(`http://localhost:5103/apigateway/GetScheduleByDay/${day}`);
  }
}
export interface Schedule {
  doctorId : string | undefined,
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday : number;
}