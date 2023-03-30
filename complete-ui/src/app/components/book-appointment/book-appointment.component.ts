// import { createInjectableType } from '@angular/compiler';

import { Component, Input, OnInit, Output, EventEmitter, Inject, LOCALE_ID } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AvailabilityService } from '../patient/availability.service';
// import { Schedule } from 'src/app/schedule';
import { Schedule } from '../admin/add-schedule/availability.service';
import { Router } from '@angular/router';
import { localStorageToken } from '../patient/show-doctors/localstorage.token';
import { DatePipe, formatDate } from '@angular/common';
@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BookAppointmentComponent>, private schedule: AvailabilityService,
    private route: Router, @Inject(localStorageToken) private localStorage : any, private datePipe: DatePipe, @Inject(LOCALE_ID) private locale: string) { }

  // @Output() doctorIds = new EventEmitter();


  boolDay : boolean = true;

  passDoctorIds() {
    // this.doctorIds.emit(this.schedules);
    this.route.navigate(['show-doctors', window.localStorage.getItem('selectedDay')]);
  }


  selectedDay !: string;


  i !: number
  ipdate: Date = new Date();
  dates !: Date[];
  show = false;
  schedules: Schedule[] = [];



  ngOnInit() {
    if (this.show == false)
      this.show = true
    else
      this.show = false

    this.dates = []
    this.dates.push(this.ipdate)
    for (this.i = 0; this.i <= 5; this.i++) {
      this.ipdate = new Date(this.ipdate.getTime() + 86400000)
      this.dates.push(this.ipdate);
    }
    console.log(this.dates);
    this.ipdate = new Date();
  }

  appointmentDate !: string;

  selectedDate !: Date;

  valChange(event: any) {
    console.log(event.value);
    this.selectedDay = event.value;
    this.selectedDate = event.value;
    this.appointmentDate = formatDate(this.selectedDate,'dd-MMM-yyyy',this.locale);
    console.log(this.appointmentDate);
    switch(this.selectedDate.getDay()){
      case 0:
        this.selectedDay = "Sunday"
        break
      case 1:
        this.selectedDay = "Monday"
        break
      case 2:
        this.selectedDay = "Tuesday"
        break
      case 3:
        this.selectedDay = "Wednesday"
        break
      case 4:
        this.selectedDay = "Thursday"
        break
      case 5:
        this.selectedDay = "Friday"
        break
      case 6:
        this.selectedDay = "Saturday"
        break
    }
    console.log(this.selectedDay);
    this.localStorage.setItem('selectedDay', this.selectedDay);
    this.localStorage.setItem('appointmentDate', this.appointmentDate);
    this.boolDay = false;
  }


  }
