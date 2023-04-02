import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompleteInfoService {

  constructor(private http : HttpClient) { }

  API_URL : string = "http://localhost:5103/apigateway/GetCompleteInfo/ByPatientId/"
  API_URL_DOC : string = "http://localhost:5103/apigateway/GetById/"
  getCompleteInfo(pid:string | undefined){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get(this.API_URL+pid, {headers, observe:'response'})
  }
  getDoctorName(did:string|undefined){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get(this.API_URL_DOC+did, {headers, observe:'response'})
  }
}
