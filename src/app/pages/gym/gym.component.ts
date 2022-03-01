import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.scss']
})
export class GymComponent implements OnInit {

  machineHeightIsOccupied: boolean = false;
  machineBoxingIsOccupied: boolean = false;
  machineRunningIsOccupied: boolean = false;
  actualPosition: number = 5;

  @HostListener('window:resize', ['$event'])

  handleResize(event: any) {
    if (event.target.innerWidth > 1000) {
      const firstEgg = document.getElementById('first-machine') as HTMLElement;
      this.actualPosition = 0;
      firstEgg.style.marginLeft = this.actualPosition + 'vw';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  public moveSlider(next: boolean): void {
    const firstBaby = document.getElementById('first-machine') as HTMLElement;
    // Set actual position
    if (next) {
      this.actualPosition = this.actualPosition - 100;
    } else {
      this.actualPosition = this.actualPosition + 100;
    }
    // Check if first or last
    if (this.actualPosition === (-295)) {
      this.actualPosition = 5;
    } else if (this.actualPosition === 100) {
      this.actualPosition = -100 * (2 - 1);
    }
    // Update position
    firstBaby.style.marginLeft = this.actualPosition + 'vw';
  }

}
