import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookAppointmentComponent } from '../../book-appointment/book-appointment.component';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent {
  panelOpenState = false;
  constructor (private dialog:MatDialog, private router:Router) {}
  // openPopup(){
  //   // this.dialog.open(BookappointmentComponent)
  // }

  show = false

  toggle(){
    this.show = !this.show
  }

  // navToBookApp(){
  //   this.router.navigate(['book-appointment'])
  // }

  navToPatientProfile(){
    this.router.navigate(['/view-your-profile'])
  }
  logout(){
    this.router.navigate([''])
  }
  viewMoreDetails(){
    this.router.navigate(['/view-complete-history'])
  }
  appointments : appointmentdetails[] = [
    {appointmentNo:1, doctorName:'Mike',date: new Date()},
    {appointmentNo:2, doctorName:'Jack',date: new Date()},
    {appointmentNo:3, doctorName:'John',date: new Date()},
  ]

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(BookAppointmentComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

export interface appointmentdetails{
  appointmentNo : number,
  doctorName : string,
  date : Date
}

