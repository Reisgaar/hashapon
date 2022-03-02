import { Component, HostListener, OnInit } from '@angular/core';
import { SliderService } from 'src/app/shared/services/slider.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

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
    if (event.target.innerWidth > 600) {
      const firstEgg = document.getElementById('first-incubator') as HTMLElement;
      this.actualPosition = 5;
      firstEgg.style.marginLeft = this.actualPosition + 'vw';
    }
  }

  constructor(
    private sliderService: SliderService,
    private utilsService: UtilsService
    ) { }

  ngOnInit(): void {
    this.utilsService.changeActiveButton('button-incubators');
  }

  public moveSlider(next: boolean): void {
    this.actualPosition = this.sliderService.moveSlider(next, this.actualPosition, 'first-incubator', 3);
  }

}
