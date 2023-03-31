import { Component, OnInit } from '@angular/core';
import {
  AllR,
  BasicR,
  HealthR,
  HistoryService,
  TestR,
} from './history.service';

@Component({
  selector: 'app-patient-history-new',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css'],
})
export class PatientHistoryComponentNew implements OnInit {
  constructor(private service: HistoryService) {
    window.localStorage.setItem(
      'Patient',
      '4979f825-324a-4351-b0da-21732eeb3732'
    );
  }
  ngOnInit(): void {
    this.getHR();
    // this.getBR();
    // console.log(this.HRArr);
    console.log(this.mainArr);
  }
  HRArr: HealthR[] = [];
  BRArr: BasicR[] = [];
  TRArr: TestR[] = [];
  mainArr: AllR[] = [];

  getHR() {
    this.service
      .getHR(window.localStorage.getItem('Patient')?.toString())
      .subscribe((data1) => {
        data1.forEach((h) => {
          // this.HRArr = data1
          this.HRArr.push(h);
          this.service
            .getBR(window.localStorage.getItem('Patient')?.toString())
            .subscribe((data2) => {
              data2.forEach((b) => {
                if (h.appointmentId == b.appointmentId) {
                  // this.BRArr = data2
                  this.mainArr.push({
                    healthR: this.HRArr,
                    basicR: b,
                  });
                }
              });
            });
        });
      });
  }

  //   getBR() {
  //     this.service
  //       .getBR(window.localStorage.getItem('Patient')?.toString())
  //       .subscribe((data) => {
  //         // console.log(data)
  //         data.forEach((hr: any) => {
  //           this.BRArr.push(hr);
  //         });
  //       });
  //   }
}
