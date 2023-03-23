import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-health',
  templateUrl: './add-health.component.html',
  styleUrls: ['./add-health.component.css']
})
export class AddHealthComponent {
  constructor(private router: Router){}
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
}
