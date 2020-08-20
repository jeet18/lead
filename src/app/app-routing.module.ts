import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { CompaniesComponent } from './companies/companies.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { SmartviewComponent } from './smartview/smartview.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { BooknowComponent } from './booknow/booknow.component';
import { TotalCompanyComponent } from './companies/total-company/total-company.component';

const routes: Routes = [ 
  {
  path:'',
  pathMatch:'full',
  component: DashboardComponent
},
{
  path:'clients', component:ClientsComponent
},
{
  path:'Companies', component:CompaniesComponent
},
{
  path:'addcompany', component:AddcompanyComponent
},
{
  path:'smartview', component:SmartviewComponent
},
{
  path:'bookinglist', component:BookinglistComponent
},
{
  path:'booknow', component:BooknowComponent
},
{
  path:'total_company', component:TotalCompanyComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
