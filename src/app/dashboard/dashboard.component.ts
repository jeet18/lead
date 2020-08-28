import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {LessonsDataSource} from '../services/ownerDatasource'
import { MatPaginator } from '@angular/material/paginator';
import { DashboardService } from '../services/dashboard.service';
import {FormsModule} from '@angular/forms';
import { fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { Users} from 'src/companydetails';
import { CompanyapiService } from '../companyapi.service';
import { Region, Source } from '../salespeson';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  UserSelected :number;
  regionSelected: number;
  sourceSelected:number;
  
  alluserData:Users[]; 
  allRegion:Region[];
  allSource:Source[];
  

  dataSource: LessonsDataSource;
  displayedColumns = ['company','product','description'];
  //dataSource = new MatTableDataSource(EXAMPLE_DATA); 
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('input') input: ElementRef;
 

 
  constructor(private coursesService: DashboardService, private service:CompanyapiService) { }
  ngOnInit() {
    this.getuser();
   this.getRegion();
   this.getSource();
    this.dataSource = new LessonsDataSource(this.coursesService);
    this.dataSource.loadallData('', 'asc', 0, 10);
  }

  onOwnerSelect(slectedId:any) {
    this.dataSource.loadLessons(this.UserSelected,'', 'asc', 0, 10)
  
    console.log(this.dataSource);
  }
  ngAfterViewInit() {

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    fromEvent(this.input.nativeElement,'keyup')
        .pipe(
            debounceTime(150),
            distinctUntilChanged(),
            tap(() => {
                this.paginator.pageIndex = 0;

                this.loadLessonsPage();
            })
        )
        .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
    .pipe(
        tap(() => this.loadLessonsPage())
    )
    .subscribe();

}

loadLessonsPage() {
    this.coursesService.TodayfollowbysalesPerson(
        this.UserSelected,
        this.input.nativeElement.value,
        this.sort.direction,
        this.paginator.pageIndex,
        this.paginator.pageSize);
}



//Methos to fet all fiter data
public getuser(){
  let resp = this.service.AllUsers();
  resp.subscribe(data=>this.alluserData=data.results);
  
 }
 public getRegion(){
  let resp = this.service.Allregion();
  resp.subscribe(data=>this.allRegion=data.results);
 }
 public getSource(){
  let resp = this.service.AllSource();
  resp.subscribe(data=>this.allSource=data.results);
  
 }

}
