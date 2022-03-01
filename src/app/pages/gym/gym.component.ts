import { Component, HostListener, OnInit } from '@angular/core';
import { adult } from 'src/app/shared/data/animal-data';
import { SliderService } from 'src/app/shared/services/slider.service';

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

  constructor(private sliderService: SliderService) { }

  ngOnInit(): void {
    this.getMachineAnimals();
    console.log(this.machineBoxingAnimal);
    console.log(this.machineHeightAnimal);
    console.log(this.machineRunningAnimal);
  }

  public moveSlider(next: boolean): void {
    this.actualPosition = this.sliderService.moveSlider(next, this.actualPosition, 'first-machine');
  }

  public getMachineAnimals(): void {
    this.machineHeightAnimal = adult[1];
    this.machineBoxingAnimal = adult[5];
    this.machineRunningAnimal = adult[8];
  }

}
