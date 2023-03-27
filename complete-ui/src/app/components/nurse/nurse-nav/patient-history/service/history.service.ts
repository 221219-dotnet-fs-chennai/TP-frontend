import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface patientHistory{
  getBasicRecord(): unknown;
  getHealthRecord(): unknown;
  drugs : string,
  test : string,
  result: string,
  date_Time: Date,
  bp : string,
  heart_Rate : number,
  spO2: string,
  weight: string,
  height: string,
  bloodGroup: string,
  temperature: string
}




@Injectable({
  providedIn: 'root'
})

export class HistoryService {

  constructor(private http: HttpClient) { }
  httpOptions={
    headers:new HttpHeaders({
      'Content-type':'application/json',

      })}

  public getData():Observable<any>
  {
    return this.http.get("http://localhost:5103/apigateway/GetPatientRecord/mmmm",{headers:this.httpOptions.headers});
  }
  public getTestDetails():Observable<any>
  {
    return this.http.get("http://localhost:5103/apigateway/GetPatientHealthRecord/mmmm",{headers:this.httpOptions.headers});
  }
}


