import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationComponent implements OnInit{
  
  constructor(private route: Router) {}


  title = "Notification component"
  hidden = false;
  notificationBadge !: number;
  panelOpenState = false;
  showFiller = false;
  viewSidebar = true;
  totalPatients  !: number;
  date = new Date();
  history = false;
  healthRecord = false;
  basicDetails = false;

  hideAll(){
    this.history = false;
    this.healthRecord = false;
    this.basicDetails = false;
  }


  ngOnInit() {
    this.totalPatients = this.patients.length;
    this.notificationBadge = this.appointments.length;
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  enableSidebar() {
    this.route.navigate(['appointments'])
  }

  toggleHistory(){
    if(this.history == false)
      this.history = true;
    else
      this.history = false;
    this.healthRecord = false;
    this.basicDetails = false;
  }

  toggleHealthRecord(){
    if(this.healthRecord == false)
      this.healthRecord = true;
    else
      this.healthRecord = false;
    this.history = false;
    this.basicDetails = false;
  }

  toggleBasicDetails(){
    if(this.basicDetails == false)
      this.basicDetails = true;
    else
      this.basicDetails = false;
    this.history = false;
    this.healthRecord = false;
  }



   patients : Patient[] = [{ 
    id : "1",
    name : "Patient 1",
    gender : "Male",
    History : `this is patient 1's history<br>
    this is patient 1's history<br>
    this is patient 1's history<br>
    this is patient 1's history
    this is patient 1's history
    this is patient 1's history
    this is patient 1's history`
  },
  {
    id : "2",
    name : "Patient 2",
    gender : "Male",
    History : `this is patient 1's history
    this is patient 1's history
    this is patient 1's history
    this is patient 1's history`
  },
  {
    id : "3",
    name : "Patient 3",
    gender : "Male",
    History : `this is patient 1's history
    this is patient 1's history
    this is patient 1's history`
  }]


  appointments : Appointment[] = [{
    id : "AP-1",
    name : "Hannah",
    gender : "female",
    date : "23/02/2000"
  },
  {
    id : "AP-2",
    name : "Clay",
    gender : "male",
    date : "23/02/2000"
  },
  {
    id : "AP-2",
    name : "Clay",
    gender : "male",
    date : "23/02/2000"
  },
  {
    id : "AP-2",
    name : "Clay",
    gender : "male",
    date : "23/02/2000"
  },
  {
    id : "AP-3",
    name : "Justin",
    gender : "others",
    date : "23/02/2000"
  }]


}

export interface Patient{
  id : string
  name  : string,
  gender : string,
  History : string
}

export interface Appointment{
  id : string
  name : string
  gender : string
  date : string
}
