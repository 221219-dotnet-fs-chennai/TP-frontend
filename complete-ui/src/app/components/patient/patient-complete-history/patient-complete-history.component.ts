import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { Patient } from '../../admin/view-patients/view-patients.component';
import { Patient } from '../../admin/view-patients/get-patients.service';
@Component({
  selector: 'app-patient-complete-history',
  templateUrl: './patient-complete-history.component.html',
  styleUrls: ['./patient-complete-history.component.css']
})
export class PatientCompleteHistoryComponent {
  constructor(private router: Router){}
  goBack(){
    this.router.navigate(['patient-dashboard'])
  }

  patients  : Patient[] = [
    {
      email: 'max@gmail.com',
      fullname: 'Max',
      gender: 'male',
      age: 33,
      phone: 8956747589,
      adressLine: '100 avenue road',
      city: 'bangalore',
      state: 'karnataka',
      created: "",
      pasword: ""
    }
  ]
}
// fullname : string | undefined,
// age : number | undefined,
// gender: string | undefined,
// email: string | undefined,
// pasword: string | undefined,
// phone: number | undefined,
// adressLine: string | undefined,
// city: string | undefined,
// state: string | undefined,
// created: string | undefined

