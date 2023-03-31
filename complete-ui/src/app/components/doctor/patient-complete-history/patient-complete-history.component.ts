import { patientHistory } from './../../nurse/nurse-nav/patient-history/service/history.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Basic, Health, PatienthistoryService } from './services/patienthistory.service';
import { BasicR, Drugs, HistoryService, TestR } from '../../patient-history/history.service';

@Component({
  selector: 'app-patient-complete-history-doc',
  templateUrl: './patient-complete-history.component.html',
  styleUrls: ['./patient-complete-history.component.css']
})
export class PatientCompleteHistoryDocComponent implements OnInit{

  healths:any[]=[]
  basics: BasicR[] =[]
  test:TestR[] = []
  drug : Drugs[] = []
  isLoading = false
  constructor(private router: Router,private patienthistory:PatienthistoryService,private route:ActivatedRoute
    , private history : HistoryService){}
  patientId !: string 
  appoId !: string 
  ngOnInit(): void 
  {
    // this.patienthistory.getBasicRecord(this.patientId)
    // .subscribe({
    //   next:(basics) => {
    //     this.basics = basics;
        
    //   },
    //   error : (response) =>{
    //     console.log(response);
    //   }
    // })
    this.route.params.subscribe((data) => {
      this.patientId = data['id']
      this.appoId = data['AID']
    })
    this.history.getBR(this.patientId).subscribe((data)=>{
      this.isLoading = true
      data.forEach(b =>{
        if(b.appointmentId == this.appoId){
          this.basics = data
          this.isLoading = false
        }
      })
    })
      // this.basics.forEach(b => {this.appoId = b.appointmentId})
      // console.log(this.appoId);
      console.log(this.patientId);
      this.history.getMR(this.patientId, this.appoId).subscribe(mData =>{
        this.isLoading = true
        mData.forEach(m=>{
          if(m.appointmentId == this.appoId){
            this.drug = mData
            this.isLoading = false
          }
        })
      })
      this.history.getTR(this.patientId, this.appoId).subscribe((tData) =>{
        this.isLoading = true
        tData.forEach(t=>{
          if(t.appointmentId == this.appoId){
            this.test = tData
            this.isLoading = false
          }
        })
      })
      
    
    


    // this.patienthistory.getHealthRecord(this.patientId)
    // .subscribe({
    //   next:(healths) =>{
    //     this.healths = healths;
    //   },
    //   error:(response: any) =>{
    //     console.log(response);
    //   }
    // })
  }

  // goBack(){
  //   this.router.navigate(['doctor-dashboard'])
  // }
}
