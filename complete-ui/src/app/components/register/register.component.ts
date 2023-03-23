import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  service: any;
  constructor(private router : Router, private fb : FormBuilder){}
  isLoggedIn = true // TO-DO for hidding logout button
  registerForm !: FormGroup
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$")]],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      phone: ['',[Validators.required, Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]],
      address:['',[Validators.required,Validators.pattern("^.{5,}$")]],
      //city:['',[Validators.required,Validators.pattern("^[A-Za-z]+$")]],
      //state:['',[Validators.required,Validators.pattern("^[A-Za-z]+$")]],
      age:['',[Validators.required,Validators.pattern("^[0-9]+$")]],
      gender : ['', [Validators.required,Validators.pattern("^(male|female|other|Male|Female|Other)$")]]
    })
  }
  registration(){
    console.log(this.registerForm.getRawValue())
    this.service.registration(this.registerForm.getRawValue()).subscribe((data : any) =>{
      console.log(data)
    })
  }
  hide = true;
  // email = new FormControl('', [Validators.required, Validators.email]);
  // name = new FormControl('',[Validators.required, Validators.min(3)])
  // phone = new FormControl('', [Validators.pattern('[]')])
  // address = new FormControl('', [Validators.min(5)])
  // selctedCity !: string
  // cities : City[] = [
  //   {value: 'Bangalore-0', viewValue:'Bangalore'},
  //   {value: 'Mumbai-1', viewValue:'Mumbai'},
  //   {value: 'Delhi-2', viewValue:'Delhi'},
  //   {value: 'Hydrabad-3', viewValue:'Hydrabad'},
  //   {value: 'Ahmedabad-4', viewValue:'Ahmedabad'},
  //   {value: 'Chennai-5', viewValue:'Chennai'},
  //   {value: 'Kolkata-6', viewValue:'Kolkata'},
  //   {value: 'Pune-7', viewValue:'Pune'},
  //   {value: 'Jaipur-8', viewValue:'Jaipur'},
  //   {value: 'Lucknow-9', viewValue:'Lucknow'},
  //   {value: 'Bhopal-10', viewValue:'Bhopal'},
  //   {value: 'Patna-12', viewValue:'Patna'},
  //   {value: 'Srinagar-13', viewValue:'Srinagar'},
  //   {value: 'Ranchi-14', viewValue:'Ranchi'},
  //   {value: 'Raipur-15', viewValue:'Raipur'},
  //   {value: 'Chandigarh-16', viewValue:'Chandigarh'},
  //   {value: 'Bhubaneswar-17', viewValue:'Bhubaneswar'},
  //   {value: 'Thiruvananthapuram-18', viewValue:'Thiruvananthapuram'},
  //   {value: 'Dehradun-19', viewValue:'Dehradun'},
  //   {value: 'Agartala-20', viewValue:'Agartala'},
  //   {value: 'Aizawl-21', viewValue:'Aizawl'},
  //   {value: 'Imphal-22', viewValue:'Imphal'},
  //   {value: 'Pondicherry-23', viewValue:'Pondicherry'},
  //   {value: 'Gandhinagar-24', viewValue:'Gandhinagar'},
  //   {value: 'Shimla-25', viewValue:'Shimla'},
  //   {value: 'Port Blair-26', viewValue:'Port Blair'},
  //   {value: 'Amaravati-27', viewValue:'Amaravati'},
  //   {value: 'Gangtok-28', viewValue:'Gangtok'},
  //   {value: 'Kochi-29', viewValue:'Kochi'},
  //   {value: 'Noida-30', viewValue:'Noida'},
  //   {value: 'Pune-31', viewValue:'Pune'},
  //   {value: 'Pune-33', viewValue:'Pune'},
  // ]
  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
  navToLogin(){
    this.router.navigate(['/login'])
  }
  NavigateToMain(){
    this.router.navigate([''])
  }
}
export interface City{
  value:string,
  viewValue:string
}

