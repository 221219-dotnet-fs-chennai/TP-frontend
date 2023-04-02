import { Component, ViewChild,OnInit,Inject } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { AppointmentServiceService } from 'src/app/services/appointment-service/appointment-service.service';
import { AppointmentDoctor, AppointmentDoctorOne } from 'src/app/models/appointmentServiceModel';
import { Guid } from 'guid-typescript';
import { localStorageToken } from '../../../patient/show-doctors/localstorage.token';
import { PatientInfo } from 'src/app/components/login.service';
import { PatientInfoService } from 'src/app/services/patient-info.service';
import { LOCALE_ID } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  constructor(private router: Router, private auth:AuthService, private appointmentService : AppointmentServiceService,
    @Inject(localStorageToken) private localStorage : any, private patientInfoService: PatientInfoService,
    @Inject(LOCALE_ID) private locale: string, private route : ActivatedRoute){}
  today = new Date()
  longText='string'
  step = 0;

  appointmentdoctor : AppointmentDoctor[] = [
   
  ];

  nursePatientAppointments : NursePatientAppointments[] = []

  todayDate: string = formatDate(new Date(), 'dd-MMM-yyyy', this.locale);
  

  getAppointmentId(app_id : Guid|undefined){

    this.localStorage.setItem('app_id for nurse',app_id);

  }

  appointmentsByNursePatient : AppointmentDoctor[] = []
  isLoading = true;
  ngOnInit(): void {
    this.auth.user$.subscribe((data) => {
      window.localStorage.setItem('NurseName', String(data?.email?.split("@")[0]))
      // this.nurseName = window.localStorage.getItem('NurseName')
    })
    this.route.params.subscribe(data=>{
      this.nurseName = data['name']
    })

    this.appointmentService.getAppointmentsByStatus(3).subscribe((appointmentsBy3) => {
      this.patientInfoService.getAllPatientInfos().subscribe((patients) => {
        appointmentsBy3.forEach(appo => {
          patients.forEach(pat => {
            if(appo.nurseId == window.localStorage.getItem('Nurse') && appo.patientId == pat.patId.toString() && appo.date == this.todayDate && appo.status == 3){
              this.nursePatientAppointments.push({
                appointment : appo,
                patient : pat
              })
            }
          })
        })
      })
    })
    console.log(this.nursePatientAppointments)
    
    this.appointmentService.getAppointmentsByStatus(3).subscribe((data) => {
      this.appointmentsByNursePatient = data
    })

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

  nurseName !: string | null

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  navigateToViewHistory(id : string | null | undefined){
    this.router.navigate(['patient-history-nurse-view', id])
  }
  navigateToUpdate(id : string | null | undefined, AID : Guid | undefined){
    this.router.navigate(['update-patient-info', id, AID])
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

export interface NursePatientAppointments{
  appointment : AppointmentDoctorOne
  patient : PatientInfo
}
