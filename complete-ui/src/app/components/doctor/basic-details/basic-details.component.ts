import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent {
  basicDetails : BasicDetails = {
    bp : "142/96 npm",
    heartRate : 72,
    spO2 : "123/32",
    height: "string",
    weight: "string",
    temperature: "string",
    bloodGroup: "string",
    health_Id: "string",
    allergy: []
  }

  ngOnInit(){

  }

}


export interface BasicDetails{
  bp? : string
  heartRate? : number
  spO2? : string
  height? : string,
  weight? : string,
  temperature? : string,
  bloodGroup? : string,
  health_Id? : string,
  allergy: string[]
}