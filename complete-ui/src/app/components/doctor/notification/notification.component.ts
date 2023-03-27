import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { AppointmentServiceService } from 'src/app/services/appointment-service/appointment-service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationComponent implements OnInit{
  
  constructor(private route: Router, public auth : AuthService, @Inject(DOCUMENT) private doc: Document,
  private appointmentService : AppointmentServiceService) {}


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

  logout() {
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin,
      },
    });
  }

  doctorName !: string | undefined
  doctorEmail !: string | undefined

  navToViewHistory(){
    this.route.navigate(['view-complete-history-doc'])
  }
  navToAddRecord(name : string){
    this.route.navigate(['add-patient-health', name])
  }

  ngOnInit() {
    this.totalPatients = this.patients.length;
    // this.notificationBadge = this.appointments.length;
    this.appointmentService.getAppointmentsByStatus(0).subscribe((data) => this.notificationBadge = data.length)
    this.auth.user$.subscribe((data) => {
      this.doctorName = data?.email?.split("@")[0]
      this.doctorEmail = data?.email
    })
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  enableSidebar() {
    this.route.navigate(['appointment-requests'])
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
  },
  {
    id : "2",
    name : "Patient 2",
    gender : "Male",
  },
  {
    id : "3",
    name : "Patient 3",
    gender : "Male",
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
  gender : string
}

export interface Appointment{
  id : string
  name : string
  gender : string
  date : string
}
