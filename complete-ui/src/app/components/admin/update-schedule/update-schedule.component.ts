import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
// import { ConsoleReporter } from 'jasmine';
// import { Schedule } from '../../../schedule';
import { Schedule } from '../add-schedule/availability.service';
import { AvailabilityService } from '../add-schedule/availability.service';
import { GetAllDoctorsService } from './get-all-doctors.service';
import { Doctor } from '../add-doctor/doctor';
import { InfoComponent } from './info/info.component';
import { MatDialog } from '@angular/material/dialog';

export interface UpdateDoctor {
  name: string;
  position: number;
  specialisation: string;
  day: number;
}

//  ELEMENT_DATA: UpdateDoctor[] = [
//   {position: 1, name: 'Mike', specialisation: "Cardiology", day : 0},
//   {position: 2, name: 'John', specialisation: "Cardiology", day : 0},
//   {position: 3, name: 'Josh', specialisation: "Cardiology", day : 0},
//   {position: 4, name: 'Mat', specialisation: "Cardiology", day : 0}
// ];

@Component({
  selector: 'app-update-schedule',
  templateUrl: './update-schedule.component.html',
  styleUrls: ['./update-schedule.component.css'],
})
export class UpdateScheduleComponent implements OnInit {
  constructor(
    private schedule: AvailabilityService,
    private getAllService: GetAllDoctorsService,
    private dialog : MatDialog
  ) {}

  currentDate = new Date();
  weekDate!: Date;
  allNotSelected!: boolean;
  checked!: number[];
  dayName!: string;

  schedules: Schedule[] = []

  doctors: Doctor[] = [];

  // doctors : Doctor[] = [{
  //   name : "xcv",
  //   email : "sdffggh",
  //   phoneNo : 234665432,
  //   imgUrl : "sdgfe",
  //   specialization : 'hii',
  //   experience : 23,
  //   gender : 'male'
  // },
  // {
  //   name : "xcv",
  //   email : "sdffggh",
  //   phoneNo : 234665432,
  //   imgUrl : "sdgfe",
  //   specialization : 'hii',
  //   experience : 23,
  //   gender : 'male'
  // }]

  ELEMENT_DATA: UpdateDoctor[] = [];
  dataSource = new MatTableDataSource<UpdateDoctor>();
  displayedColumns!: string[];
  selection = new SelectionModel<UpdateDoctor>();
  isLoading = true
  ngOnInit() {
    this.weekDate = new Date(this.currentDate.getTime() + 604800000);
    this.allNotSelected = false;
    this.checked = [];
    this.getAllService.getAll().subscribe((data) => {
      this.doctors = data;
      this.isLoading = false
      console.log(this.doctors);
      this.doctors.forEach((doctor) => {
        this.ELEMENT_DATA.push({
          position: 1,
          name: `${doctor.name}`,
          specialisation: `${doctor.specialization}`,
          day: 0,
        });
        this.schedules.push({doctorId : `${doctor.id}`, monday: 0, tuesday : 0, wednesday:0, thursday:0, friday:0, saturday:0, sunday:0})
      });
      console.log(this.schedules);

      this.displayedColumns = ['name', 'specialisation', 'select'];
      this.dataSource = new MatTableDataSource<UpdateDoctor>(
        this.ELEMENT_DATA
      );
      this.selection = new SelectionModel<UpdateDoctor>(true, []);
      
    });
  }

  updateSchedule() {
    let dayNum = this.currentDate.getDay();
    let i;
    switch (dayNum) {
      case 0:
        console.log('Entered sunday');
        for (i = 0; i < this.ELEMENT_DATA.length; i++)
          this.schedules[i].sunday = this.ELEMENT_DATA[i].day;
        console.log(i);
        break;
      case 1:
        for (i = 0; i < this.ELEMENT_DATA.length; i++)
          this.schedules[i].monday = this.ELEMENT_DATA[i].day;
        break;
      case 2:
        for (i = 0; i < this.ELEMENT_DATA.length; i++)
          this.schedules[i].tuesday = this.ELEMENT_DATA[i].day;
        break;
      case 3:
        for (i = 0; i < this.ELEMENT_DATA.length; i++)
          this.schedules[i].wednesday = this.ELEMENT_DATA[i].day;
        break;
      case 4:
        for (i = 0; i < this.ELEMENT_DATA.length; i++)
          this.schedules[i].thursday = this.ELEMENT_DATA[i].day;
        break;
      case 5:
        for (i = 0; i < this.ELEMENT_DATA.length; i++)
          this.schedules[i].friday = this.ELEMENT_DATA[i].day;
        break;
      case 6:
        for (i = 0; i < this.ELEMENT_DATA.length; i++)
          this.schedules[i].saturday = this.ELEMENT_DATA[i].day;
        break;
    }
    this.schedule
      .UpdateDaySchedule(dayNum, this.schedules)
      .subscribe((data) => console.log(data));
  }


  openInfoDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(InfoComponent, {
      width: '550px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
