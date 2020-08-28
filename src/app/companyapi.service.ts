import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyapiService {
  

  constructor(private http:HttpClient) { }

    public Companydetails(): Observable<any>{
      const _url = "http://127.0.0.1:8000/api/companies/"
      return this.http.get(_url);

    }


    public Clientdetails(): Observable<any>{
      return this.http.get<any>("http://127.0.0.1:8000/api/clients/");

    }
    public AllUsers(): Observable<any>{
      return this.http.get("http://127.0.0.1:8000/api/users/");

    }
    public Allregion(): Observable<any>{
      return this.http.get("http://127.0.0.1:8000/api/Region/");

    }
    public AllSource(): Observable<any>{
      return this.http.get("http://127.0.0.1:8000/api/LeadSourceMaster/");

    }
    public Allproduct(): Observable<any>{
      return this.http.get("http://127.0.0.1:8000/api/users/");

    }
}
