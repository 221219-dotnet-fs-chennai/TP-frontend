import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../add-doctor/doctor';

@Injectable({
  providedIn: 'root'
})
export class GetAllDoctorsService {

  constructor(private http : HttpClient) { }

  getAll(){
    return this.http.get<Doctor[]>("http://localhost:5103/apigateway/GetAllDoctor");
  }
}
