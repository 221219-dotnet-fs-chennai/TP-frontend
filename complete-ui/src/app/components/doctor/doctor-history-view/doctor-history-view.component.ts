import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientCompleteHistoryDocComponent } from '../patient-complete-history/patient-complete-history.component';

@Component({
  selector: 'app-doctor-history-view',
  templateUrl: './doctor-history-view.component.html',
  styleUrls: ['./doctor-history-view.component.css']
})
export class DoctorHistoryViewComponent implements AfterViewInit, OnInit {
  constructor(private router : Router, private route : ActivatedRoute){}
  patName !: string
  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      this.patName = data['name']
    })  
  }
  ngAfterViewInit(): void {
    // let id : string
    // console.log(this.patientHistory)
    // this.route.params.subscribe((data) => {
    //   id = data['id']
    //   this.patientHistory.patientId = id
    //   this.patientHistory.ngOnInit()
    // })
  }
  // @ViewChild(PatientCompleteHistoryDocComponent) patientHistory !: PatientCompleteHistoryDocComponent
  
  goBack(){
    this.router.navigate(['doctor-dashboard', window.localStorage.getItem('DoctorName'), window.localStorage.getItem('Doctor')])
  }
}
