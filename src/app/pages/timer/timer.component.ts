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
    console.log(this.time);
    this.interval = setInterval(() => {
      this.time--;
    }, 1000);
  }

}
