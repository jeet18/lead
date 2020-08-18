import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeadersModule } from './core/headers.module';
import { ClientsComponent } from './clients/clients.component';
import { DataTableComponent } from './data-table/data-table.component';
import { CompaniesComponent } from './companies/companies.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { SmartviewComponent } from './smartview/smartview.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { BooknowComponent } from './booknow/booknow.component';
import {MaterialModule} from './material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    DataTableComponent,
    CompaniesComponent,
    AddcompanyComponent,
    SmartviewComponent,
    BookinglistComponent,
    BooknowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeadersModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
