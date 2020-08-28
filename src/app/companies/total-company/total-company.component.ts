import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyapiService } from 'src/app/companyapi.service';
import { Users} from 'src/companydetails';
import { Region, Source } from 'src/app/salespeson';
import {FormsModule} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


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
  {name: 'ornate1', email:'delhi@example.com', phone: 84755885,city:'delhi',
  state:'delhi',region:'delhi', owner:'username'},
  {name: 'ornate32', email:'delhi@example.com', phone: 84755885,city:'delhi',
  state:'delhi5',region:'delhi', owner:'username'},
  {name: 'ornate6', email:'delhi@example.com', phone: 84755885,city:'delhi',
  state:'delhi',region:'delhi', owner:'username'}
  ];

@Component({
  selector: 'app-total-company',
  templateUrl: './total-company.component.html',
  styleUrls: ['./total-company.component.css']
})
export class TotalCompanyComponent implements OnInit, AfterViewInit {

  UserSelected :number;
  regionSelected: number;
  sourceSelected:number;
  
  alluserData:Users[]; 
  allRegion:Region[];
  allSource:Source[];

  displayedColumns = ['name','email','phone','city','state','region','owner'];

  dataSource = new MatTableDataSource(EXAMPLE_DATA);


    @ViewChild(MatPaginator) paginator: MatPaginator;

    @ViewChild(MatSort) sort: MatSort;
  constructor(private service:CompanyapiService) { }

  ngOnInit(): void {
    this.getuser();
   this.getRegion();
   this.getSource();
  }

  applyFilter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();

  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  public getuser(){
    let resp = this.service.AllUsers();
    resp.subscribe(data=>this.alluserData=data.results);
    
   }
   public getRegion(){
    let resp = this.service.Allregion();
    resp.subscribe(data=>this.allRegion=data.results);
    console.log(this.allRegion);
   }
   public getSource(){
    let resp = this.service.AllSource();
    resp.subscribe(data=>this.allSource=data.results);
    
   }

}
