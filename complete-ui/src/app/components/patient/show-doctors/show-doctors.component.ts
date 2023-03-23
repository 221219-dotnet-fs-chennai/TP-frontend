import { Component, OnInit, Inject } from '@angular/core';
import { Schedule } from '../../../schedule';
import { AvailabilityService } from '../availability.service';
import { localStorageToken } from './localstorage.token';
import { BookingAlertComponent } from '../booking-alert/booking-alert.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-show-doctors',
  templateUrl: './show-doctors.component.html',
  styleUrls: ['./show-doctors.component.css']
})
export class ShowDoctorsComponent implements OnInit {

  constructor(private schedule: AvailabilityService, @Inject(localStorageToken) private localStorage : any,
   public dialog: MatDialog) {}
  schedules : Schedule[] = [] 
  getDoctorIds(event : Schedule[]) {
    event.forEach(ele => this.schedules.push(ele));
  }

  ngOnInit(): void {
    // service call to get all doctors
    // this.schedule.GetDaySchedule(this.localStorage.getItem('selectedDay')).subscribe((data) => {
    //   this.schedules = data.sort();
    //   console.log(this.schedules);
    // })

    this.schedules = [{
      doctorId : 'doctor-1',
      Monday : 1,
      Tuesday: 0,
      Wednesday : 1,
      Thursday : 0,
      Friday: 0,
      Saturday : 0,
      Sunday : 1
    },{
      doctorId : 'doctor-2',
      Monday : 1,
      Tuesday: 0,
      Wednesday : 1,
      Thursday : 0,
      Friday: 0,
      Saturday : 0,
      Sunday : 1
    },{
      doctorId : 'doctor-3',
      Monday : 1,
      Tuesday: 0,
      Wednesday : 1,
      Thursday : 0,
      Friday: 0,
      Saturday : 0,
      Sunday : 1
    },{
      doctorId : 'doctor-4',
      Monday : 1,
      Tuesday: 0,
      Wednesday : 1,
      Thursday : 0,
      Friday: 0,
      Saturday : 0,
      Sunday : 1
    },{
      doctorId : 'doctor-5',
      Monday : 1,
      Tuesday: 0,
      Wednesday : 1,
      Thursday : 0,
      Friday: 0,
      Saturday : 0,
      Sunday : 1
    },{
      doctorId : 'doctor-6',
      Monday : 1,
      Tuesday: 0,
      Wednesday : 1,
      Thursday : 0,
      Friday: 0,
      Saturday : 0,
      Sunday : 1
    }]
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(BookingAlertComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
