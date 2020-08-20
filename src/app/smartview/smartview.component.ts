import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { BookservService } from '../services/bookserv.service';
import {BookingDataSource} from "../services/booking.datasource";
import {Ibook} from "../bookfile";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
@Component({
  selector: 'app-smartview',
  templateUrl: './smartview.component.html',
  styleUrls: ['./smartview.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SmartviewComponent implements OnInit {
  course:Ibook;
  dataSource: BookingDataSource;

  displayedColumns= ["seqNo", "description", "duration"];

  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('input') input: ElementRef;

  // public bookfile = [];
  constructor(private route: ActivatedRoute, private _bookingserve: BookservService) { }

  ngOnInit(){

    this.course = this.route.snapshot.data["course"];

        this.dataSource = new BookingDataSource(this._bookingserve);

        this.dataSource.loadBooking(this.course.id, '', 'asc', 0, 3);
    // this._bookingserve.getBooking()
    // .subscribe(data => this.bookfile = data);
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
  this.dataSource.loadBooking(
      this.course.id,
      this.input.nativeElement.value,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize);
}
}
