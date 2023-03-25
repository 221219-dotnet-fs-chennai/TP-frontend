import { Component, OnInit, Inject } from '@angular/core';
// import { Schedule } from '../../../schedule';
import { Schedule } from '../../admin/add-schedule/availability.service';
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
      monday : 1,
      tuesday: 0,
      wednesday : 1,
      thursday : 0,
      friday: 0,
      saturday : 0,
      sunday : 1
    },{
      doctorId : 'doctor-2',
      monday : 1,
      tuesday: 0,
      wednesday : 1,
      thursday : 0,
      friday: 0,
      saturday : 0,
      sunday : 1
    },{
      doctorId : 'doctor-3',
      monday : 1,
      tuesday: 0,
      wednesday : 1,
      thursday : 0,
      friday: 0,
      saturday : 0,
      sunday : 1
    },{
      doctorId : 'doctor-4',
      monday : 1,
      tuesday: 0,
      wednesday : 1,
      thursday : 0,
      friday: 0,
      saturday : 0,
      sunday : 1
    },{
      doctorId : 'doctor-5',
      monday : 1,
      tuesday: 0,
      wednesday : 1,
      thursday : 0,
      friday: 0,
      saturday : 0,
      sunday : 1
    },{
      doctorId : 'doctor-6',
      monday : 1,
      tuesday: 0,
      wednesday : 1,
      thursday : 0,
      friday: 0,
      saturday : 0,
      sunday : 1
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
