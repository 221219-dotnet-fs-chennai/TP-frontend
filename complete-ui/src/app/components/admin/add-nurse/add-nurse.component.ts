import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Nurse } from './nurse';
import { Router } from '@angular/router';
import { NurseService } from './nurse.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-nurse',
  templateUrl: './add-nurse.component.html',
  styleUrls: ['./add-nurse.component.css']
})
export class AddNurseComponent implements OnInit{
  constructor(private router: Router, private fb : FormBuilder, private service : NurseService) {
  }
  ngOnInit(): void {
    this.nurseForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email : ['', [Validators.required, Validators.email]],
      phone_no: ['']
    })
  }
  isLoading = true
  nurse !: Nurse
  nurseForm!: FormGroup;
  createNurse(){
    console.log(this.nurseForm.getRawValue())
    this.service.addNurse(this.nurseForm.getRawValue()).subscribe((data) => {
      console.log(data.status)
      if(data.status != 400 || data.status != 502){
        this.nurse = data
        this.isLoading = false
        window.alert("Added!")
      }else{
        window.alert("something went wrong, try after some time.")
      }
    })
  }
  matcher = new MyErrorStateMatcher();
  goBack(){
    this.router.navigate(['admin-dashboard'])
  }
}
