import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email="kripansh@gmail.com"
  password="123456"
  isSignedIn=false

  constructor(public router:Router) { }

  signIn(email,password){
    if(email==this.email && password==this.password){
      this.isSignedIn=true
      this.router.navigateByUrl("/dashboard")
    }
    else{
      alert("Incorrect Credentials")
    }
  }

  logOut(){
    this.isSignedIn=false
    this.router.navigateByUrl("/home")
  }

  isAuthenticated(){
    return this.isSignedIn
  }


}
