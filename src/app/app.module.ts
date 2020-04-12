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
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountdetailsComponent } from './dashboard/accountdetails/accountdetails.component';
import { BalancesheetComponent } from './dashboard/monthoverview/balancesheet/balancesheet.component';
import { MngentriesComponent } from './dashboard/monthoverview/mngentries/mngentries.component';
import { MngcategoriesComponent } from './dashboard/monthoverview/mngcategories/mngcategories.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderhomeComponent } from './shared/headerhome/headerhome.component';
import { HeaderdashboardComponent } from './shared/headerdashboard/headerdashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    ForgotpwdComponent,
    HelpComponent,
    DashboardComponent,
    AccountdetailsComponent,
    BalancesheetComponent,
    MngentriesComponent,
    MngcategoriesComponent,
    FooterComponent,
    HeaderhomeComponent,
    HeaderdashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
