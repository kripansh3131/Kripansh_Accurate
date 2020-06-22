import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private uid = null
  private email = null
  private username = null

  constructor(private router:Router,private fireAuth:AngularFireAuth,private db:AngularFirestore) { 
    this.fireAuth.authState.subscribe(res=>{
      this.uid = res.uid
      this.email = res.email
      this.router.navigateByUrl("/dashboard")
      this.db.collection("users").valueChanges().subscribe(res=>{
        this.username = res[0]
      })
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
        this.db.collection("users").add(Object.assign({},username))
        this.router.navigateByUrl("/dashboard")
      }
    }).catch(err=>{
      alert(err.message)
    })
  }

  getUid(){
    return this.uid
  }

  getEmail(){
    return this.email
  }

  getUsername(){
    return this.username.name
  }

}
