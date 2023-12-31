import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Input() time: number;
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      if (this.time > 0) { this.time--; }
    }, 1000);
  }

}
