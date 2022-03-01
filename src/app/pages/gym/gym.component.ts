import { Component, HostListener, OnInit } from '@angular/core';
import { adult } from 'src/app/shared/data/animal-data';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.scss']
})
export class GymComponent implements OnInit {

  machineHeightAnimal: any;
  machineBoxingAnimal: any;
  machineRunningAnimal: any;
  actualPosition: number = 5;

  @HostListener('window:resize', ['$event'])

  handleResize(event: any): void {
    if (event.target.innerWidth > 1000) {
      const firstEgg = document.getElementById('first-machine') as HTMLElement;
      this.actualPosition = 0;
      firstEgg.style.marginLeft = this.actualPosition + 'vw';
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.getMachineAnimals();
    console.log(this.machineBoxingAnimal);
    console.log(this.machineHeightAnimal);
    console.log(this.machineRunningAnimal);
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
    } else if (this.actualPosition === 105) {
      this.actualPosition = -195;
    }
    // Update position
    firstBaby.style.marginLeft = this.actualPosition + 'vw';
  }

  public getMachineAnimals(): void {
    this.machineHeightAnimal = adult[1];
    this.machineBoxingAnimal = adult[5];
    this.machineRunningAnimal = adult[8];
  }

}
