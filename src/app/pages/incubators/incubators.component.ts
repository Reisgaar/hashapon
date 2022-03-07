import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SliderService } from 'src/app/shared/services/slider.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { incubators } from 'src/app/shared/data/animal-data';

@Component({
  selector: 'app-incubators',
  templateUrl: './incubators.component.html',
  styleUrls: ['./incubators.component.scss']
})
export class IncubatorsComponent implements OnInit {

  incubators = incubators;
  machineHeightAnimal: any;
  machineBoxingAnimal: any;
  machineRunningAnimal: any;
  actualPosition: number = 5;
  sliderItemSize: number;
  sliderItemAmount: number;

  @HostListener('window:resize', ['$event'])

  handleResize(event: any): void {
    const firstEgg = document.getElementById('incubator0') as HTMLElement;
    this.actualPosition = 5;
    firstEgg.style.marginLeft = this.actualPosition + 'vw';
    if (event.target.innerWidth > 1200) {
      this.sliderItemSize = 25;
      this.sliderItemAmount = 4;
    } else if (event.target.innerWidth > 900) {
      this.sliderItemSize = 33.33;
      this.sliderItemAmount = 3;
    } else if (event.target.innerWidth > 600) {
      this.sliderItemSize = 50;
      this.sliderItemAmount = 2;
    } else {
      this.sliderItemSize = 100;
      this.sliderItemAmount = 1;
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
    this.utilsService.changeActiveButton('button-incubators');
  }

  public moveSlider(next: boolean): void {
    console.log(this.incubators.length);
    this.actualPosition = this.sliderService.moveSliderOneStep(next, this.actualPosition, 'incubator0', this.incubators.length, this.sliderItemSize, this.sliderItemAmount);
  }

}
