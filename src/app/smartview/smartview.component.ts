import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import {FormsModule} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyapiService } from '../companyapi.service';
import { Source, Region } from '../salespeson';
import { Companydetails, Users } from 'src/companydetails';

export interface DataTableItem {
  company_name: string;
  product: string;
  product_size: string;
  product_dis: string;
  nextFollowUp: string;
  status: string;
  priorty: string;
  owner: string;
  
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {company_name: 'atest1234', product: 'Aerocompact', product_size:'50 - 100 KW',product_dis:'testing',
  nextFollowUp: '2020-08-20',status:'pending', priorty:'Medium',owner:'Abhishek'},
  {company_name: 'atest12555', product: 'Aerocompact', product_size:'80 - 100 KW',product_dis:'testing',
  nextFollowUp: '2020-09-20',status:'pending', priorty:'Medium',owner:'Abhishek'}
];
@Component({
  selector: 'app-smartview',
  templateUrl: './smartview.component.html',
  styleUrls: ['./smartview.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SmartviewComponent implements OnInit {

  UserSelected :number;
  regionSelected: number;
  sourceSelected:number;

  alluserData:Users[]; 
  allRegion:Region[];
  allSource:Source[];
 data1:Companydetails[];


  displayedColumns = ['company_name','product','product_size','product_dis','nextFollowUp','status','priorty','owner','action'];
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource(EXAMPLE_DATA); 
  
  constructor(private service:CompanyapiService) { }
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.getuser();
   this.getRegion();
   this.getSource();
  }
  applyFilter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();

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
