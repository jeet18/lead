import { Component, OnInit, ViewChild } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatTableDataSource} from '@angular/material/table';
import { CompanyapiService } from '../companyapi.service';
import { Companydetails,Users} from 'src/companydetails';
import {Region,Source}from '../salespeson'


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  UserSelected :number;
  regionSelected: number;
  sourceSelected:number;

  alluserData:Users[]; 
  allRegion:Region[];
  allSource:Source[];
 data1:Companydetails[];
  
displayedColumns: string[]= ['id', 'name', 'email_primary', 'phone_primary', 'gstin', 'pan','lead', 'client','details'];

dataSource = new MatTableDataSource<Companydetails>(this.data1);

constructor(private service:CompanyapiService) { 
   this.data1=new Array<any>();
  
 }
  
 ngOnInit() {
  this.getAllCompany();
   this.getuser();
   this.getRegion();
   this.getSource();
 }

 
 public getAllCompany() {
     let resp = this.service.Companydetails();
     resp.subscribe(dataSource=>this.dataSource=dataSource.results)
      
   }

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
