import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles:[`
    p {
      color:red;
      text-decoration: underline;
    }
  `]
  //styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
