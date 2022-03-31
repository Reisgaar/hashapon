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
  data: Array<any> = [];
  mobileSchool: boolean;
  movingInitPosition: number;

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
    for (const a of young) {
      this.data.push(a);
    }
  }

  ngOnInit(): void {
    this.utilsService.changeActiveButton('button-school');
    this.data = this.utilsService.shuffleArray(this.data);
    this.checkMobileWidth(innerWidth);
  }

  checkMobileWidth(width: number): void {
    if (width > 560) {
      this.mobileSchool = false;
    } else {
      this.mobileSchool = true;
    }
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
