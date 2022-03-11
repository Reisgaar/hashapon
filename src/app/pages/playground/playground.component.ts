import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { baby } from 'src/app/shared/data/animal-data';
import { SliderService } from 'src/app/shared/services/slider.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  actualPosition: number = 5;
  data: Array<any> = [];

  @HostListener('window:resize', ['$event'])

  handleResize(event: any): void {
    const firstBaby = document.getElementById('baby-0') as HTMLElement;
    if (event.target.innerWidth > 600) {
      this.actualPosition = 5;
      firstBaby.style.marginLeft = '0vw';
    } else {
      firstBaby.style.marginLeft = this.actualPosition + 'vw';
    }
  }

  constructor(
    private router: Router,
    private sliderService: SliderService,
    private utilsService: UtilsService
    ) {
      if (!this.utilsService.walletIsConnected) { this.router.navigate(['home']); }
      for (const a of baby) {
        this.data.push(a);
      }
    }

  ngOnInit(): void {
    this.utilsService.changeActiveButton('button-playground');
    this.data = this.utilsService.shuffleArray(this.data);
  }

  public moveSlider(next: boolean): void {
    this.actualPosition = this.sliderService.moveSlider(next, this.actualPosition, 'baby-0', this.data.length);
  }

}
