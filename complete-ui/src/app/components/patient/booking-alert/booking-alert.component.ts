import { Component,Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarBookingComponent } from '../show-doctors/snackbar-booking/snackbar-booking.component';
import { AppointmentDoctor } from 'src/app/models/appointmentServiceModel';
import { localStorageToken } from '../../patient/show-doctors/localstorage.token';
import { AppointmentServiceService } from 'src/app/services/appointment-service/appointment-service.service';
@Component({
  selector: 'app-booking-alert',
  templateUrl: './booking-alert.component.html',
  styleUrls: ['./booking-alert.component.css']
})
export class BookingAlertComponent {
  constructor(private _snackBar: MatSnackBar, @Inject(localStorageToken) private localStorage : any, private appointmentService : AppointmentServiceService) {}

    openSnackBar() {
      this._snackBar.openFromComponent(SnackbarBookingComponent, {
        duration: 3000,
      });
    }

    addAppointment : AppointmentDoctor = {

      doctorId : '0245b75e-2398-4a8d-8617-44fa42f534c1',
      patientId : '1245b75e-2398-4a8d-8617-44fa42f534c6',
      nurseId : '2245b75e-2398-4a8d-8617-44fa42f534c6',
      status : 0,
      date : this.localStorage.getItem('appointmentDate')


    }

    addAppointmentByPatient(){
      console.log(this.addAppointment)
      this.appointmentService.addAppointmentByPatient(this.addAppointment)
      .subscribe({
        next : (appointment) =>{
          console.log(appointment);
        },
        error: (response) => {
          console.log(response);
        }
      });
    }
}
