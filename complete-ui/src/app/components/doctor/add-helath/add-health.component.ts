import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddhealthservService } from './service/addhealthserv.service';

@Component({
  selector: 'app-add-health',
  templateUrl: './add-health.component.html',
  styleUrls: ['./add-health.component.css']
})
export class AddHealthComponent {
  date: string;
  constructor(private router: Router,private hserv:AddhealthservService,private fg:FormBuilder,
    private activatedRoute: ActivatedRoute){
    this.date = new Date().toISOString().slice(0, 16);
  }

  patientName !: string 
  

  healthform !: FormGroup

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((data) => {
      this.patientName = data['name'];
    })

    this.healthform = this.fg.group({
      patient_Id: "p12334",
      doctor_Id : "D34765",
      appointment_Id : "app15",
      date_Time: this.date,
      health_Id : "p67435",
      conclusion : ['',[Validators.required]],
      test: ['', [Validators.required]],
      result : ['', [Validators.required]],
      drugs : ['', [Validators.required]]
    })
  }

  navToDashboard(){
    this.router.navigate(['doctor-dashboard'])
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
