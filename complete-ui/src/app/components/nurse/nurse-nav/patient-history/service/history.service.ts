import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface patientHistory{
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
    return this.http.get("https://localhost:7203/api/PBRecord/GetPRBy/mmmm",{headers:this.httpOptions.headers});
  }
  public getTestDetails():Observable<any>
  {
    return this.http.get("https://localhost:7203/api/PHRecord/GetHR/mmmm",{headers:this.httpOptions.headers});
  }
}


