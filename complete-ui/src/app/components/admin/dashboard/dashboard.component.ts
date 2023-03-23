import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Doctor } from '../add-doctor/doctor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit{
  constructor(
    private router: Router,
    private auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}
  isLoggedIn = false;
  checkLoginStatus() {
    if (this.auth.isAuthenticated$) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }
  logout() {
    this.auth.logout({
      logoutParams: {
        returnTo: (this.doc.location.pathname = ''),
      },
    });
  }
  navToAddDoctor() {
    this.router.navigate(['add-doctor-details']);
  }

  navToAddNurse() {
    this.router.navigate(['add-nurse-details']);
  }

  patients = [
    {
      title: 'Max',
      content: ' age:20 ',
    },
    {
      title: 'Maxwell',
      content: ' age:21',
    },
    {
      title: 'David',
      content: ' age:22',
    },
  ];

  ngOnInit(): void {
    this.auth.user$.subscribe((data) => {
      this.adminName = data?.email?.split("@")[0]
      this.adminEmail = data?.email
    })
  }
  adminName !: string | undefined
  adminEmail !: string | undefined

  currentdate: Date = new Date();
  datetoday: Date = new Date();
  datenextweek: Date = new Date(
    this.datetoday.setDate(this.datetoday.getDate() + 7)
  );
  content : string = 'Schedule the doctor availability on'
  doctors : Doctor[] = [
    {
      name: 'josh',
      email: 'josh@doctor.com',
      gender: 'Male',
      imgUrl: 'https://fghj.jpg',
      specialization: 'Cardio',
      experience: 12,
      phoneNo: 8975697586,
    },
    {
      name: 'josh',
      email: 'josh@doctor.com',
      gender: 'Male',
      imgUrl: 'https://fghj.jpg',
      specialization: 'Cardio',
      experience: 12,
      phoneNo: 8975697586,
    },
    {
      name: 'josh',
      email: 'josh@doctor.com',
      gender: 'Male',
      imgUrl: 'https://fghj.jpg',
      specialization: 'Cardio',
      experience: 12,
      phoneNo: 8975697586,
    },
  ]
}
