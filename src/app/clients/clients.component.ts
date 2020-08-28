import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyapiService } from '../companyapi.service';
import { Source, Region } from '../salespeson';
import { Users } from 'src/companydetails';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  UserSelected :number;
  regionSelected: number;
  sourceSelected:number;
  
  alluserData:Users[]; 
  allRegion:Region[];
  allSource:Source[];
 

  ELEMENT_DATA : Array<any>;
  dataSource = new MatTableDataSource<Array<any>>(this.ELEMENT_DATA);
  displayedColumns: string[]= ['first_name', 'email_primary', 'phone_primary', 'company'];
  
  constructor(private service:CompanyapiService) {
    this.ELEMENT_DATA=new Array<any>()
   }
  

  ngOnInit() {
    this.getAllClients();
    this.getuser();
    this.getRegion();
    this.getSource();
  }
  public getAllClients() {
    let resp = this.service.Clientdetails();
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
