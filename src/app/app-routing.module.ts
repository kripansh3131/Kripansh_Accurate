import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './home/auth/auth.component';
import { SigninComponent } from './home/auth/signin/signin.component';
import { SignupComponent } from './home/auth/signup/signup.component';
import { ForgotpwdComponent } from './home/auth/forgotpwd/forgotpwd.component';


const routes: Routes = [
  {path:'',component:HomeComponent,children:[
    {path:'',component:AuthComponent},
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent},
    {path:'forgotpwd',component:ForgotpwdComponent},
    {path:'**',component:AuthComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
