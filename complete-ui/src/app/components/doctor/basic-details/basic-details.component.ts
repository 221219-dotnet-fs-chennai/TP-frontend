import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent {
  // basicDetails : BasicDetails = {
  //   bp : "142/96 npm",
  //   heartRate : 72,
  //   spO2 : "123/32",
  //   height: "string",
  //   weight: "string",
  //   temperature: "string",
  //   bloodGroup: "string",
  //   health_Id: "string",
  //   allergy: []
  // }

  ngOnInit(){

  }

}


export interface BasicDetails{
  dateTime : string
  patientId : string
  appointmentId : string
  bp? : string
  heartRate? : number
  spO2? : string
  weight? : string,
  height? : string,
  temperature? : string,
  bloodGroup? : string,
  allergies: allergyRecord[]
}

export interface allergyRecord{
  id : string
  health_Id : string
  appointment_Id : string
  allergy : string
}

// [
//   {
//       "dateTime": "2023-03-31T13:42:00",
//       "patientId": "c56b5473-4549-45d2-932b-28fe6c87ea12",
//       "appointmentId": "ee93e5d4-e48e-4ecd-acd4-c92b953d3fd1",
//       "bp": "120/80",
//       "heartRate": 72,
//       "spO2": "92",
//       "weight": "56",
//       "height": "152",
//       "bloodGroup": "A+",
//       "temperature": "34",
//       "allergies": [
//           {
//               "id": "00000000-0000-0000-0000-000000000000",
//               "health_Id": "c56b5473-4549-45d2-932b-28fe6c87ea12",
//               "appointment_Id": "ee93e5d4-e48e-4ecd-acd4-c92b953d3fd1",
//               "allergy": "soy"
//           },
//           {
//               "id": "00000000-0000-0000-0000-000000000000",
//               "health_Id": "c56b5473-4549-45d2-932b-28fe6c87ea12",
//               "appointment_Id": "ee93e5d4-e48e-4ecd-acd4-c92b953d3fd1",
//               "allergy": "gluten"
//           }
//       ]
//   }
// ]