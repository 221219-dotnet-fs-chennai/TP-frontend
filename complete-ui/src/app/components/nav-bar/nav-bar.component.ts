import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private router : Router, private fb:FormBuilder, public auth : AuthService,
    private loginService : LoginService, @Inject(DOCUMENT) private doc: Document){    }
  loginForm !: FormGroup
  isLoading = false
  flag = false
  ngOnInit(){
    this.loginForm = this.fb.group({
      email:[''],
      password:['']
    })
    this.auth.user$.subscribe((profile) => {
      switch (profile?.email?.split('@')[1]) {
        case 'admin.com':
          // console.log("jkhjk");
          // this.router.navigate(['/dashboard']);
          if(this.loginService.login(profile?.email?.split('@')[1])){
            this.router.navigate(['/admin-dashboard']);
          }
          break;
        case 'doctor.com':
          if(this.loginService.login(profile?.email?.split('@')[1])){
            this.loginService.getDoctorByEmail(profile?.email).subscribe((data) => {
              // console.log(data)
              let json = JSON.stringify(data)
              let jjson = JSON.parse(json)
              window.localStorage.setItem("Doctor", jjson.id)
              this.router.navigate(['/doctor-dashboard', jjson.name, jjson.id]);
            })
          }
          break;
        case 'nurse.com':
          if(this.loginService.login(profile?.email?.split('@')[1])){
            this.loginService.getNurseByEmail(profile?.email).subscribe((data) =>{
              console.log(data)
              let json = JSON.stringify(data)
              let jjson = JSON.parse(json)
              // console.log(jjson);
              window.localStorage.setItem("Nurse", jjson[0].id)
              this.router.navigate(['/nurse-dashboard', jjson[0].name, jjson[0].id])
            })
          }
          break;
        default:
          this.router.navigate(['/notfound']);
          break;
      }
    });
  }
  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin,
      },
    });
  }
  NavigateToLogin(){
    this.router.navigate(['/login'])
  }
  NavigateToSignUp(){
    this.router.navigate(['/register'])
  }
}

