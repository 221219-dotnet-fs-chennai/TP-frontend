import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { patientHistory,HistoryService } from './service/history.service';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent implements OnInit{
  patienthistory!:patientHistory[];

  constructor(private router : Router,private hist:HistoryService) 
  {
    this.hist.getData().subscribe(data => {
      this.patienthistory=data;
    })
    this.hist.getTestDetails().subscribe(result=>{
      this.patienthistory=result;
    })
  }

  ngOnInit(): void {
    this.fetchdata();
    
  }
  phistory!: any[];
  ptest!: any[];
  fetchdata(){
    this.hist.getData().subscribe(data=>
      {
        this.patienthistory=data;
        this.phistory=this.patienthistory;
      })
    this.hist.getTestDetails().subscribe(result=>
      {
        this.patienthistory=result;
        this.ptest=this.patienthistory;
        console.log(this.ptest);
      })
  }
  goBack(){ 
    this.router.navigate(['nurse-dashboard'])
  }

  
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



