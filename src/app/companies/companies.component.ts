import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { CompanyapiService } from '../companyapi.service';
import { HttpClientModule } from '@angular/common/http';
import { Companydetails } from 'src/companydetails';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  ELEMENT_DATA : Companydetails[];
  displayedColumns: string[]= ['id', 'name', 'email_primary', 'phone_primary', 'gstin', 'pan','lead', 'client','details'];

 dataSource = new MatTableDataSource<Companydetails>(this.ELEMENT_DATA);
 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}


 constructor(private service:CompanyapiService) { }

 ngOnInit() {
   this.getAllCompany();
 }

 public getAllCompany() {
     let resp = this.service.Companydetails();
     resp.subscribe(Companydata=>this.dataSource.data=Companydata as Companydetails[])

   }

  /*applyFilter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();

  }*/

}
