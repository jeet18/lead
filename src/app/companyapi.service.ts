import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyapiService {

  constructor(private http:HttpClient) { }

    public Companydetails(){
      return this.http.get("http://127.0.0.1:8000/api/companies/");

    }

    public Clientdetails(){
      return this.http.get("http://127.0.0.1:8000/api/clients/");

    }
}
