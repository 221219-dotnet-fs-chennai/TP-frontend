import { Component, ViewChild,OnInit,Inject } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { AppointmentServiceService } from 'src/app/services/appointment-service/appointment-service.service';
import { AppointmentDoctor } from 'src/app/models/appointmentServiceModel';
import { Guid } from 'guid-typescript';
import { localStorageToken } from '../../../patient/show-doctors/localstorage.token';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  constructor(private router: Router, private auth:AuthService, private appointmentService : AppointmentServiceService,
    @Inject(localStorageToken) private localStorage : any){}
  today = new Date()
  longText='string'
  step = 0;

  appointmentdoctor : AppointmentDoctor[] = [];

  getAppointmentId(app_id : Guid|undefined){

    this.localStorage.setItem('app_id for nurse',app_id);



  }

  ngOnInit(): void {
    this.auth.user$.subscribe((data) => {
      this.nurseName = data?.email?.split("@")[0]
    });

    this.appointmentService.getAppointmentsByStatusOne()
    .subscribe({
      next:(appointments) =>{
      this.appointmentdoctor = appointments;
      console.log(this.appointmentdoctor)
      },
      error : (response) => {
        console.log(response);
      }


    });
  }
  nurseName !: string | undefined

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  navigateToViewHistory(){
    this.router.navigate(['view-patient-history'])
  }
  navigateToUpdate(){
    this.router.navigate(['update-patient-info'])
  }

  appointments:appointmentdetails[] = [{
    name:"ajaz",
    details:"good"
  },
  {
    name:"cb",
    details:"good"
  }
]
}

export interface appointmentdetails{
  name : string,
  details : string
}
