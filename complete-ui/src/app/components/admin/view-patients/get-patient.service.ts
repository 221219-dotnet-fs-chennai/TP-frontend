import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetPatientService {

  constructor(private http : HttpClient) { }
}

export interface Patient{

}
