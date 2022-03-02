import { Component, HostListener, OnInit } from '@angular/core';
import { egg } from 'src/app/shared/data/animal-data';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-eggs',
  templateUrl: './eggs.component.html',
  styleUrls: ['./eggs.component.scss']
})

export class EggsComponent implements OnInit {

  actualPosition: number = 0;
  data: Array<any> = egg;

  @HostListener('window:resize', ['$event'])

  handleResize(event: any): void {
    if (event.target.innerWidth > 600) {
      const firstEgg = document.getElementById('egg-0') as HTMLElement;
      this.actualPosition = 0;
      firstEgg.style.marginLeft = this.actualPosition + 'vw';
    }
  }


  constructor(private utilsService: UtilsService) { }

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
    const firstEgg = document.getElementById('egg-0') as HTMLElement;
    // Set actual position
    if (next) {
      this.actualPosition = this.actualPosition - 90;
    } else {
      this.actualPosition = this.actualPosition + 90;
    }
    // Check if first or last
    if (this.actualPosition === (-90 * this.data.length)) {
      this.actualPosition = 0;
    } else if (this.actualPosition === 90) {
      this.actualPosition = -90 * (this.data.length - 1);
    }
    // Update position
    firstEgg.style.marginLeft = this.actualPosition + 'vw';
  }

}
