import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { patientHistory,HistoryService } from './service/history.service';
import { PatientCompleteHistoryDocComponent } from 'src/app/components/doctor/patient-complete-history/patient-complete-history.component';
import { CompleteHistoryComponent } from 'src/app/components/patient/complete-history/complete-history.component';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent implements OnInit, AfterViewInit{
  patienthistory!:patientHistory[];

  constructor(private route : ActivatedRoute,private router : Router,private hist:HistoryService) {}

  @ViewChild(CompleteHistoryComponent) patientHistoryNurse !:CompleteHistoryComponent
  goBack(){ 
    this.router.navigate(['nurse-dashboard', window.localStorage.getItem('NurseName'), window.localStorage.getItem('Nurse')])
  }
  isLoading = false
  ngAfterViewInit(): void {
    this.isLoading = false
  }

  ngOnInit(): void {
    this.isLoading = true; 
  }
  // phistory!: any[];
  // ptest!: any[];
  // fetchdata(){
  //   this.hist.getData().subscribe(data=>
  //     {
  //       this.patienthistory=data;
  //       this.phistory=this.patienthistory;
  //     })
  //   this.hist.getTestDetails().subscribe(result=>
  //     {
  //       this.patienthistory=result;
  //       this.ptest=this.patienthistory;
  //       console.log(this.ptest);
  //     })
  // }
  

  
//   histories : patientHistory[] = [{
//     date : "23-Mar-2000",
//     medicines : `paracetmol`,
//     tests : `Blood test : 
//     Result : positive`
//   },
//   {
//     date : "28-Mar-2000",
//     medicines : `paracetmol`,
//     tests : `Blood test : 
//     Result : positive`
//   }, 
// ]
}



