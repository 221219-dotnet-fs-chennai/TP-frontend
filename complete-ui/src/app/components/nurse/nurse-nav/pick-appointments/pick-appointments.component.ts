import { Component } from '@angular/core';
import { Doctor } from 'src/app/components/admin/add-doctor/doctor';
import { Appointment } from 'src/app/components/doctor/notification/notification.component';
import { patientinfo } from 'src/app/models/patientinfomodel';
import { AppointmentServiceService } from 'src/app/services/appointment-service/appointment-service.service';
import { PatientInfoService } from 'src/app/services/patient-info.service';
import { AvailabilityService } from 'src/app/components/patient/availability.service';
import { AppointmentDoctor } from 'src/app/models/appointmentServiceModel';
import { PatientInfo } from 'src/app/components/login.service';

@Component({
  selector: 'app-pick-appointments',
  templateUrl: './pick-appointments.component.html',
  styleUrls: ['./pick-appointments.component.css']
})
export class PickAppointmentsComponent {
  constructor(private appointmentService : AppointmentServiceService,
    private patientInfoService : PatientInfoService,
    private doctorsService : AvailabilityService) {}

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
                if(doctor.id == appo.patientId){
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
}

export interface CompleteAppointment{
  appointment : AppointmentDoctor
  patient : PatientInfo
  doctor : Doctor
}
