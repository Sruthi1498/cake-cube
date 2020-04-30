import { Component, OnInit } from '@angular/core';
import { parseWebDriverCommand } from 'blocking-proxy/built/lib/webdriver_commands';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }

}
