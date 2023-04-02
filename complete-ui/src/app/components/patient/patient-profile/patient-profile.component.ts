import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Patient } from '../../admin/view-patients/view-patients.component';
import { Patient } from '../../admin/view-patients/get-patients.service';
import { LoginService, PatientInfo } from '../../login.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit{
  pat : PatientInfo[] = []
  constructor(private router: Router, private patService : LoginService){}
  ngOnInit(): void {
    let email = window.localStorage.getItem("pEmail")
     this.patService.getPatientByEmail(email).subscribe((data) => {
        data.forEach(p=>{
          this.pat.push(p)
        })
     });
  }
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

