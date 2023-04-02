import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompleteHistoryComponent } from '../complete-history/complete-history.component';

@Component({
  selector: 'app-history-patient-view',
  templateUrl: './history-patient-view.component.html',
  styleUrls: ['./history-patient-view.component.css']
})
export class HistoryPatientViewComponent implements OnInit {
  constructor(private router : Router, private route : ActivatedRoute){}
  goBack(){
    this.router.navigate(['patient-dashboard'])
  }
  @ViewChild(CompleteHistoryComponent) history!:CompleteHistoryComponent
  ngOnInit(): void {
     this.route.params.subscribe(param=>{
      console.log(param['id'])
    })
  }
}
