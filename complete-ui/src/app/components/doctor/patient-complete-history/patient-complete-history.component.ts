import { patientHistory } from './../../nurse/nurse-nav/patient-history/service/history.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Basic, Health, PatienthistoryService } from './services/patienthistory.service';

@Component({
  selector: 'app-patient-complete-history-doc',
  templateUrl: './patient-complete-history.component.html',
  styleUrls: ['./patient-complete-history.component.css']
})
export class PatientCompleteHistoryDocComponent implements OnInit{

  basics:any[]=[]
  healths:any[]=[]
  constructor(private router: Router,private patienthistory:PatienthistoryService,private route:ActivatedRoute){}
  patientId !: string  
  ngOnInit(): void 
  {
    // let patientId 
    // this.route.params.subscribe((data) => {
    //   this.patientId = data['id']
    // })

    this.patienthistory.getBasicRecord(this.patientId)
    .subscribe({
      next:(basics) => {
        this.basics = basics;
      },
      error : (response) =>{
        console.log(response);
      }
    })
    
    this.patienthistory.getHealthRecord(this.patientId)
    .subscribe({
      next:(healths) =>{
        this.healths = healths;
      },
      error:(response: any) =>{
        console.log(response);
      }
    })
  }

  // goBack(){
  //   this.router.navigate(['doctor-dashboard'])
  // }
}
