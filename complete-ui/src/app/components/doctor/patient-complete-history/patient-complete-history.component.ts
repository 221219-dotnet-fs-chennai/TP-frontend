import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-complete-history-doc',
  templateUrl: './patient-complete-history.component.html',
  styleUrls: ['./patient-complete-history.component.css']
})
export class PatientCompleteHistoryDocComponent {
  constructor(private router: Router){}
  goBack(){
    this.router.navigate(['doctor-dashboard'])
  }
}
