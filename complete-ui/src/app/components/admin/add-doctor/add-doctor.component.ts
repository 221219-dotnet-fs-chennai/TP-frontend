import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorServiceService } from './services/doctor-service.service';
import { Router } from '@angular/router';
import { AddScheduleComponent } from '../add-schedule/add-schedule.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css'],
})
export class AddDoctorComponent implements OnInit {

  constructor(private service : DoctorServiceService, private fb: FormBuilder, private router: Router,
    public dialog: MatDialog) {}
  ngOnInit(): void {
    this.doctorForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email : ['', [Validators.required, Validators.email]],
      gender : ['', [Validators.pattern("^(male|female|other|Male|Female|Other)$")]],
      specialization: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      imgUrl:['', Validators.pattern(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/)],
      experience: ['', [Validators.required, Validators.pattern("^[1-6][0-9]$")]],
      phoneNo: ['', Validators.pattern("^([6-9]\d{9})$")]
    })
  }
  doctorForm!: FormGroup;
  addDoctor(){
    console.log(this.doctorForm.getRawValue())
    this.service.addDoctor(this.doctorForm.getRawValue()).subscribe((data) => {
      console.log(data)
    })
  }
  navToAdminDash(){
    this.router.navigate(['admin-dashboard'])
  }
  show = false
  toggle(){
    this.show = !this.show
  } 

  openAddDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddScheduleComponent, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}