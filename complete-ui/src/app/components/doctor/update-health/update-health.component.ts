import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompleteInfoService } from '../../patient/complete-history/complete-info.service';
import {FormBuilder, Validators} from '@angular/forms';
import { Medication, UpdateHealthService } from './update-health.service';

@Component({
  selector: 'app-update-health',
  templateUrl: './update-health.component.html',
  styleUrls: ['./update-health.component.css']
})
export class UpdateHealthComponent {

  constructor(private completeInfo : CompleteInfoService, private activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder, private route:Router, private updateHealth : UpdateHealthService) {}

  appointment_Id : string = "ee93e5d4-e48e-4ecd-acd4-c92b953d3fd1"
  patId : string = "c56b5473-4549-45d2-932b-28fe6c87ea12"

  patientId !: string
  completeHistory : any

  currentHealth : any

  firstFormGroup = this._formBuilder.group({
    drug: ['', Validators.required],
    quantity : ['', Validators.required]
  });

  medication !: Medication 


  secondFormGroup = this._formBuilder.group({
    test: ['', Validators.required],
    result: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    suggestion: ['', Validators.required],
  });
  isLinear = false;


  ngOnInit() {
    this.activatedRoute.params.subscribe((data) => {
      this.patientId = data['pid'];
    })
    this.getPatientHealthRecord();
  }

  getPatientHealthRecord(){
    this.completeInfo.getCompleteInfo(this.patId).subscribe((response) => {
      this.completeHistory = response.body
      if(this.completeHistory != null){
        this.completeHistory.forEach((history : any) => {
          console.log(history.basic[0].appointment_Id, "    ", this.appointment_Id)
          if(history.basic[0].appointment_Id == this.appointment_Id){
            console.log(history);
            this.currentHealth = history
          }
        })
      }
    })
  }

  updateMedicine(aid : string) {
    this.medication = {
      id : this.patId,
      health_Id : this.patId,
      appointment_Id : aid,
      drugs : this.firstFormGroup.getRawValue().drug,
      quantity : this.firstFormGroup.getRawValue().quantity
    }
    
    this.updateHealth.updateMedication(aid, this.medication).subscribe((data) => {
      if(data == null) {
        console.log("Data modified");
      }
      else{
        console.log("Error occured");
      }
    })
  }

  navToDashboard(){
    this.route.navigate(['doctor-dashboard', window.localStorage.getItem('DoctorName'), window.localStorage.getItem('Doctor')]);
  }

}
