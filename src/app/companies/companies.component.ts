import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';


export interface DataTableItem {
  name: string;
  id: number;
  address: string;
  phone: number;
  city: string;
  state: string;
  region: string;
  
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {id: 1, name: 'a',address:'delhi@example.com', phone: 84755885,city:'delhi',
  state:'delhi',region:'punjab'},
  {id: 2, name: 'Hydrogen',address:'delhi@example.com', phone: 84755885,city:'delhi',
  state:'delhi',region:'punjab'},
  
  {id: 6, name: 'c',address:'delhi@example.com', phone: 84755885,city:'delhi',
  state:'delhi',region:'punjab'},
  
  
];
@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  displayedColumns = ['name','address','phone','city','state','region','lead','client','details'];
  dataSource = new MatTableDataSource(EXAMPLE_DATA); 
  @ViewChild(MatSort) sort: MatSort;
  
  
  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();

  }

}
