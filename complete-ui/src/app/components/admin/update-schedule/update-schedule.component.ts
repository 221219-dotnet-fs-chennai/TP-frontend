import {SelectionModel} from '@angular/cdk/collections';
import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
// import { ConsoleReporter } from 'jasmine';
import { Schedule } from '../../../schedule';
import { AvailabilityService } from '../add-schedule/availability.service';

export interface PeriodicElement {
  name: string;
  position: number;
  specialisation : string;
  day : number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Mike', specialisation: "Cardiology", day : 0},
  {position: 2, name: 'John', specialisation: "Cardiology", day : 0},
  {position: 3, name: 'Josh', specialisation: "Cardiology", day : 0},
  {position: 4, name: 'Mat', specialisation: "Cardiology", day : 0}
];

@Component({
  selector: 'app-update-schedule',
  templateUrl: './update-schedule.component.html',
  styleUrls: ['./update-schedule.component.css']
})
export class UpdateScheduleComponent implements OnInit {

  constructor(private schedule : AvailabilityService) {}

  currentDate = new Date();
  weekDate !: Date;
  allNotSelected !: boolean;
  checked !: number[];
  dayName !: string;

  schedules : Schedule[] = [{
    doctorId : "0024ef20-8067-b43c-98c4-99486e793ceb",
    Monday : 0,
    Tuesday : 0,
    Wednesday : 0,
    Thursday : 0,
    Friday : 0,
    Saturday : 0,
    Sunday : 0
  },{
    doctorId : "5c2ac33e-a085-4d36-76c0-3417df45fa42",
    Monday : 0,
    Tuesday : 0,
    Wednesday : 0,
    Thursday : 0,
    Friday : 0,
    Saturday : 0,
    Sunday : 0
  },{
    doctorId : "2610c4cb-1c0b-d0f8-f47d-3952dd71c278",
    Monday : 0,
    Tuesday : 0,
    Wednesday : 0,
    Thursday : 0,
    Friday : 0,
    Saturday : 0,
    Sunday : 0
  },{
    doctorId : "74759321-8d28-a3d3-b5b8-3ffd32276af2",
    Monday : 0,
    Tuesday : 0,
    Wednesday : 0,
    Thursday : 0,
    Friday : 0,
    Saturday : 0,
    Sunday : 0
  }]

  ngOnInit() {
    this.weekDate = new Date(this.currentDate.getTime() + 604800000);
    this.allNotSelected = false
    this.checked = []
  }

  

  displayedColumns: string[] = ['position', 'name', 'specialisation', 'select'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  updateSchedule() {
    let dayNum = this.currentDate.getDay()
    let i 
    switch(dayNum){
      case 0 :
        console.log("Entered sunday");
        for(i = 0; i<ELEMENT_DATA.length ; i++)
          this.schedules[i].Sunday = ELEMENT_DATA[i].day
          console.log(i)
        break
      case 1 :
        for(i = 0; i<ELEMENT_DATA.length ; i++)
          this.schedules[i].Monday = ELEMENT_DATA[i].day
        break
      case 2 :
        for(i = 0; i<ELEMENT_DATA.length ; i++)
          this.schedules[i].Tuesday = ELEMENT_DATA[i].day
        break
      case 3 :
        for(i = 0; i<ELEMENT_DATA.length ; i++)
          this.schedules[i].Wednesday = ELEMENT_DATA[i].day
        break
      case 4 :
        for(i = 0; i<ELEMENT_DATA.length ; i++)
          this.schedules[i].Thursday = ELEMENT_DATA[i].day
        break
      case 5 :
        for(i = 0; i<ELEMENT_DATA.length ; i++)
          this.schedules[i].Friday = ELEMENT_DATA[i].day
        break
      case 6 :
        for(i = 0; i<ELEMENT_DATA.length ; i++)
          this.schedules[i].Saturday = ELEMENT_DATA[i].day
        break
    }
      this.schedule.UpdateDaySchedule(dayNum, this.schedules).subscribe(data => console.log(data));
  }
}
