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
  data: Array<any> = egg;

  @HostListener('window:resize', ['$event'])

  handleResize(event: any): void {
    if (event.target.innerWidth > 600) {
      const firstEgg = document.getElementById('egg-0') as HTMLElement;
      this.actualPosition = 5;
      firstEgg.style.marginLeft = this.actualPosition + 'vw';
    }
  }


  constructor(
    private router: Router,
    private utilsService: UtilsService,
    private sliderService: SliderService
  ) {
    if (!this.utilsService.walletIsConnected) { this.router.navigate(['home']); }
  }

  ngOnInit(): void {
    this.utilsService.changeActiveButton('button-eggs');
    this.data = this.shuffleArray(this.data);
  }

  public shuffleArray(array: Array<any>): any {
    let currentIndex = array.length;
    let randomIndex: any;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  public moveSlider(next: boolean): void {
    this.actualPosition = this.sliderService.moveSlider(next, this.actualPosition, 'egg-0', this.data.length);
  }

}
