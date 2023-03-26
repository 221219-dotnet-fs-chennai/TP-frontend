import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table'
import { Observable, merge } from 'rxjs';
import { GetPatientsService } from './get-patients.service';
import { Patient } from './get-patients.service';

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.css'],
})

export class ViewPatientsComponent implements OnInit, AfterViewInit, OnDestroy, AfterViewInit{
  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef, public service : GetPatientsService){}
  ngOnDestroy(): void {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }
  resLen !: number
  pagesize = 2
  ngAfterViewInit(): void {
    // this.service.getAllData().subscribe(() => this.paginator.pageIndex = 0)
    // // this.dataSource.paginator = this.paginator;
    // this.service.getAllData().subscribe((data) => {
    //   this.resLen = data.length
    //   this.patients = data
    // })
  }

  patients : Patient[] = []
  page: number = 1;
  count: number = 0;
  tableSize: number = 4;
  tableSizes: any = [3, 6, 9, 12];
  // dataSource : MatTableDataSource<Patient> = new MatTableDataSource<Patient>(this.patients)
  dataSource !: MatTableDataSource<any>
  obs !: Observable<any> 
  // indexNumber !: any
  // _setDataSource(indexNumber : any){}
  
  ngOnInit(): void {
    // this.changeDetectorRef.detectChanges()
    this.getData()
  }
  onTableDataChange(event : any){
    this.page = event
    this.getData()
  }
  onTableSizeChange(event :any){
    this.tableSize = event.target.value
    this.page = 1
    this.getData()
  }
  isLoading = true 
  getData(){
    this.service.getAllData().subscribe((data) =>{
      setTimeout(() => {
        this.patients = data
        this.isLoading = false
      }, 2000);
    })
  }

  // _setDataSource(indexNumber : any) {
  //   setTimeout(() => {
  //     switch (indexNumber) {
  //       case 0:
  //         !this.dataSource.paginator ? this.dataSource.paginator = this.paginator : null;
  //         break;
  //     }
  //   });
  // }
  
  //patients  : Patient[] = [
    // {
    //   email: 'max@gmail.com',
    //   name: 'Max',
    //   gender: 'male',
    //   age: 33,
    //   phone: 8956747589,
    //   address: '100 avenue road',
    //   city: 'bangalore',
    //   state: 'karnataka'
    // },
    // {
    //   email: 'John@gmail.com',
    //   name: 'John',
    //   gender: 'male',
    //   age: 33,
    //   phone: 8956747589,
    //   address: '100 avenue road',
    //   city: 'bangalore',
    //   state: 'karnataka'
    // },
    // {
    //   email: 'Karl@gmail.com',
    //   name: 'Karl',
    //   gender: 'male',
    //   age: 33,
    //   phone: 8956747589,
    //   address: '100 avenue road',
    //   city: 'bangalore',
    //   state: 'karnataka'
    // },
    // {
    //   email: 'max@gmail.com',
    //   name: 'Max',
    //   gender: 'male',
    //   age: 33,
    //   phone: 8956747589,
    //   address: '100 avenue road',
    //   city: 'bangalore',
    //   state: 'karnataka'
    // },
    // {
    //   email: 'max@gmail.com',
    //   name: 'Max',
    //   gender: 'male',
    //   age: 33,
    //   phone: 8956747589,
    //   address: '100 avenue road',
    //   city: 'bangalore',
    //   state: 'karnataka'
    // },
    // {
    //   email: 'max@gmail.com',
    //   name: 'Max',
    //   gender: 'male',
    //   age: 33,
    //   phone: 8956747589,
    //   address: '100 avenue road',
    //   city: 'bangalore',
    //   state: 'karnataka'
    // },
    // {
    //   email: 'max@gmail.com',
    //   name: 'Max',
    //   gender: 'male',
    //   age: 33,
    //   phone: 8956747589,
    //   address: '100 avenue road',
    //   city: 'bangalore',
    //   state: 'karnataka'
    // },
    // {
    //   email: 'max@gmail.com',
    //   name: 'Max',
    //   gender: 'male',
    //   age: 33,
    //   phone: 8956747589,
    //   address: '100 avenue road',
    //   city: 'bangalore',
    //   state: 'karnataka'
    // },
    // {
    //   email: 'max@gmail.com',
    //   name: 'Max',
    //   gender: 'male',
    //   age: 33,
    //   phone: 8956747589,
    //   address: '100 avenue road',
    //   city: 'bangalore',
    //   state: 'karnataka'
    // },
  //]
  @ViewChild("paginator") paginator !: MatPaginator;
  
  goBack(){
    this.router.navigate(['/admin-dashboard'])
  }
}

// export interface Patient{
//   email : string,
//   name : string,
//   gender : string,
//   age : number,
//   phone : number,
//   address : string,
//   city : string,
//   state : string
// }