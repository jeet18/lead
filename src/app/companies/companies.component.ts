import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface DataTableItem {
  name: string;
  id: number;
  address: string;
  phone: number;
  city: string;
  state: string;
  region: string;
  lead: number;
  client: string;
  details: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {id: 1, name: 'Hydrogen',address:'delhi@example.com', phone: 84755885,city:'delhi',
  state:'delhi',region:'punjab',lead:15, client:'username', details:'clink on'},
  {id: 2, name: 'Hydrogen',address:'delhi@example.com', phone: 84755885,city:'delhi',
  state:'delhi',region:'punjab',lead:15, client:'username', details:'clink on'},
  {id: 3, name: 'Hydrogen',address:'delhi@example.com', phone: 84755885,city:'delhi',
  state:'delhi',region:'punjab',lead:15, client:'username', details:'clink on'},
  {id: 4, name: 'Hydrogen',address:'delhi@example.com', phone: 84755885,city:'delhi',
  state:'delhi',region:'punjab',lead:15, client:'username', details:'clink on'},
  {id: 5, name: 'Hydrogen',address:'delhi@example.com', phone: 84755885,city:'delhi',
  state:'delhi',region:'punjab',lead:15, client:'username', details:'clink on'},
  {id: 6, name: 'Hydrogen',address:'delhi@example.com', phone: 84755885,city:'delhi',
  state:'delhi',region:'punjab',lead:15, client:'username', details:'clink on'},
  
  
];
@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  displayedColumns = ['id', 'name','address','phone','city','state','region','lead','client','details'];
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource(EXAMPLE_DATA); 
  
  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();

  }

}
