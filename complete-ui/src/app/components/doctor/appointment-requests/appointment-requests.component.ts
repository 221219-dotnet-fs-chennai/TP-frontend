import { Component,OnInit } from '@angular/core';
import { Appointment } from '../notification/notification.component';
import { Router } from '@angular/router';
import { AppointmentServiceService } from 'src/app/services/appointment-service/appointment-service.service';
import { AppointmentDoctor } from 'src/app/models/appointmentServiceModel';
import { Guid } from 'guid-typescript';
@Component({
  selector: 'app-appointment-requests',
  templateUrl: './appointment-requests.component.html',
  styleUrls: ['./appointment-requests.component.css']
})
export class AppointmentRequestsComponent implements OnInit {

  constructor(private router : Router, private appointmentService : AppointmentServiceService){}


  appointmentdoctor : AppointmentDoctor[] = [];

  doctorId : string | null = window.localStorage.getItem('Doctor');
  
  appointments : AppointmentDoctor[] = []


  ngOnInit(): void {
    this.appointmentService.getAppointmentsByStatus(0).subscribe((data) => this.appointments = data)
    console.log(this.appointments)
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

  }

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
