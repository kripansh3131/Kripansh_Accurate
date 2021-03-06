import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }    from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import 'firebase/firestore';
import 'firebase/auth';
import { environment } from '../environments/environment';

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
import { AccountdetailsComponent } from './dashboard/accountdetails/accountdetails.component';
import { MonthsoverviewComponent } from './dashboard/monthsoverview/monthsoverview.component';
import { CategoriesComponent } from './dashboard/categories/categories.component';
import { AddCategoryComponent } from './dashboard/categories/add-category/add-category.component';
import { EditCategoryComponent } from './dashboard/categories/edit-category/edit-category.component';
import { AllCategoriesComponent } from './dashboard/categories/all-categories/all-categories.component';
import { ExpensesComponent } from './dashboard/monthsoverview/expenses/expenses.component';
import { AllExpensesComponent } from './dashboard/monthsoverview/expenses/all-expenses/all-expenses.component';
import { EditExpensesComponent } from './dashboard/monthsoverview/expenses/edit-expenses/edit-expenses.component';
import { AddExpensesComponent } from './dashboard/monthsoverview/expenses/add-expenses/add-expenses.component';
import { AuthGuardService } from './services/auth-guard.service';

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
    AccountdetailsComponent,
    MonthsoverviewComponent,
    CategoriesComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    AllCategoriesComponent,
    ExpensesComponent,
    AllExpensesComponent,
    EditExpensesComponent,
    AddExpensesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,

  ],
  providers: [AuthGuardService],
  bootstrap:[AppComponent],

})
export class AppModule { }
