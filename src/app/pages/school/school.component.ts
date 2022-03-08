import { Component, HostListener, OnInit } from '@angular/core';
import { young } from 'src/app/shared/data/animal-data';
import { SliderService } from 'src/app/shared/services/slider.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {

  actualPosition: number = 5;
  data: Array<any> = young;
  mobileSchool: boolean;

  @HostListener('window:resize', ['$event'])

  handleResize(event: any): void {
    const firstYoung = document.getElementById('young-0') as HTMLElement;
    if (event.target.innerWidth > 850) {
      this.actualPosition = 5;
      firstYoung.style.marginLeft = '0vw';
    } else {
      this.checkMobileWidth(event.target.innerWidth);
      firstYoung.style.marginLeft = this.actualPosition + 'vw';
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
    this.utilsService.changeActiveButton('button-school');
    this.data = this.shuffleArray(this.data);
    this.checkMobileWidth(innerWidth);
  }

  checkMobileWidth(width: number): void {
    if (width > 650) {
      this.mobileSchool = false;
    } else {
      this.mobileSchool = true;
    }
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
    this.actualPosition = this.sliderService.moveSlider(next, this.actualPosition, 'young-0', this.data.length);
  }

  getTable(n: number): number {
    if (n % 3 === 0) { return 2; }
    else if (n % 2 === 0) { return 1; }
    else if (n % 3 === 0) { return 0; }
    else { return 0; }
  }

}
