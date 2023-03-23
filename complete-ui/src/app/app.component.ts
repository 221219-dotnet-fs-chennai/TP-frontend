import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { filter, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HMS';
  loading = false;
  toggle = true;
  showNav = true;
  showAdminNav = false;
  constructor(private router: Router) {
    // router.events
    //   .pipe(
    //     filter((e) => e instanceof NavigationEnd),
    //     take(1)
    //   )
    //   .subscribe((e) => {
    //     this.loaded = true;
    //     alert('loaded - this fires only once');
    //   });
    router.events.subscribe(event => {
      if(event instanceof NavigationStart){
        this.loading = true
      }
      if(event instanceof NavigationEnd || event instanceof NavigationError || event instanceof NavigationCancel){
        this.loading = false
      }
    })
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url === '/register') {
          this.toggle = false;
        } else if (val.url === '/dashboard') {
          this.toggle = false;
        } else if (val.url === '') {
          this.toggle = false;
        } else if (val.url === '/login') {
          this.toggle = false;
        } else if (val.url === '/admin') {
          this.toggle = false;
          this.showNav = false;
          // this.showAdminNav = true
        }
      }
    });
  }
}
