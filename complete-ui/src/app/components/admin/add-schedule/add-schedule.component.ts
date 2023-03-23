import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { AvailabilityService } from './availability.service'
import { Guid } from 'guid-typescript';
import { ScheduleComponent } from './schedule/schedule.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar/snackbar.component';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css'],
})
export class AddScheduleComponent implements OnInit{

  constructor(public dialogRef: MatDialogRef<AddScheduleComponent>, private _formBuilder: FormBuilder,
    private available : AvailabilityService, private _snackBar: MatSnackBar) {}

    show = true
    toggle(){
      this.show = !this.show
    }
  selectedDate = new Date();
  readonly selectedDates : Date[] = [];
  monday : number = 0
  tuesday : number = 0
  wednesday : number = 0
  thursday : number = 0
  friday : number = 0
  saturday : number = 0
  sunday : number = 0
  

  ngOnInit(): void {
    let i = 0;
    for (i = 0; i <= 6; i++) {
      this.selectedDate = new Date(this.selectedDate.getTime() + 86400000)
      this.selectedDates.push(this.selectedDate);
    }
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  x : number = 0
  toggleDayValue(day : number) : number {
    if(!day) {
      this.x++
      return 1
    }
    else{
      this.x--
      return 0
    }
  }

  updateDay(date : Date) {
    let day = date.getDay()
    switch(day){
      case 0 :
        this.sunday = this.toggleDayValue(this.sunday)
        console.log("sun - " + this.sunday)
        break
      case 1 :
        this.monday = this.toggleDayValue(this.monday)
        console.log("mon - " + this.monday)
        break
      case 2 :
        this.tuesday = this.toggleDayValue(this.tuesday)
        console.log("tue - " + this.tuesday)
        break
      case 3 :
        this.wednesday = this.toggleDayValue(this.wednesday)
        console.log("wed - " + this.wednesday)
        break
      case 4 :
        this.thursday = this.toggleDayValue(this.thursday)
        console.log("thur - " + this.thursday)
        break
      case 5 :
        this.friday = this.toggleDayValue(this.friday)
        console.log("fri - " + this.friday)
        break
      case 6 :
        this.saturday = this.toggleDayValue(this.saturday)
        console.log("sat - " + this.saturday)
        break
    }
  }


  UpdateSchedule() {
    let i : string = Guid.create().toString();
    let sch  : Schedule = {
      doctorId : i,
      Monday: this.monday,
      Tuesday: this.tuesday,
      Wednesday: this.wednesday,
      Thursday: this.thursday,
      Friday: this.friday,
      Saturday: this.saturday,
      Sunday : this.sunday
    }
    console.log(sch);
    this.available.AddSchedule(sch).subscribe(data => console.log(data));
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 3000,
    });
  }

}

export interface Schedule {
  doctorId : string,
  Monday: number;
  Tuesday: number;
  Wednesday: number;
  Thursday: number;
  Friday: number;
  Saturday: number;
  Sunday : number;
}