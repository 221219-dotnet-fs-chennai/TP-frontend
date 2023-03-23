import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.css'],
})

export class ViewPatientsComponent implements OnInit, AfterViewInit, OnDestroy{
  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef){}
  ngOnDestroy(): void {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.changeDetectorRef.detectChanges()
    this.obs = this.dataSource.connect() 
  }

  _setDataSource(indexNumber: any) {
    setTimeout(() => {
      switch (indexNumber) {
        case 0:
          !this.dataSource.paginator ? this.dataSource.paginator = this.paginator : null;
          break;
      }
    });
  }

  
  patients  : Patient[] = [
    {
      email: 'max@gmail.com',
      name: 'Max',
      gender: 'male',
      age: 33,
      phone: 8956747589,
      address: '100 avenue road',
      city: 'bangalore',
      state: 'karnataka'
    },
    {
      email: 'John@gmail.com',
      name: 'John',
      gender: 'male',
      age: 33,
      phone: 8956747589,
      address: '100 avenue road',
      city: 'bangalore',
      state: 'karnataka'
    },
    {
      email: 'Karl@gmail.com',
      name: 'Karl',
      gender: 'male',
      age: 33,
      phone: 8956747589,
      address: '100 avenue road',
      city: 'bangalore',
      state: 'karnataka'
    },
    {
      email: 'max@gmail.com',
      name: 'Max',
      gender: 'male',
      age: 33,
      phone: 8956747589,
      address: '100 avenue road',
      city: 'bangalore',
      state: 'karnataka'
    },
    {
      email: 'max@gmail.com',
      name: 'Max',
      gender: 'male',
      age: 33,
      phone: 8956747589,
      address: '100 avenue road',
      city: 'bangalore',
      state: 'karnataka'
    },
    {
      email: 'max@gmail.com',
      name: 'Max',
      gender: 'male',
      age: 33,
      phone: 8956747589,
      address: '100 avenue road',
      city: 'bangalore',
      state: 'karnataka'
    },
    {
      email: 'max@gmail.com',
      name: 'Max',
      gender: 'male',
      age: 33,
      phone: 8956747589,
      address: '100 avenue road',
      city: 'bangalore',
      state: 'karnataka'
    },
    {
      email: 'max@gmail.com',
      name: 'Max',
      gender: 'male',
      age: 33,
      phone: 8956747589,
      address: '100 avenue road',
      city: 'bangalore',
      state: 'karnataka'
    },
    {
      email: 'max@gmail.com',
      name: 'Max',
      gender: 'male',
      age: 33,
      phone: 8956747589,
      address: '100 avenue road',
      city: 'bangalore',
      state: 'karnataka'
    },
  ]
  @ViewChild("paginator") paginator !: MatPaginator;
  dataSource : MatTableDataSource<Patient> = new MatTableDataSource<Patient>(this.patients)
  obs !: Observable<any> 

  goBack(){
    this.router.navigate(['/admin-dashboard'])
  }
}

export interface Patient{
  email : string,
  name : string,
  gender : string,
  age : number,
  phone : number,
  address : string,
  city : string,
  state : string
}