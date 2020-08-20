import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


export interface DataTableItem {
  company: string;
  product: string;
  description: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {company: 'ABDSD12', product:'SolarP', description:'testing'},
  {company: 'Hydrogen12q', product:'Canadian', description:'working'}
  
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns = ['company','product','description'];
  dataSource = new MatTableDataSource(EXAMPLE_DATA); 
  @ViewChild(MatSort) sort: MatSort;

 
  constructor() { }
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

 

}
