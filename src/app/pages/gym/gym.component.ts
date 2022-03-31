import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adult } from 'src/app/shared/data/animal-data';
import { SliderService } from 'src/app/shared/services/slider.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

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
  movingInitPosition: number;

  @HostListener('window:resize', ['$event'])

  handleResize(event: any): void {
    if (event.target.innerWidth > 1000) {
      const firstEgg = document.getElementById('first-machine') as HTMLElement;
      this.actualPosition = 0;
      firstEgg.style.marginLeft = this.actualPosition + 'vw';
    }
  }

  constructor(
    private router: Router,
    private sliderService: SliderService,
    private utilsService: UtilsService
  ) {
    if (!this.utilsService.walletIsConnected) { this.router.navigate(['home']); }
  }

  ngOnInit(): void {
    this.utilsService.changeActiveButton('button-gym');
    this.getMachineAnimals();
    console.log(this.machineBoxingAnimal);
    console.log(this.machineHeightAnimal);
    console.log(this.machineRunningAnimal);
  }

  public moveSlider(next: boolean): void {
    this.actualPosition = this.sliderService.moveSlider(next, this.actualPosition, 'first-machine', 3);
  }

  public getMachineAnimals(): void {
    for (const a of adult) {
      switch (a.upgradingStat) {
        case(0): this.machineHeightAnimal = a; break;
        case(1): this.machineBoxingAnimal = a; break;
        case(2): this.machineRunningAnimal = a; break;
      }
    }
  }


  // SLIDER CLICK AND TOUCH MOVEMENT

  mouseStartSlider(e: any, position: number): void {
    e.preventDefault();
    this.movingInitPosition = position;
  }

  mouseStopSlider(position: number): void {
    if (this.movingInitPosition < position) { this.moveSlider(false); }
    else if (this.movingInitPosition > position) { this.moveSlider(true); }
  }

}
