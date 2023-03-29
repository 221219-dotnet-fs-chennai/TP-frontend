import { Component,OnInit } from '@angular/core';
import { Appointment } from '../notification/notification.component';
import { Router } from '@angular/router';
import { AppointmentServiceService } from 'src/app/services/appointment-service/appointment-service.service';
import { AppointmentDoctor } from 'src/app/models/appointmentServiceModel';
import { Guid } from 'guid-typescript';
import { PatientInfoService } from 'src/app/services/patient-info.service';
import { PatientInfo } from '../../login.service';
import { PatientAppointmentInfo } from 'src/app/services/patient-info.service';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-appointment-requests',
  templateUrl: './appointment-requests.component.html',
  styleUrls: ['./appointment-requests.component.css']
})
export class AppointmentRequestsComponent implements OnInit {

  constructor(private router : Router, private appointmentService : AppointmentServiceService,
    private patientInfoService : PatientInfoService){}


  appointmentdoctor : AppointmentDoctor[] = [];

  doctorId : string | null = window.localStorage.getItem('Doctor');
  
  appointments !: AppointmentDoctor[]

  patientInfos !: PatientInfo[]

  patientAppointmentInfo : PatientAppointmentInfo[] = []


  ngOnInit(): void {
    this.appointmentService.getAppointmentsByStatus(0).subscribe((data) => {
      this.appointmentdoctor = data
      this.patientInfoService.getAllPatientInfos().subscribe((response) => {
        console.log(response)
        data.forEach(appo => {
          response.forEach(pati => {
            console.log(pati.patId)
            if(appo.patientId == pati.patId.toString() && appo.doctorId == window.localStorage.getItem('Doctor')) {
              this.patientAppointmentInfo.push({
                appointment : appo,
                patient : pati
              })
              console.log("pushed");
            }
          })
        })
      });
      console.log(this.patientAppointmentInfo)
      console.log(data);
    });
  }


    // this.appointmentService.getAppointmentsByDoctorId('0245b75e-2398-4a8d-8617-44fa42f534c1')
    // .subscribe({
    //   next:(appointments) =>{
    //   this.appointmentdoctor = appointments;
    //   console.log(this.appointmentdoctor)
    //   },
    //   error : (response) => {
    //     console.log(response);
    //   }
    // });


  updateStatusByDoctor(appointment_id : Guid|undefined, _status : number){
    this.appointmentService.updateStatusByDoctor(appointment_id,_status)
    .subscribe({
      next : (appointment) => {
        console.log(appointment);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

  navToDashboard(){
    this,this.router.navigate(['doctor-dashboard'])
  }
}
