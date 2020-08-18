import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


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
  displayedColumns = ['customer_name', 'warehouse','product','model','qty','date','sales_person'];
  dataSource = new MatTableDataSource(EXAMPLE_DATA); 
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();

  }
}
