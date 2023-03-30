import { Component } from '@angular/core';
import { Doctor } from 'src/app/components/admin/add-doctor/doctor';
import { Appointment } from 'src/app/components/doctor/notification/notification.component';
import { patientinfo } from 'src/app/models/patientinfomodel';
import { AppointmentServiceService } from 'src/app/services/appointment-service/appointment-service.service';
import { PatientInfoService } from 'src/app/services/patient-info.service';
import { AvailabilityService } from 'src/app/components/patient/availability.service';
import { AppointmentDoctor } from 'src/app/models/appointmentServiceModel';
import { PatientInfo } from 'src/app/components/login.service';
import { Guid } from 'guid-typescript';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pick-appointments',
  templateUrl: './pick-appointments.component.html',
  styleUrls: ['./pick-appointments.component.css']
})
export class PickAppointmentsComponent {
  constructor(private appointmentService : AppointmentServiceService,
    private patientInfoService : PatientInfoService,
    private doctorsService : AvailabilityService,
    private router : Router) {}

    completeAppointments : CompleteAppointment[] = []

    pat !: PatientInfo
    doc !: Doctor

  ngOnInit() {
    this.appointmentService.getAppointmentsByStatus(1).subscribe((appointments) => {
      console.log(appointments);
        this.patientInfoService.getAllPatientInfos().subscribe((patients) => {
          console.log(patients);
          this.doctorsService.getAllDoctors().subscribe((doctors) => {
            console.log(doctors);
            appointments.forEach(appo => {
              patients.forEach(patient => {
                if(patient.patId.toString() == appo.patientId){
                  this.pat = patient
                }
              })
              doctors.forEach(doctor => {
                if(doctor.id == appo.doctorId){
                  this.doc = doctor
                }
              })
              this.completeAppointments.push({
                appointment : appo,
                patient : this.pat,
                doctor : this.doc
              })
            })
          })
        })
    })
  }

  navToNurseDashBoard(){
    this.router.navigate(['nurse-dashboard']);
  }

  pickAppointment(appointmentId : Guid | undefined) {
    this.appointmentService.updateNurseIdByNurse(appointmentId,window.localStorage.getItem('Nurse')).subscribe((data) => {
      console.log(data);
    })
    // window.location.reload()
    console.log("reloaded")
  }
}

export interface CompleteAppointment{
  appointment : AppointmentDoctor
  patient : PatientInfo
  doctor : Doctor
}
