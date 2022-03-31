import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { egg } from 'src/app/shared/data/animal-data';
import { SliderService } from 'src/app/shared/services/slider.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-eggs',
  templateUrl: './eggs.component.html',
  styleUrls: ['./eggs.component.scss']
})

export class EggsComponent implements OnInit {

  actualPosition: number = 5;
  data: Array<any> = [];
  movingInitPosition: number;

  @HostListener('window:resize', ['$event'])

  handleResize(event: any): void {
    const firstEgg = document.getElementById('egg-0') as HTMLElement;
    if (event.target.innerWidth > 600) {
      this.actualPosition = 5;
      firstEgg.style.marginLeft = '0vw';
    } else {
      firstEgg.style.marginLeft = this.actualPosition + 'vw';
    }
  }


  constructor(
    private router: Router,
    private utilsService: UtilsService,
    private sliderService: SliderService
  ) {
    if (!this.utilsService.walletIsConnected) { this.router.navigate(['home']); }
    for (const a of egg) {
      this.data.push(a);
    }
  }

  ngOnInit(): void {
    this.utilsService.changeActiveButton('button-eggs');
    this.data = this.utilsService.shuffleArray(this.data);
  }

  public moveSlider(next: boolean): void {
    this.actualPosition = this.sliderService.moveSlider(next, this.actualPosition, 'egg-0', this.data.length);
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
