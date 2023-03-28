import { Component, OnInit, Inject } from '@angular/core';
// import { Schedule } from '../../../schedule';
import { Schedule } from '../../admin/add-schedule/availability.service';
import { AvailabilityService, DoctorSchedule } from '../availability.service';
import { localStorageToken } from './localstorage.token';
import { BookingAlertComponent } from '../booking-alert/booking-alert.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-doctors',
  templateUrl: './show-doctors.component.html',
  styleUrls: ['./show-doctors.component.css']
})
export class ShowDoctorsComponent implements OnInit {

  constructor(private schedule: AvailabilityService, @Inject(localStorageToken) private localStorage : any,
   public dialog: MatDialog, private activatedRoute: ActivatedRoute) {}
  schedules : Schedule[] = [] 
  getDoctorIds(event : Schedule[]) {
    event.forEach(ele => this.schedules.push(ele));
  }

  doctorSchedule : DoctorSchedule[] = [] 
  ngOnInit(): void {
    let day
    this.activatedRoute.params.subscribe((data) => day = data['day'])
    this.schedule.GetDaySchedule(window.localStorage.getItem('selectedDay')).subscribe((data) => {
      this.schedules = data;
      console.log(this.schedules);
      this.schedule.getAllDoctors().subscribe((docs)=>{
        console.log(docs)
        data.forEach(sch =>{
          docs.forEach(doc => {
            if(sch.doctorId == doc.id){
              this.doctorSchedule.push({
                Doctor : doc,
                schedule : sch 
              })
            }
          });
        })
      })
    })
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, doctor_Id : string | undefined): void {
    this.dialog.open(BookingAlertComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    window.localStorage.setItem('doctorId', `${doctor_Id}`);
    console.log(doctor_Id)
  }
}
