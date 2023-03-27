import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterLoginService, UserLogin } from './register-login.service';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class RegisterComponent implements OnInit{
  constructor(private router : Router, private fb : FormBuilder, private service : RegisterLoginService){}
  isLoggedIn = true // TO-DO for hidding logout button
  registerForm !: FormGroup
  // LoginForm !: FormGroup
  isLoading = false
  // created !: Date
  
  ngOnInit(): void {
    window.localStorage.clear()
    this.registerForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      age:['',[Validators.required,Validators.pattern("^[0-9]+$")]],
      gender : ['', [Validators.required,Validators.pattern("^(male|female|other|Male|Female|Other)$")]],
      email : ['', [Validators.required, Validators.email]],
      pasword: ['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$")]],  
      phone: ['',[Validators.required, Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]],
      adressLine:['',[Validators.required,Validators.pattern("^.{5,}$")]],
      city:['',[Validators.required,Validators.pattern("^[A-Za-z]+$")]],
      state:['',[Validators.required,Validators.pattern("^[A-Za-z]+$")]],
      created : new Date().toLocaleDateString('en-US').toString()
    })
    // this.LoginForm = this.fb.group({
    //   loginId : Guid.create().toString(),
    //   email : ['', [Validators.required, Validators.email]],
    //   password:['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$")]]
    // })
  }
  
  checkUser(){
    this.isLoading = true
    this.service.getUser(this.registerForm.getRawValue().email, this.registerForm.getRawValue().pasword)
      .subscribe((data) => {
        console.log(data)
        if(data.status == 400){
          window.localStorage.setItem("pEmail", this.registerForm.getRawValue().email)
          window.localStorage.setItem("pPassword", this.registerForm.getRawValue().pasword)
          window.alert("click ok continue")
          this.isLoading = false
        }
        else if(data == 1){
          window.alert("Account with this email already exists, please Login!")
          this.router.navigate(['/login'])
          console.log(data)
          this.isLoading = false
        }
      })
  }
  login(){
    let loginUser : UserLogin = {
      email : this.registerForm.getRawValue().email,
      password: this.registerForm.getRawValue().pasword
    }
    this.isLoading = true
    console.log(this.registerForm.getRawValue());
    this.service.addNewLogin(loginUser).subscribe(data => {
      // if(data.status == 400 || data.status == 502) {
      //   this.isLoading = false
      //   window.alert("something went wrong, try again")
      // }
      // if(data == 302){
      //   window.alert("Account with this email already exists, please Login!")
      //   this.router.navigate(['/login'])
      //   console.log(data)
      //   this.isLoading = false
        
      // }
      if(data != 302){
        window.alert("Click ok to continue")
        // window.localStorage.setItem("pEmail", data.email)
        // window.localStorage.setItem("pPassword", data.password)
        this.isLoading = false
      }
    }) 
  }

  registration(){
    this.isLoading = true
    console.log(this.registerForm.getRawValue())
    this.service.addNewUser(this.registerForm.getRawValue()).subscribe((data : any) =>{
      if(data.status == 400) {
        this.isLoading = false
        window.alert("Something went wrong")
      }
      else if(data.status != 400){
        this.isLoading = false
        window.alert("added!")
        this.router.navigate(['/login'])
      }
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

