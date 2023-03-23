import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../../admin/view-patients/view-patients.component';

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
      name: 'Max',
      gender: 'male',
      age: 33,
      phone: 8956747589,
      address: '100 avenue road',
      city: 'bangalore',
      state: 'karnataka'
    }
  ]
}
