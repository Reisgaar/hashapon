import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-incubators',
  templateUrl: './incubators.component.html',
  styleUrls: ['./incubators.component.scss']
})
export class IncubatorsComponent implements OnInit {

  machineHeightAnimal: any;
  machineBoxingAnimal: any;
  machineRunningAnimal: any;
  actualPosition: number = 5;

  @HostListener('window:resize', ['$event'])

  handleResize(event: any): void {
    if (event.target.innerWidth > 1000) {
      const firstEgg = document.getElementById('first-incubator') as HTMLElement;
      this.actualPosition = 0;
      firstEgg.style.marginLeft = this.actualPosition + 'vw';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  public moveSlider(next: boolean): void {
    const firstBaby = document.getElementById('first-incubator') as HTMLElement;
    // Set actual position
    if (next) {
      this.actualPosition = this.actualPosition - 100;
    } else {
      this.actualPosition = this.actualPosition + 100;
    }
    // Check if first or last
    if (this.actualPosition === (-295)) {
      this.actualPosition = 5;
    } else if (this.actualPosition === 105) {
      this.actualPosition = -195;
    }
    // Update position
    firstBaby.style.marginLeft = this.actualPosition + 'vw';
  }

}
