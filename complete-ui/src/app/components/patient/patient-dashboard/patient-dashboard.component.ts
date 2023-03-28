import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { BookAppointmentComponent } from '../../book-appointment/book-appointment.component';
import { PatientInfo } from '../../login.service';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit{
  panelOpenState = false;
  constructor (private dialog:MatDialog, private router:Router,
    private patService : LoginService) {}
  // openPopup(){
    //   // this.dialog.open(BookappointmentComponent)
    // }
  patientInfo !: PatientInfo
  patientId !: Guid

    P_name !: string | undefined
    ngOnInit(): void {
     this.P_name = window.localStorage.getItem("pEmail")?.split("@")[0];
     let email = window.localStorage.getItem("pEmail")
     this.patService.getPatientByEmail(email).subscribe((data) => {
        window.localStorage.setItem('patientId',data[0].patId.toString())
        // console.log(this.patientId)
     });
    }

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
      width: '450px',
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

