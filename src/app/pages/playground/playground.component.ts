import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimalStatsComponent } from '../animal-stats/animal-stats.component';
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
  data: Array<any> = baby;

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
    public dialogRef: MatDialogRef<PlaygroundComponent>,
    @Inject(MAT_DIALOG_DATA) public sentData: any,
    public dialog: MatDialog,
    private sliderService: SliderService,
    private utilsService: UtilsService
    ) {
      if (!this.utilsService.walletIsConnected) { this.router.navigate(['home']); }
    }

  ngOnInit(): void {
    this.utilsService.changeActiveButton('button-playground');
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
    this.actualPosition = this.sliderService.moveSlider(next, this.actualPosition, 'baby-0', this.data.length);
  }

  public openStats(baby: any): void {
    const dialogRef = this.dialog.open(AnimalStatsComponent, {
      panelClass: 'stat-dialog-container',
      data: baby
    });
    dialogRef.afterClosed().subscribe(result => { console.log('The dialog was closed'); });
  }

}
