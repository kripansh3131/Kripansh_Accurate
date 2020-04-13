import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './home/auth/auth.component';
import { SigninComponent } from './home/auth/signin/signin.component';
import { SignupComponent } from './home/auth/signup/signup.component';
import { ForgotpwdComponent } from './home/auth/forgotpwd/forgotpwd.component';
import { HelpComponent } from './help/help.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderhomeComponent } from './shared/headerhome/headerhome.component';
import { HeaderdashboardComponent } from './shared/headerdashboard/headerdashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { AccountdetailsComponent } from './dashboard/settings/accountdetails/accountdetails.component';
import { MonthsoverviewComponent } from './dashboard/monthsoverview/monthsoverview.component';
import { BalancesheetComponent } from './dashboard/monthsoverview/balancesheet/balancesheet.component';
import { MngcategoriesComponent } from './dashboard/monthsoverview/mngcategories/mngcategories.component';
import { AddcategoryComponent } from './dashboard/monthsoverview/mngcategories/addcategory/addcategory.component';
import { EditcategoryComponent } from './dashboard/monthsoverview/mngcategories/editcategory/editcategory.component';
import { MngentriesComponent } from './dashboard/monthsoverview/mngentries/mngentries.component';
import { AddentryComponent } from './dashboard/monthsoverview/mngentries/addentry/addentry.component';
import { EditentryComponent } from './dashboard/monthsoverview/mngentries/editentry/editentry.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    ForgotpwdComponent,
    HelpComponent,
    FooterComponent,
    HeaderhomeComponent,
    HeaderdashboardComponent,
    DashboardComponent,
    SettingsComponent,
    AccountdetailsComponent,
    MonthsoverviewComponent,
    BalancesheetComponent,
    MngcategoriesComponent,
    AddcategoryComponent,
    EditcategoryComponent,
    MngentriesComponent,
    AddentryComponent,
    EditentryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
