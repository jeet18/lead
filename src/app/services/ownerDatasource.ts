


import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable, BehaviorSubject, of} from "rxjs";
import {FiltersalesPersonData} from "../salespeson";
import {DashboardService} from "./dashboard.service";
import {catchError, finalize} from "rxjs/operators";



export class LessonsDataSource implements DataSource<FiltersalesPersonData> {

    private lessonsSubject = new BehaviorSubject<FiltersalesPersonData[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private coursesService: DashboardService) {

    }

    loadLessons(owner:number,
                filter:string,
                sortDirection:string,
                pageIndex:number,
                pageSize:number) {

        this.loadingSubject.next(true);

        this.coursesService.TodayfollowbysalesPerson(owner, filter, sortDirection,
            pageIndex, pageSize).pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(lessons => this.lessonsSubject.next(lessons));

    }

    loadallData( filter:string,
        sortDirection:string,
        pageIndex:number,
        pageSize:number){
        this.coursesService.findAlldetails()
    .subscribe(lessons => this.lessonsSubject.next(lessons));

}

    connect(collectionViewer: CollectionViewer): Observable<FiltersalesPersonData[]> {
        console.log("Connecting data source");
        return this.lessonsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    }

}

