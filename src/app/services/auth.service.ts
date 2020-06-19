import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uid=null

  constructor(public router:Router,public fireAuth:AngularFireAuth,public db:AngularFirestore) { 
    this.fireAuth.authState.subscribe(res=>{
      this.uid=res.uid
      this.router.navigateByUrl("/dashboard")
    })
  }

  signIn(email,password){
    this.fireAuth.signInWithEmailAndPassword(email,password).then(res=>{
      if(res.user.uid){
        this.uid=res.user.uid
        this.router.navigateByUrl("/dashboard")
      }
    }).catch(err=>{
      alert(err.message)
    })
  }

  logOut(){
    this.fireAuth.signOut().then(res=>{
      this.uid=null
      this.router.navigateByUrl("/home")
    })
  }

  isAuthenticated(){
    if(this.uid){ 
      return true
    }
    else{
      return false
    }
  }

  signUp(email,password,username){
    this.fireAuth.createUserWithEmailAndPassword(email,password,).then(res=>{
      if(res.user.uid){
        this.uid=res.user.uid
        this.router.navigateByUrl("/dashboard")
      }
    }).catch(err=>{
      alert(err.message)
    })
  }

  getUid(){
    return this.uid
  }

}
