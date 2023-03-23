import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-nurse-nav',
  templateUrl: './nurse-nav.component.html',
  styleUrls: ['./nurse-nav.component.css']
})
export class NurseNavComponent implements OnInit{
  constructor(public auth : AuthService, @Inject(DOCUMENT) private doc: Document){}
  ngOnInit(): void {
    this.auth.user$.subscribe((data) => {
      this.nurseName = data?.email?.split("@")[0]
      this.nurseEmail = data?.email
    })
  }
  nurseName !: string | undefined
  nurseEmail !: string | undefined
  nname = 'Robin'
  nemail = 'robin@nurse.com'
  
  logout() {
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin,
      },
    });
  }
}
