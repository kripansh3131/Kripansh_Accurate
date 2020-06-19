import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerdashboard',
  templateUrl: './headerdashboard.component.html',
  styleUrls: ['./headerdashboard.component.css']
})
export class HeaderdashboardComponent implements OnInit {
  
  public isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
