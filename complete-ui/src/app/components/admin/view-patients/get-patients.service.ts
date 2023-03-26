import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetPatientsService {

  constructor(private http : HttpClient) { }
  getAllData(){
    return this.http.get<Patient[]>("http://localhost:5103/apigateway/GetAllPatients")
  }
}

export interface Patient{
  fullname : string | undefined,
  age : number | undefined,
  gender: string | undefined,
  email: string | undefined,
  pasword: string | undefined,
  phone: number | undefined,
  adressLine: string | undefined,
  city: string | undefined,
  state: string | undefined,
  created: string | undefined
}

