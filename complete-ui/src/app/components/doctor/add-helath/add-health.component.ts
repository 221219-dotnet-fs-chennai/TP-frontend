import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddhealthservService } from './service/addhealthserv.service';
import { Guid } from 'guid-typescript';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-health',
  templateUrl: './add-health.component.html',
  styleUrls: ['./add-health.component.css']
})
export class AddHealthComponent {
  constructor(private router: Router,private hserv:AddhealthservService,private fg:FormBuilder, private activatedRoute: ActivatedRoute){}
    
  
  // newDate = new Date(this.formatedDate);
  patientName !: string 
  // P_id !: Guid
  // A_id !: Guid

  healthform !: FormGroup
  testForm !: FormGroup
  drugForm !: FormGroup
  isLoading = false
  ngOnInit(): void {

    let formatedDate = new Date().toISOString().slice(0,10)
    console.log(formatedDate)
    let P_id : Guid = Guid.create()
    let A_id : Guid = Guid.create()
    this.activatedRoute.params.subscribe((data) => {
      this.patientName = data['name'];
      P_id = data['PID']
      A_id = data['AID']
    })
    
    //Drug Form
    this.drugForm = this.fg.group({
      Health_Id : P_id.toString(),
      Appointment_Id : A_id.toString(),
      Drugs : ['', [Validators.required]],
      Quantity : ['', [Validators.required]]
    })

    //Test From
    this.testForm = this.fg.group({
      Health_Id : P_id.toString(),
      Appointment_Id : A_id.toString(),
      Test : ['', [Validators.required]],
      result : ['', [Validators.required]]
    })

    //health from
    this.healthform = this.fg.group({
      date_Time: formatedDate,
      Patient_Id: P_id.toString(),
      Doctor_Id : window.localStorage.getItem("Doctor"),
      Appointment_Id : A_id.toString(),
      Conclusion : ['',[Validators.required]]
    })
  }

  submitHealth(){
    // console.log(this.healthform)
    this.isLoading = true
    this.hserv.saveHealth(this.healthform.getRawValue()).subscribe((res) => {
      if(res.status == 400 || res.status == 401 || res.status == 503){
        window.alert("something went wrong")
        this.isLoading = false
      }
      else if(res){
        window.alert("Added")
        this.isLoading = false
      }
      else{
        this.isLoading = false
      }
    })
  }

  SubmitTest(){
    this.isLoading = true
    this.hserv.savetest(this.testForm.getRawValue()).subscribe((res)=>{
      if(res.status == 400 || res.status == 401 || res.status == 503){
        window.alert("something went wrong")
        this.isLoading = false
      }
      else if(res){
        window.alert("Added")
        this.isLoading = false
      }
      else{
        this.isLoading = false
      }
    })
  }

  SubmitDrugs(){
    this.isLoading = true
    // console.log(this.drugForm.getRawValue())
    this.hserv.savemedical(this.drugForm.getRawValue()).subscribe((res)=>{
      if(res.status == 400 || res.status == 401 || res.status == 503){
        window.alert("something went wrong")
        this.isLoading = false
      }
      else if(res){
        window.alert("Added")
        this.isLoading = false
      }
    })
  }

  navToDashboard(){
    this.router.navigate(['doctor-dashboard', window.localStorage.getItem('DoctorName'), window.localStorage.getItem('Doctor')])
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  AddHealth(){
    if (this.healthform.valid) {

      this.hserv.saveHealth(this.healthform.getRawValue()).subscribe((data) =>{
        console.warn(data);
      })
      
    }
    if (this.healthform.valid) {

      this.hserv.savetest(this.healthform.getRawValue()).subscribe((data) =>{
        console.warn(data);
      })
      
    }
    if (this.healthform.valid) {

      this.hserv.savemedical(this.healthform.getRawValue()).subscribe((data) =>{
        console.warn(data);
      })
      
    }
    else {
      // show error message
      console.log(this.healthform);
      console.log('Invalid form');
    }
    console.log(this.healthform.getRawValue())

  }
  // AddMedical(){
  //   else {
  //     // show error message
  //     console.log(this.healthform);
  //     console.log('Invalid form');
  //   }
  //   console.log(this.healthform.getRawValue())

  // }
  // AddHealth(){
  //   else {
  //     // show error message
  //     console.log(this.healthform);
  //     console.log('Invalid form');
  //   }
  //   console.log(this.healthform.getRawValue())

  // }
}
