import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UpdatebasicrecordService } from './services/updatebasicrecord.service';
import { FormBuilder } from '@angular/forms';
import { localStorageToken } from '../../../patient/show-doctors/localstorage.token';
import { AppointmentsComponent } from '../appointments/appointments.component';
import { AppointmentServiceService } from 'src/app/services/appointment-service/appointment-service.service';

@Component({
  selector: 'app-updateinfo',
  templateUrl: './updateinfo.component.html',
  styleUrls: ['./updateinfo.component.css']
})

export class UpdateinfoComponent implements OnInit {
  date: string;
  localStorage: any;
  constructor(private router: Router, private Updatebasicrecord: UpdatebasicrecordService, private fb: FormBuilder, private appoint: AppointmentServiceService) {
    this.date = new Date().toISOString().slice(0, 16);
  }

  // toppings = new FormControl('');
  // toppingList: string[] = ['Eyes', 'Nose', 'Skin', 'Ear', 'Mouth', 'Legs'];

  updateform !: FormGroup


  // updateform = this.fb.group({
  //   bp: new FormControl('', [Validators.required,Validators.pattern('^[1-9][0-9]{1,2}\\/[1-9][0-9]{1,2}$')]),
  //   heart_Rate: new FormControl('', [Validators.required,Validators.pattern('^(6[0-9]|[7-9][0-9]|1[01][0-9]|120)$')]),
  //   spO2: new FormControl('', [Validators.required,Validators.pattern('^(9[0-9]|100)%$')]),
  //   height: new FormControl('',[Validators.required,Validators.pattern('^(6[0-9]|[7-9][0-9]|1[01][0-9]|250)$')]),
  //   weight: new FormControl('', [Validators.required, Validators.pattern('^(6[0-9]|[7-9][0-9]|1[01][0-9]|350)$')]),
  //   temperature: new FormControl('', [Validators.required, Validators.pattern('^([3-9][0-9]|[1-9][0-9]{2})\.?[0-9]?$')]),
  //   bloodGroup: new FormControl('',[Validators.required])
  // });

  ngOnInit(): void {
    this.updateform = this.fb.group({
      patient_Id: "p67435",
      nurse_Id: window.localStorage.getItem('Nurse'),
      appointment_Id: "app15",
      date_Time: this.date,
      bp: ['', [Validators.required, Validators.pattern('^[1-9][0-9]{1,2}\\/[1-9][0-9]{1,2}$')]],
      heart_Rate: ['', [Validators.required, Validators.pattern('^(6[0-9]|[7-9][0-9]|1[01][0-9]|120)$')]],
      spO2: ['', [Validators.required, Validators.pattern('^([0-9][0-9]|100)$')]],
      height: ['', [Validators.required, Validators.pattern('^([1-5]?[0-9][0-9])$')]],
      weight: ['', [Validators.required, Validators.pattern('^([1-5]?[0-9][0-9])$')]],
      temperature: ['', [Validators.required, Validators.pattern('^([3-9][0-9]|[1-9][0-9]{2})\.?[0-9]?$')]],
      bloodGroup: ['', [Validators.required]],
      health_Id: "p67435",
      allergy: ['', [Validators.required]]
    });
  }




  update() {
    if (this.updateform.valid) {
      this.Updatebasicrecord.saveUser(this.updateform.getRawValue()).subscribe((result) => {
        console.warn(result);
      })
    } if (this.updateform.valid) {

      this.Updatebasicrecord.savealergy(this.updateform.getRawValue()).subscribe((data) => {
        console.warn(data);
      })

    } else {
      // show error message
      console.log(this.updateform);
      console.log('Invalid form');
    }
    console.log(this.updateform.getRawValue())
  }

  goBack() {
    this.router.navigate(['nurse-dashboard'])
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
