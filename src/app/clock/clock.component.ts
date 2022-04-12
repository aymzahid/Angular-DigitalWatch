import { interval } from 'rxjs';
import { Component, OnInit } from '@angular/core';
// import { time } from 'console';
// const bt = document.getElementById('bt1');
@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit {
  displayBtn: boolean = false;
  isactive: boolean = true;

  time1: any;
  time2: any;
  hour1: any;
  minute1: any;
  second1: any;
  hour2: any;
  minute2: any;
  second2: any;
  sub1: any;
  sub2: any;
  time3: any;
  date1: string = 'dd/MM/yyyy';

  constructor() {
    this.HoursTwelve();
    this.HoursTwentyFour();
  }

  ngOnInit() {}

  HoursTwelve() {
    this.displayBtn = true;
    if (this.isactive) {
      {
        this.sub1 = interval(1).subscribe((data) => {
          this.sub2.unsubscribe();
          this.time1 = new Date();
          // this.hour1 = this.time1.getHours();
          // this.minute1 = this.time1.getMinutes();
          // this.second1 = this.time1.getSeconds();
          // this.time1 =
          //   this.hour1 + ' : ' + this.minute1 + ' : ' + this.second1 + ' PM';

          // this.time1 = this.time2;
        });
      }
    }
  }

  HoursTwentyFour() {
    this.displayBtn = false;
    this.sub1.unsubscribe();

    if (this.isactive) {
      this.sub2 = interval(1).subscribe((data) => {
        this.time2 = new Date();
        this.hour2 = this.time2.getHours();
        this.minute2 = this.time2.getMinutes();
        this.second2 = this.time2.getSeconds();
        this.time2 = this.hour2 + ' : ' + this.minute2 + ' : ' + this.second2;
        // this.time1 = this.time2;
      });
    }
  }
}
