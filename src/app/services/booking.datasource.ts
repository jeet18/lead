import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import { Observable, BehaviorSubject, of } from "rxjs";
import {Ibook} from "../bookfile";
import {BookservService} from "./bookserv.service";
import {catchError, finalize} from "rxjs/operators";
import { Lesson } from '../lession';

export class BookingDataSource implements DataSource<Lesson> {

    private BookingSubject = new BehaviorSubject<Lesson[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private bookingService: BookservService) {

    }
    loadBooking(courseId:number,
        filter:string,
        sortDirection:string,
        pageIndex:number,
        pageSize:number) {

this.loadingSubject.next(true);

this.bookingService.findLessons(courseId, filter, sortDirection,
    pageIndex, pageSize).pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
    )
    .subscribe(lessons => this.BookingSubject.next(lessons));

}
    
            connect(collectionViewer: CollectionViewer): Observable<Lesson[]> {
                console.log("Connecting data source");
                return this.BookingSubject.asObservable();
            }

            disconnect(collectionViewer: CollectionViewer): void {
                this.BookingSubject.complete();
                this.loadingSubject.complete();
            }

}