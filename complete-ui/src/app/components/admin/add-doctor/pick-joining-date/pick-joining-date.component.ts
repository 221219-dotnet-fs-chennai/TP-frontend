import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AddScheduleService } from '../services/add-schedule.service';
import { AddScheduleComponent } from '../../add-schedule/add-schedule.component';

@Component({
  selector: 'app-pick-joining-date',
  templateUrl: './pick-joining-date.component.html',
  styleUrls: ['./pick-joining-date.component.css']
})
export class PickJoiningDateComponent {
  date !: Date
  

  constructor(
    public dialogRef: MatDialogRef<PickJoiningDateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private service : AddScheduleService,
    public dialog: MatDialog
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  today :Date = new Date();
  getDate(){
    this.service.selectedDate = this.date
    console.log(this.date.toString())
  }
  openAddDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddScheduleComponent, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

export interface DialogData{
  date : Date
}
