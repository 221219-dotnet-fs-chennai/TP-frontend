import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class AddScheduleService {
  selectedDate !: Date
  Docemail !: string | undefined

  constructor(private http: HttpClient) { }

  AddSchedule(email : string) {
    return this.http.get<any>(`http://localhost:5103/apigateway/DoctorByEmail/${email}`);
  }
}
