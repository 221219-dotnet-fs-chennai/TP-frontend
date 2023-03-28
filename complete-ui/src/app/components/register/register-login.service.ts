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
  Lurl = "http://localhost:5103/apigateway/LoginAdd"
  UserExists = "http://localhost:5103/apigateway/LoginGet"
  getUser(email : string, password : string){
    return this.http.get(`http://localhost:5103/apigateway/LoginGet/${email}/${password}`)
      .pipe(catchError(err => of('error',err)))
  }
  addNewUser(user : User) {
    return this.http.post<User>(this.Rurl, user)
      .pipe(catchError(err => of('error',err)))
  }
  addNewLogin(user : UserLogin){
    return this.http.post<any>(this.Lurl, user)
      .pipe(catchError(err => of('error',err)))
  }
}

export interface UserLogin{
  loginId ?: string
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
