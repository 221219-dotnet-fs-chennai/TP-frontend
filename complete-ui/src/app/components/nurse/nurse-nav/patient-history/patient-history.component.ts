import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent {
  constructor(private router : Router) { }
  patientName = 'susen'
  goBack(){ 
    this.router.navigate(['nurse-dashboard'])
  }

  histories : patientHistory[] = [{
    date : "23-Mar-2000",
    medicines : `paracetmol`,
    tests : `Blood test : 
    Result : positive`
  },
  {
    date : "28-Mar-2000",
    medicines : `paracetmol`,
    tests : `Blood test : 
    Result : positive`
  }, 
]
}

export interface patientHistory{
  date : string
  medicines : string
  tests : string 
}

