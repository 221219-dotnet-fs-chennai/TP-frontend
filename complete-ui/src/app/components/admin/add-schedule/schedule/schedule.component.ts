import { Component, Inject } from '@angular/core';
import { AvailabilityService } from '../availability.service';
import { Schedule } from '../availability.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  constructor(private schedule : AvailabilityService) {}

  updateBox : boolean = false;
  
  currentDate : Date = new Date();
  weekDate !: Date; 
  awakeSchedule() {
    if(this.updateBox == false)
      this.updateBox = true;
    else 
      this.updateBox = false
    this.weekDate = new Date(this.currentDate.getTime() + 604800000);
  }

  dayUpdate : number = 0;
  UpdateDay() {
    this.dayUpdate = 1
  }

  UpdateSchedule() {
    let day = this.currentDate.getDay();
    let sch : Schedule[] = [{
      doctorId : "00-817d8db358ce32f76aa9c8d36eert",
      monday : (day == 1) ? this.dayUpdate : 0,
      tuesday : (day == 2) ? this.dayUpdate : 0,
      wednesday : (day == 3) ? this.dayUpdate : 0,
      thursday : (day == 4) ? this.dayUpdate : 0,
      friday : (day == 5) ? this.dayUpdate : 0,
      saturday : (day == 6) ? this.dayUpdate : 0,
      sunday : (day == 0) ? this.dayUpdate : 0,
    }];
    this.schedule.UpdateDaySchedule(day, sch).subscribe(data => console.log(data));
    this.updateBox = false;
  }
}

// export interface Schedule {
//   doctorId : string,
//   Monday: number;
//   Tuesday: number;
//   Wednesday: number;
//   Thursday: number;
//   Friday: number;
//   Saturday: number;
//   Sunday : number;
// }

export interface DialogData {
  animal: string;
  name: string;
}