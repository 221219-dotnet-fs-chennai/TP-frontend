import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, LOCALE_ID, NgIterable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { AppointmentPatient, AppointmentServiceService } from 'src/app/services/appointment-service/appointment-service.service';
import { AppointmentDoctor } from '../../../models/appointmentServiceModel';
import { localStorageToken } from '../../patient/show-doctors/localstorage.token';
import { DatePipe, formatDate } from '@angular/common';
import { PatientInfoService } from 'src/app/services/patient-info.service';
import { patientinfo } from 'src/app/models/patientinfomodel';
import { Guid } from 'guid-typescript';
import { BasicDetails } from '../basic-details/basic-details.component';
import { HistoryService } from '../../patient-history/history.service';
import { Doctor } from '../../admin/add-doctor/doctor';
import { DoctorService } from '../doctor.service';

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
    private patientinfo: PatientInfoService,
    private historyService: HistoryService,
    private doctorService : DoctorService,
    private activatedRoute : ActivatedRoute
  ) { }
  
  isLoading = false
  title = 'Notification component';
  hidden = false;
  notificationBadge: number = 0
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

  docName !: string
  docId !: string

  hideAll() {
    this.history = false;
    this.healthRecord = false;
    this.basicDetails = false;
  }

  logout() {
    window.localStorage.removeItem("Doctor")
    window.localStorage.removeItem("DocName")
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin,
      },
    });
  }

  // doctorName!: string | undefined;
  // doctorEmail!: string | undefined;

  navToViewHistory(id: Guid | undefined) {
    let AID : Guid = Guid.create()
    let name : string = ''
    this.patientByAppointments.forEach(pba => {
      if(pba.patient.patId == id) {
        name = pba.patient.fullname
        AID = pba.appointment.appointmentId
        // pba.appointment.forEach(appo => {
        //   if(appo.date == this.todayDate) {
        //     AID = appo.appointmentId
        //   }
        // })
      }
    })
    this.route.navigate(['patient-history-doctor-view', id, name]);
  }

  navToAddRecord(PID: Guid) {
    let AID: Guid = Guid.create()
    let name: string = ''
    this.patientByAppointments.forEach(pba => {
      if (pba.patient.patId == PID) {
        name = pba.patient.fullname
        AID = pba.appointment.appointmentId
      }
    })
    this.route.navigate(['add-patient-health', name, PID, AID]);
  }

  appointmentdoctor: AppointmentDoctor[] = [];
  todayAppointment: AppointmentDoctor[] = [];
  appointmentpatient!: string[] | undefined[];

  patientByAppointments: AppointmentPatient[] = []
  newAppPat: any[] = []
  doctorApp: any[] = []
  patientsInfo: patientinfo[] = [];
  appointments: AppointmentDoctor[] = []
  appId !: string
  
  patientBasicDetails !: BasicDetails | null
  basicDetailsLen : number = 0

  allregyLen : number = 0
  allbasicDetails : AllBasicDetails[] = []

  // doctorInfo !: Doctor



  ngOnInit() {
    // console.log(this.todayDate)
    this.notificationBadge = 0
    this.activatedRoute.params.subscribe((docParamData) => {
      this.docName = docParamData['name']
      this.docId = docParamData['docId']
      window.localStorage.setItem('DoctorName', this.docName);
    })
    // this.auth.user$.subscribe((data) => {
    //   this.doctorName = data?.email?.split('@')[0];
    //   this.doctorEmail = data?.email;
    //   this.doctorService.getDoctorByEmail(data?.email).subscribe((data) => {
    //     this.doctorInfo = {
    //       id : data.id,
    //       name : data.name,
    //       email : data.email,
    //       gender : data.gender,
    //       imgUrl : data.imgUrl,
    //       specialization : data.specialization,
    //       experience: data.experience,
    //       phoneNo: data.phoneNo
    //     }
    //     window.localStorage.setItem('Doctor', String(this.doctorInfo.id));
    //     window.localStorage.setItem('DoctorName', String(this.doctorInfo.name));
    //   })
    // });
    this.appointmentService
      .getAppointmentsByStatus(0)
      .subscribe((data) => {
        data.forEach(element => {
          if (element.doctorId == window.localStorage.getItem('Doctor')) {
            console.log("Badge increased");
            this.notificationBadge += 1;
          }
        })
        console.log(this.notificationBadge)
      });

    this.appointmentService.getAppointmentsByDoctorId(window.localStorage.getItem("Doctor"))
      .subscribe((AppByDocId) => {
        this.isLoading = true
        console.log("Inside appointments")
        console.log(AppByDocId)
        this.doctorApp.push({ AppByDocId })
        this.patientinfo.getAllPatientInfos().subscribe((patients) => {
          console.log("inside patients")
          console.log(patients)
          let pushedPatients : string[] = []
          AppByDocId.forEach(app => {
            // console.log(app.patientId)
            patients.forEach(pat => {
              this.appointments = []
              // console.log(pat.patId)
              let notExists : boolean = true;
              pushedPatients.forEach(ele => {
                if(ele == pat.patId.toString()){
                  notExists = false
                }
              })
              // console.log(app.patientId?.toString())
              // console.log(pat.patId.toString())
              console.log(app.date, "   ", this.todayDate, "   ", app.date == this.todayDate)
              if ((app.patientId?.toString() == pat.patId.toString() && (app.status == 3 || app.status == 4)) && (app.date == this.todayDate && notExists)) {
                AppByDocId.forEach(appo => {
                  if ((appo.patientId?.toString() == pat.patId.toString()) && (appo.status == 3 || appo.status == 4) && appo.date == this.todayDate)
                    this.appointments.push(appo)
                })
                this.appointments.forEach(patAppo => {
                this.patientByAppointments.push({
                  appointment: patAppo,
                  patient: pat
                })
                this.isLoading = false
                console.log(this.patientByAppointments)
                this.totalPatients = this.patientByAppointments.length;
              })
                pushedPatients.push(pat.patId.toString());
                console.log(pushedPatients)
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
    if (this.notificationBadge > 0)
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

  toggleBasicDetails(pid: Guid, aid: Guid) {
    console.log("pid : ", pid )
    console.log("aid : ", aid )
    this.patientBasicDetails = null
    this.allregyLen = 0
    console.log(this.patientBasicDetails)
    if (this.basicDetails == false) {
      this.basicDetails = true;
      this.historyService.getPatientBasicRecord(pid.toString(), aid.toString()).subscribe((data) => {
        this.basicDetailsLen = data.length
        if(this.basicDetailsLen > 0) {
        this.patientBasicDetails = data[0]
        this.allregyLen = this.patientBasicDetails.allergies.length
        }
        console.log(this.patientBasicDetails)
      })
    }
    else {
      this.basicDetails = false;
      this.patientBasicDetails = null
    }
    this.history = false;
    this.healthRecord = false;
  }
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


export interface AllBasicDetails{
  appoId : string
  basicHealth : BasicDetails
}