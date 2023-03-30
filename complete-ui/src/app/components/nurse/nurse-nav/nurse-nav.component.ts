import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { AppointmentServiceService } from 'src/app/services/appointment-service/appointment-service.service';

@Component({
  selector: 'app-nurse-nav',
  templateUrl: './nurse-nav.component.html',
  styleUrls: ['./nurse-nav.component.css']
})
export class NurseNavComponent implements OnInit{
  constructor(public auth : AuthService, @Inject(DOCUMENT) private doc: Document,
  private router : Router, private appointmentService : AppointmentServiceService){}


  ngOnInit(): void {
    this.auth.user$.subscribe((data) => {
      this.nurseName = data?.email?.split("@")[0]
      this.nurseEmail = data?.email
    })

    this.appointmentService.getAppointmentsByStatusOne().subscribe((data) => {
      this.notificationBadge = data.length
    });
  }
  notificationBadge : number = 0
  nurseName !: string | undefined
  nurseEmail !: string | undefined
  nname = 'Robin'
  nemail = 'robin@nurse.com'
  
  enableSidebar(){
    this.router.navigate(['nurse/pick-appointments']);
  }
  
  logout() {
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin,
      },
    });
  }
}
