import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { GetPatientsService, Patient } from '../get-patients.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})

export class TableViewComponent implements OnInit{
  constructor (private service : GetPatientsService){}
  patients : Patient[] = []
  isLoaded = true
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Patient>();
  displayedColumns!: string[];
  ngOnInit(): void {
    this.service.getAllData().subscribe((data) => {
      setTimeout(() => {
        this.patients = data
        this.isLoaded = false
        this.displayedColumns = ['created', 'fullname', 'email', 'gender', 'adressLine', 'city', 'state'];
        this.dataSource = new MatTableDataSource(this.patients)
      }, 3000);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
