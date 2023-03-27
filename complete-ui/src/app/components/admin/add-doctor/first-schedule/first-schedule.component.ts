import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddScheduleService } from '../services/add-schedule.service';
import { DialogData } from '../pick-joining-date/pick-joining-date.component';
import { AddScheduleComponent } from '../../add-schedule/add-schedule.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-first-schedule',
  templateUrl: './first-schedule.component.html',
  styleUrls: ['./first-schedule.component.css']
})
export class FirstScheduleComponent {
  date !: Date;

  constructor(
    public dialogRef: MatDialogRef<FirstScheduleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private service : AddScheduleService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private schedule : AddScheduleService
  ) {}

  emailErrorMsg : boolean = false
  box : boolean = true

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



  ngOnInit(): void {
    this.doctorForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
    })
  }
  doctorForm!: FormGroup;

  getDoctorId() {
    this.schedule.AddSchedule(this.doctorForm.getRawValue().email).subscribe((data) => {
      if(data != "404"){
        window.localStorage.setItem("doctorId", JSON.stringify(data.id));
        this.openAddDialog('20ms', '20ms');
        this.box = false;
      }
      else{
        // window.alert("Email does not exist ");
        this.emailErrorMsg = true
      }
    });
  }

}
