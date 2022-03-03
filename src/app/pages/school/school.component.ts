import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  @HostListener('window:resize', ['$event'])

  handleResize(event: any): void {
    if (event.target.innerWidth > 600) {
      const firstYoung = document.getElementById('young-0') as HTMLElement;
      this.actualPosition = 5;
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

}
