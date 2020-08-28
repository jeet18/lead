import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeadersModule } from './core/headers.module';
import { DataTableComponent } from './data-table/data-table.component';
import { CompaniesComponent } from './companies/companies.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { SmartviewComponent } from './smartview/smartview.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { BooknowComponent } from './booknow/booknow.component';
import {MaterialModule} from './material/material.module';
import {HttpClientModule} from '@angular/common/http';
import { TotalCompanyComponent } from './companies/total-company/total-company.component';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { PanelQuotationComponent } from './panel-quotation/panel-quotation.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyLeadComponent } from './company-lead/company-lead.component';
import { LeadActivityComponent } from './lead-activity/lead-activity.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CompanyClientsComponent } from './company-clients/company-clients.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { ClientsComponent } from './clients/clients.component';
import { DatePipe } from '@angular/common';
import {DashboardService} from './services/dashboard.service';
import {CompanyapiService} from  './companyapi.service';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DataTableComponent,
    CompaniesComponent,
    AddcompanyComponent,
    SmartviewComponent,
    BookinglistComponent,
    BooknowComponent,
    TotalCompanyComponent,
    PanelQuotationComponent,
    CompanyDetailComponent,
    CompanyLeadComponent,
    LeadActivityComponent,
    UserDetailsComponent,
    CompanyClientsComponent,
    ActivityDetailsComponent,
    ClientsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeadersModule,
    MaterialModule,
    HttpClientModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [DatePipe,DashboardService,CompanyapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
