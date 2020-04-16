import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './home/auth/auth.component';
import { SigninComponent } from './home/auth/signin/signin.component';
import { SignupComponent } from './home/auth/signup/signup.component';
import { ForgotpwdComponent } from './home/auth/forgotpwd/forgotpwd.component';
import { HelpComponent } from './help/help.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonthsoverviewComponent } from './dashboard/monthsoverview/monthsoverview.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { AccountdetailsComponent } from './dashboard/settings/accountdetails/accountdetails.component';
import { CategoriesComponent } from './dashboard/settings/categories/categories.component';
import { AllCategoriesComponent } from './dashboard/settings/categories/all-categories/all-categories.component';
import { AddCategoryComponent } from './dashboard/settings/categories/add-category/add-category.component';
import { EditCategoryComponent } from './dashboard/settings/categories/edit-category/edit-category.component';
import { ExpensesComponent } from './dashboard/monthsoverview/expenses/expenses.component';
import { AllExpensesComponent } from './dashboard/monthsoverview/expenses/all-expenses/all-expenses.component';
import { AddExpensesComponent } from './dashboard/monthsoverview/expenses/add-expenses/add-expenses.component';
import { EditExpensesComponent } from './dashboard/monthsoverview/expenses/edit-expenses/edit-expenses.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},

  {path:'home',component:HomeComponent,children:[
    {path:'',redirectTo:'auth',pathMatch:'full'},
    {path:'auth',component:AuthComponent},
    {path:'help',component:HelpComponent},
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent},
    {path:'forgot-password',component:ForgotpwdComponent},
    {path:'**',component:AuthComponent},
  ]},

  {path:'dashboard',component:DashboardComponent,children:[
    {path:'',redirectTo:'months-overview',pathMatch:'full'},
    {path:'help',component:HelpComponent},

    {path:'months-overview',component:MonthsoverviewComponent,children:[

      {path:'expenses',component:ExpensesComponent,children:[
        {path:'',redirectTo:'all-expenses',pathMatch:'full'},
        {path:'all-expenses',component:AllExpensesComponent},
        {path:'add-expenses',component:AddExpensesComponent},
        {path:'edit-expenses',component:EditExpensesComponent},
        {path:'**',component:AllExpensesComponent},
      ]},
      {path:'**',component:MonthsoverviewComponent},
    ]},

    {path:'settings',component:SettingsComponent,children:[
      {path:'account-details',component:AccountdetailsComponent},

      {path:'categories',component:CategoriesComponent,children:[
        {path:'',redirectTo:'all-categories',pathMatch:'full'},
        {path:'all-categories',component:AllCategoriesComponent},
        {path:'add-category',component:AddCategoryComponent},
        {path:'edit-category',component:EditCategoryComponent},
        {path:'**',component:AllCategoriesComponent},
      ]},
      {path:'**',component:DashboardComponent},
    ]},
    {path:'**',component:DashboardComponent},
  ]},
  {path:'**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
