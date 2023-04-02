import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { BookAppointmentComponent } from '../../book-appointment/book-appointment.component';
import { PatientInfo } from '../../login.service';
import { LoginService } from '../../login.service';
import { CompleteInfoService } from '../complete-history/complete-info.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css'],
})
export class PatientDashboardComponent implements OnInit, AfterViewInit {
  panelOpenState = false;
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private patService: LoginService,
  ) {}

  ngAfterViewInit(): void {
  }
  
  
  patientInfo!: PatientInfo[]
  P_name!: string | undefined
  p_id !: Guid | undefined
  isLoading = false
  
  ngOnInit(): void {
    this.P_name = window.localStorage.getItem('pEmail')?.split('@')[0];
    let email = window.localStorage.getItem('pEmail');
    this.patService.getPatientByEmail(email).subscribe((data) => {
      this.patientInfo = data
      this.p_id = (data[0].patId)
      // console.log(this.p_id)
      window.localStorage.setItem('patientId', String(data[0].patId));
    })
  }

  show = false;
  toggle() {
    this.show = !this.show;
  }

  NavToPatHistory(p_id : Guid){
    this.router.navigate(['patient/view/complete/history/', String(p_id)])
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
