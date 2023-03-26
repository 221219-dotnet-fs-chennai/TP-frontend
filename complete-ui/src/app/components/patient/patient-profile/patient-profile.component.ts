import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { Patient } from '../../admin/view-patients/view-patients.component';
import { Patient } from '../../admin/view-patients/get-patients.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent {
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
    },
  ]
}

