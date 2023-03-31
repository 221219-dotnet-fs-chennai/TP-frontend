import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { BookAppointmentComponent } from '../../book-appointment/book-appointment.component';
import { PatientInfo } from '../../login.service';
import { LoginService } from '../../login.service';
import {
  BasicR,
  Drugs,
  HistoryService,
  TestR,
} from '../../patient-history/history.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css'],
})
export class PatientDashboardComponent implements OnInit {
  panelOpenState = false;
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private patService: LoginService,
    private history: HistoryService
  ) {}
  // openPopup(){
  //   // this.dialog.open(BookappointmentComponent)
  // }
  patientInfo!: PatientInfo;

  P_name!: string | undefined;
  basics: BasicR[] = [];
  test: TestR[] = [];
  drug: Drugs[] = [];
  isLoading = false;

  ngOnInit(): void {
    this.P_name = window.localStorage.getItem('pEmail')?.split('@')[0];
    let email = window.localStorage.getItem('pEmail');
    this.patService.getPatientByEmail(email).subscribe((data) => {
      window.localStorage.setItem('patientId', data[0].email);
      console.log(data[0].email)

      this.history.getBR(data[0].email).subscribe((data1) => {
        this.isLoading = true;
        data1.forEach((b) => {
          this.history
            .getMR(data[0].email, b.appointmentId)
            .subscribe((mData) => {
              this.isLoading = true;
              mData.forEach((m) => {
                if (m.appointmentId == b.appointmentId) {
                  this.drug = mData;
                  this.isLoading = false;
                }
              });
            });
          this.history
            .getTR(data[0].email, b.appointmentId)
            .subscribe((tData) => {
              this.isLoading = true;
              tData.forEach((t) => {
                if (t.appointmentId == b.appointmentId) {
                  this.test = tData;
                  this.isLoading = false;
                }
              });
            });
        });
      });
      // this.basics.forEach(b => {this.appoId = b.appointmentId})
      // console.log(this.appoId);
      // console.log(this.patientId);
    });
  }

  show = false;
  toggle() {
    this.show = !this.show;
  }

  // navToBookApp(){
  //   this.router.navigate(['book-appointment'])
  // }

  navToPatientProfile() {
    this.router.navigate(['/view-your-profile']);
  }
  logout() {
    this.router.navigate(['']);
  }
  viewMoreDetails() {
    this.router.navigate(['/view-complete-history']);
  }
  appointments: appointmentdetails[] = [
    { appointmentNo: 1, doctorName: 'Mike', date: new Date() },
    { appointmentNo: 2, doctorName: 'Jack', date: new Date() },
    { appointmentNo: 3, doctorName: 'John', date: new Date() },
  ];

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(BookAppointmentComponent, {
      width: '450px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

export interface appointmentdetails {
  appointmentNo: number;
  doctorName: string;
  date: Date;
}
