import { Component, OnInit } from '@angular/core';
import { CountDown } from 'angular2-simple-countdown/countdown';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {

  text: any = {
    'Weeks': '',
    'Days': '',
    'Hours': '',
    'Minutes': '',
    'Seconds': '',
    'MilliSeconds': ''
  };

  constructor() {

  }

  ngOnInit() {
  }



}
