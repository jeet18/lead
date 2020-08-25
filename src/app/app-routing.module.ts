import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompaniesComponent } from './companies/companies.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { SmartviewComponent } from './smartview/smartview.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { BooknowComponent } from './booknow/booknow.component';
import { TotalCompanyComponent } from './companies/total-company/total-company.component';
import { PanelQuotationComponent } from './panel-quotation/panel-quotation.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CompanyLeadComponent } from './company-lead/company-lead.component';
import { LeadActivityComponent } from './lead-activity/lead-activity.component';
import { CompanyClientsComponent } from './company-clients/company-clients.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [ 
  {
  path:'',
  pathMatch:'full',
  component: DashboardComponent
},

{
  path:'Companies', component:CompaniesComponent
},
{
  path:'addcompany', component:AddcompanyComponent
},
{
  path:'clients', component:ClientsComponent
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
},
{
  path:'total_company', component:TotalCompanyComponent
},
{
  path:'company-detail', component:CompanyDetailComponent
},
{
  path:'company-clients', component:CompanyClientsComponent
},
{
  path:'user-details', component:UserDetailsComponent
},
{
  path:'company-lead', component:CompanyLeadComponent
},
{
  path:'activity-details', component:ActivityDetailsComponent
},
{
  path:'lead-activity', component:LeadActivityComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
