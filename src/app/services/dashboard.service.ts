import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FiltersalesPersonData} from "../salespeson";
import { map } from 'rxjs/operators';
@Injectable()
export class DashboardService {

  constructor(private http:HttpClient) { }
  
  
  findAlldetails(filter = '', sortOrder = 'asc',
      pageNumber = 0, pageSize = 10): Observable<FiltersalesPersonData[]> {
    return this.http.get('http://127.0.0.1:8000/api/DashboadLead/')
        .pipe(
            map(res => res['payload'])
        );
}
  public TodayfollowbysalesPerson( owner:number, filter = '', sortOrder = 'asc',
      pageNumber = 0, pageSize = 10):  Observable<FiltersalesPersonData[]> {

      return this.http.get('http://127.0.0.1:8000/api/DashboadLead/?owner', {
          params: new HttpParams()
              .set('id', owner.toString())
              .set('filter', filter)
              .set('sortOrder', sortOrder)
              .set('pageNumber', pageNumber.toString())
              .set('pageSize', pageSize.toString())
      }).pipe(
          map(res =>  res["payload"])
      );
        
      }

}
