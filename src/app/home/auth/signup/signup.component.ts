import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username:{name:string}={name:""}
  email
  password

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

  signUp(){
    this.auth.signUp(this.email,this.password,this.username)
  }

}
