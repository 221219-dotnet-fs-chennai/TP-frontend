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
import * as emailjs from 'emailjs-com';

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

  patientEmail : string = String(window.localStorage.getItem('pEmail'))


  ngOnInit(): void {
    this.appointmentService.getAppointmentsByStatus(0).subscribe((data) => {
      this.appointmentdoctor = data
      this.patientInfoService.getAllPatientInfos().subscribe((response) => {
        console.log(response)
        data.forEach(appo => {
          response.forEach(pati => {
            console.log(pati.patId.toString())
            console.log(appo.patientId)
            console.log(appo.patientId == pati.patId.toString() , "    " ,appo.doctorId == window.localStorage.getItem('Doctor'))
            if(appo.patientId == pati.patId.toString() && appo.doctorId == window.localStorage.getItem('Doctor')) {
              console.log("inside if")
              this.patientAppointmentInfo.push({
                appointment : appo,
                patient : pati
              })
              console.log(this.appointmentdoctor);
              console.log(this.patientAppointmentInfo)
              console.log("pushed")
            }
          })
        })
      })
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
    this.router.navigate(['doctor-dashboard', window.localStorage.getItem('DoctorName'), window.localStorage.getItem('Doctor')])
  }


  Approve(patientName : string, email : string , date : string | undefined): void {
    emailjs.send('service_mhx68zj', 'template_nh6fw5n', {
      to_email: email,
      message: `Your Doctor appointment for ${date} is accepted`,
      reply_to: 'bhanu',
      from_name:'Perseverance Hospital',
      to_name: patientName
    },'RgiBYLCzXYUk7ASBx').then(
      (response: emailjs.EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      }
    );
  }

  Decline(patientName : string, email : string , date : string | undefined): void {
    emailjs.send('service_mhx68zj', 'template_nh6fw5n', {
      to_email: email,
      message: `Your Doctor appointment for ${date} is rejected`,
      reply_to: 'bhanu',
      from_name:'Perseverance Hospital',
      to_name: patientName
    },'RgiBYLCzXYUk7ASBx').then(      
      (response: emailjs.EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      }
      );
  }
}
