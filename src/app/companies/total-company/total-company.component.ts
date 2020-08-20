import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';



export interface DataTableItem {
  name: string;
  email: string;
  phone: number;
  city: string;
  state: string;
  region: string;
  owner: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {name: 'ornate', email:'delhi@example.com', phone: 84755885,city:'delhi',
  state:'delhi',region:'delhi', owner:'username'},
  {name: 'ornate', email:'delhi@example.com', phone: 84755885,city:'delhi',
  state:'delhi',region:'delhi', owner:'username'},
  {name: 'ornate', email:'delhi@example.com', phone: 84755885,city:'delhi',
  state:'delhi',region:'delhi', owner:'username'}
  ];

@Component({
  selector: 'app-total-company',
  templateUrl: './total-company.component.html',
  styleUrls: ['./total-company.component.css']
})
export class TotalCompanyComponent implements OnInit {
  displayedColumns = ['name','email','phone','city','state','region','owner'];

  dataSource = new MatTableDataSource(EXAMPLE_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();

  }

}
