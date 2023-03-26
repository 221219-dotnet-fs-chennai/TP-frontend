import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Guid } from 'guid-typescript';
import { Observable, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterLoginService {
  constructor(private http: HttpClient) {}
  Rurl = "http://localhost:5103/apigateway/AddPatient"
  Lurl = "http://localhost:5103/apigateway/LoginAd"
  addNewUser(user : User) {
    return this.http.post<User>(this.Rurl, user)
      .pipe(catchError(err => of('error',err)))
  }
  addNewLogin(user : UserLogin){
    return this.http.post<UserLogin>(this.Lurl, user)
      .pipe(catchError(err => of('error',err)))
  }
}

export interface UserLogin{
  loginId : Guid
  email: string
  password: string
}
export interface User {
  fullname: string;
  age: number;
  gender: string;
  email: string;
  pasword: string;
  phone: number;
  adressLine: string;
  city: string;
  state: string;
  created: string;
}
