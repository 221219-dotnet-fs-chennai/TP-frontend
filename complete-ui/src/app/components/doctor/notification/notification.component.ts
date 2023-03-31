import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, LOCALE_ID, NgIterable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { AppointmentPatient, AppointmentServiceService } from 'src/app/services/appointment-service/appointment-service.service';
import { AppointmentDoctor } from '../../../models/appointmentServiceModel';
import { localStorageToken } from '../../patient/show-doctors/localstorage.token';
import { DatePipe, formatDate } from '@angular/common';
import { PatientInfoService } from 'src/app/services/patient-info.service';
import { patientinfo } from 'src/app/models/patientinfomodel';
import { Guid } from 'guid-typescript';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  constructor(
    private route: Router,
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document,
    @Inject(localStorageToken) private localStorage: any,
    private datePipe: DatePipe,
    @Inject(LOCALE_ID) private locale: string,
    private appointmentService: AppointmentServiceService,
    private patientinfo: PatientInfoService
  ) {}

  title = 'Notification component';
  hidden = false;
  notificationBadge : number = 0
  panelOpenState = false;
  showFiller = false;
  viewSidebar = true;
  totalPatients!: number;
  date = new Date();
  history = false;
  healthRecord = false;
  basicDetails = false;
  todayDate: string = formatDate(new Date(), 'dd-MMM-yyyy', this.locale);
  todayDateDb: string = '';

  hideAll() {
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

  doctorName!: string | undefined;
  doctorEmail!: string | undefined;

  navToViewHistory(id: Guid | undefined) {
    this.route.navigate(['patient-history-doctor-view', id]);
  }

  navToAddRecord(PID: Guid) {
    let AID : Guid = Guid.create()
    let name : string = ''
    this.patientByAppointments.forEach(pba => {
      if(pba.patient.patId == PID) {
        name = pba.patient.fullname
        pba.appointment.forEach(appo => {
          if(appo.date == this.todayDate) {
            AID = appo.appointmentId
          }
        })
      }
    })
    this.route.navigate(['add-patient-health',name, PID, AID]);
  }

  appointmentdoctor: AppointmentDoctor[] = [];
  todayAppointment: AppointmentDoctor[] = [];
  appointmentpatient!: string[] | undefined[];

  patientByAppointments : AppointmentPatient[] = []
  newAppPat : any[] = []
  doctorApp : any[] = []
  patientsInfo: patientinfo[] = [];
  appointments : AppointmentDoctor[] = []
  appId !: string

  ngOnInit() {
    this.appointmentService
      .getAppointmentsByStatus(0)
      .subscribe((data) => {
        data.forEach(element => {
          if(element.doctorId == window.localStorage.getItem('Doctor')){
            console.log("Badge increased");
            this.notificationBadge += 1;
          }
        })
        console.log(this.notificationBadge)
      });
    this.auth.user$.subscribe((data) => {
      this.doctorName = data?.email?.split('@')[0];
      this.doctorEmail = data?.email;
    });
    
    this.appointmentService.getAppointmentsByDoctorId(window.localStorage.getItem("Doctor"))
      .subscribe((AppByDocId) => {
        this.doctorApp.push({AppByDocId})
        this.patientinfo.getAllPatientInfos().subscribe((patients)=>{
          AppByDocId.forEach(app =>{
            patients.forEach(pat=>{
              this.appointments = []

              if( app.patientId?.toString() == pat.patId.toString() && (app.status == 3 || app.status == 4) && app.date == this.todayDate){
                AppByDocId.forEach(appo => {
                  if((appo.patientId?.toString() == pat.patId.toString()) && (appo.status == 3 || appo.status == 4))
                  this.appointments.push(appo)
                })
                this.patientByAppointments.push({
                  appointment : this.appointments,
                  patient : pat
                })
            this.totalPatients = this.patientByAppointments.length;
              }
            })
          })
        })
      })
      console.log(this.patientByAppointments);
      console.log(this.newAppPat);
      
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  enableSidebar() {
    if(this.notificationBadge > 0)
      this.route.navigate(['appointment-requests']);
  }

  toggleHistory() {
    if (this.history == false) this.history = true;
    else this.history = false;
    this.healthRecord = false;
    this.basicDetails = false;
  }

  toggleHealthRecord() {
    if (this.healthRecord == false) this.healthRecord = true;
    else this.healthRecord = false;
    this.history = false;
    this.basicDetails = false;
  }

  toggleBasicDetails() {
    if (this.basicDetails == false) this.basicDetails = true;
    else this.basicDetails = false;
    this.history = false;
    this.healthRecord = false;
  }

  patients: Patient[] = [
    {
      id: '1',
      name: 'Patient 1',
      gender: 'Male',
    },
    {
      id: '2',
      name: 'Patient 2',
      gender: 'Male',
    },
    {
      id: '3',
      name: 'Patient 3',
      gender: 'Male',
    },
  ];
}

export interface Patient {
  id: string;
  name: string;
  gender: string;
}

export interface Appointment {
  id: string;
  name: string;
  gender: string;
  date: string;
}

export interface PatientId {
  patientId?: string;
}
