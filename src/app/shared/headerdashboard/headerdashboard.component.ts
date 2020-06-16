import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-headerdashboard',
  templateUrl: './headerdashboard.component.html',
  styleUrls: ['./headerdashboard.component.css']
})
export class HeaderdashboardComponent implements OnInit {
  
  public isMenuCollapsed = true;
  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

}
