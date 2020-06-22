import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent implements OnInit {

   accountDetails:{email,username}={email:"",username:""}

  constructor(public auth:AuthService) { }

  ngOnInit(): void { 
    this.accountDetails.email = this.auth.getEmail()
    this.accountDetails.username = this.auth.getUsername()
    console.log(this.accountDetails)
  }

}
