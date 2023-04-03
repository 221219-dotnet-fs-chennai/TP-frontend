import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdatebasicrecordService } from './services/updatebasicrecord.service';
import { FormBuilder } from '@angular/forms';
import { localStorageToken } from '../../../patient/show-doctors/localstorage.token';
import { AppointmentsComponent } from '../appointments/appointments.component';
import { AppointmentServiceService } from 'src/app/services/appointment-service/appointment-service.service';
import { Guid } from 'guid-typescript';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-updateinfo',
  templateUrl: './updateinfo.component.html',
  styleUrls: ['./updateinfo.component.css']
})

export class UpdateinfoComponent implements OnInit {
  // date !: string;
  localStorage: any;
  constructor(private router: Router, private Updatebasicrecord: UpdatebasicrecordService, private fb: FormBuilder, 
    private appoint: AppointmentServiceService, private route: ActivatedRoute, public dialog: MatDialog) {
  }

  updateform !: FormGroup

  patId !: string
  appId !: string

  appointmentId !: Guid

  disbleAllergy: boolean = true

  date = new Date().toISOString().slice(0, 16);

  form1 !: form

  ngOnInit(): void {

    this.route.params.subscribe((data) => {
      this.patId = data['id']
      this.appId = data['AID']
      this.appointmentId = data['AID']
    })

    this.updateform = this.fb.group({
      patient_Id: this.patId,
      nurse_Id: window.localStorage.getItem('Nurse'),
      appointment_Id: this.appId,
      date_Time: this.date,
      bp: ['', [Validators.required, Validators.pattern('^[1-9][0-9]{1,2}\\/[1-9][0-9]{1,2}$')]],
      heart_Rate: ['', [Validators.required, Validators.pattern('^(6[0-9]|[7-9][0-9]|1[01][0-9]|120)$')]],
      spO2: ['', [Validators.required, Validators.pattern('^([0-9][0-9]|100)$')]],
      height: ['', [Validators.required, Validators.pattern('^([1-5]?[0-9][0-9])$')]],
      weight: ['', [Validators.required, Validators.pattern('^([1-5]?[0-9][0-9])$')]],
      temperature: ['', [Validators.required, Validators.pattern('^([3-9][0-9]|[1-9][0-9]{2})\.?[0-9]?$')]],
      bloodGroup: ['', [Validators.required]],
      health_Id: this.patId,
      allergy: ['', []]
    });
  }


  allergies = new FormControl('');

  toppingList: string[] = ['peanuts', 'tree nuts', 'dairy', 'soy', 'gluten', 'egg', 'fish', 'shellfish', 'corn', 'sesame', 'coconut', 'mustard'];



  update() {

    console.log(this.updateform);
    if (this.updateform.valid) {
      this.Updatebasicrecord.saveUser(this.updateform.getRawValue()).subscribe((result) => {
        console.log(result);
        if (result) {
          this.form1 = {
            patient_Id: result.patient_Id,
            nurse_Id: result.nurse_Id,
            appointment_Id: result.appointment_Id,
            date_Time: result.date_Time.toString(),
            bp: result.bp,
            heart_Rate: result.heart_Rate.toString(),
            spO2: result.spO2,
            height: result.height,
            weight: result.weight,
            temperature: result.temperature,
            bloodGroup: result.bloodGroup,
            health_Id: result.patient_Id,
            allergy: ''
          }
          this.disbleAllergy = false
        }
      })
    }
    else {
      // show error message
      console.log(this.updateform);
      alert('Invalid form');
    }
    console.log(this.updateform.getRawValue())
  }


  display() {
    console.log(this.allergies.value?.at(1))
  }

  updateAllergy() {
    let count : number = 0
    if (this.updateform.valid) {
      console.log(this.allergies.value?.at(0))
      let len = Number(this.allergies.value?.length)
      console.log(this.allergies.value)
      for (let i = 0; i < len; i++) {
        this.form1.allergy = this.allergies.value?.at(i)
        console.log(this.allergies.value?.at(i))
        console.log(this.form1)
        this.Updatebasicrecord.savealergy(this.form1).subscribe((data) => {
          console.log(data);
          if(data){
            count++
          }
        })
      }
        this.appoint.updateStatusByDoctor(this.appointmentId, 4).subscribe((data) => {
          console.log(data)
        })
        this.openDialog('20ms','20ms');

    }
    else {
      // show error message
      console.log(this.updateform);
      alert('Invalid form');
    }
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  goBack() {
    this.router.navigate(['nurse-dashboard', window.localStorage.getItem('NurseName'), window.localStorage.getItem('Nurse') ]);
  }

  get bp() {
    return this.updateform.get('bp');
  }

  get heart_Rate() {
    return this.updateform.get('heart_Rate');
  }

  get spO2() {
    return this.updateform.get('spO2');
  }

  get height() {
    return this.updateform.get('height');
  }

  get weight() {
    return this.updateform.get('weight');
  }

  get allergy() {
    return this.updateform.get('allergy');
  }

  get temperature() {
    return this.updateform.get('temperature');
  }

  get bloodGroup() {
    return this.updateform.get('bloodGroup');
  }

  getErrorMessage(formControlName: string) {
    if (this.updateform.get(formControlName)?.hasError('required')) {
      return 'This field is required';
    } else if (this.updateform.get(formControlName)?.hasError('pattern')) {
      if (formControlName === 'bp') {
        return 'Please enter a valid blood pressure reading in the format of systolic/diastolic (e.g. 120/80)';
      } else if (formControlName === 'heart_Rate') {
        return 'Please enter a valid heart rate reading between 60 and 120 bpm';
      } else if (formControlName === 'spO2') {
        return 'Please enter a valid SpO2 reading between 90% and 100%';
      } else if (formControlName === 'height') {
        return 'Please enter a valid height reading like 126.8';
      } else if (formControlName === 'weight') {
        return 'Please enter a valid height reading like 90';
      } else if (formControlName === 'temperature') {
        return 'Please enter a valid height reading like 37.1';
      }
      else if (formControlName === 'allergy') {
        return 'Please select allergy';
      } else {
        return 'Invalid input';
      }
    }
    return '';
  }
}




export interface form {
  patient_Id: string,
  nurse_Id: string | null,
  appointment_Id: string,
  date_Time: string,
  bp: string,
  heart_Rate: string,
  spO2: string,
  height: string,
  weight: string,
  temperature: string,
  bloodGroup: string,
  health_Id: string,
  allergy: string | undefined
}