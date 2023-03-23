import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@auth0/auth0-angular';

export interface details{
    patient_Id: string,
    date_Time: Date,
    nurse_Id : string,
    appointment_Id : string,
    bp : string,
    heart_Rate : number,
    spO2: string,
    weight: string,
    height: string,
    bloodGroup: string,
    temperature: string
}

// export interface allergyex{
//   health_Id: string,
//   appointment_Id: string,
//   allergy: string
// }

@Injectable({
  providedIn:'root'
})
export class UpdatebasicrecordService {

  constructor(private http:HttpClient) {}
  saveUser(data:details){
    return this.http.post<details>('https://localhost:49165/api/PBRecord/AddPBRecords',data)
  }
  // savealergy(data:allergyex){
  //   return this.http.post<allergyex>('https://localhost:49165/api/Allergy/AddAllergyRecords',data)
  // }
}

