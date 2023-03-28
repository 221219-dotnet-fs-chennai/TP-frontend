import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientCompleteHistoryDocComponent } from '../patient-complete-history/patient-complete-history.component';

@Component({
  selector: 'app-doctor-history-view',
  templateUrl: './doctor-history-view.component.html',
  styleUrls: ['./doctor-history-view.component.css']
})
export class DoctorHistoryViewComponent implements AfterViewInit {
  constructor(private router : Router, private route : ActivatedRoute){}
  ngAfterViewInit(): void {
    let id : string
    console.log(this.patientHistory)
    this.route.params.subscribe((data) => {
      id = data['id']
      this.patientHistory.patientId = id
      this.patientHistory.ngOnInit()
    })
  }
  @ViewChild(PatientCompleteHistoryDocComponent) patientHistory !: PatientCompleteHistoryDocComponent

  goBack(){
    this.router.navigate(['doctor-dashboard'])
  }
}
