import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyapiService } from '../companyapi.service';
import { Source, Region } from '../salespeson';
import {FormsModule} from '@angular/forms';
import { Users } from 'src/companydetails';

export interface DataTableItem {
  customer_name: string;
  warehouse: string;
  product: string;
  model: string;
  qty: string;
  date: string;
  sales_person: string;
  
  
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {customer_name: 'ADITI GREEN ENERGY SOLUTIONS',warehouse:'PBR-Indore', product:'RenewSys',model:'RENEWSYS DESERV 3M6 325P',
  qty:'24kW', date:'2020-06-19', sales_person:'Sunny Kashyap'},
  {customer_name: 'ADITI GREEN ENERGY SOLUTIONS',warehouse:'PBR-Indore', product:'RenewSys',model:'RENEWSYS DESERV 3M6 325P',
  qty:'27kW', date:'2020-06-19', sales_person:'Sunny Kashyap'},
  {customer_name: 'ADITI GREEN ENERGY SOLUTIONS',warehouse:'PBR-Indore', product:'RenewSys',model:'RENEWSYS DESERV 3M6 325P',
  qty:'20kW', date:'2020-06-19', sales_person:'Kashyap'},
  {customer_name: 'ADITI GREEN ENERGY SOLUTIONS',warehouse:'PBR-Indore', product:'RenewSys',model:'RENEWSYS DESERV 3M6 325P',
  qty:'50kW', date:'2020-06-19', sales_person:'Sunny'}
];
@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent implements OnInit {

  UserSelected :number;
  regionSelected: number;
  sourceSelected:number;

  alluserData:Users[]; 
  allRegion:Region[];
  allSource:Source[];


  displayedColumns = ['customer_name', 'warehouse','product','model','qty','date','sales_person'];
  dataSource = new MatTableDataSource(EXAMPLE_DATA); 
  constructor(private service:CompanyapiService) { }

  ngOnInit(): void {
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
