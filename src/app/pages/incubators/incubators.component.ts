import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SliderService } from 'src/app/shared/services/slider.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { incubators } from 'src/app/shared/data/animal-data';
import { IncubationSelectorComponent } from '../popUp/incubation-selector/incubation-selector.component';
import { MatDialog } from '@angular/material/dialog';
import { BuyService } from 'src/app/shared/services/contracts/buy.service';

@Component({
  selector: 'app-incubators',
  templateUrl: './incubators.component.html',
  styleUrls: ['./incubators.component.scss']
})
export class IncubatorsComponent implements OnInit {

  incubators = incubators;
  actualPosition: number = 5;
  sliderItemSize: number;
  sliderItemAmount: number;
  movingInitPosition: number;

  constructor(
    private router: Router,
    private sliderService: SliderService,
    private dialog: MatDialog,
    private utilsService: UtilsService,
    public buyService: BuyService
  ) {
      if (!this.utilsService.walletIsConnected) { this.router.navigate(['home']); }
    }

  ngOnInit(): void {
    this.utilsService.changeActiveButton('button-incubators');
    this.setItemSizeAndAmount(innerWidth);
  }

  @HostListener('window:resize', ['$event'])

  handleResize(event: any): void {
    const firstEgg = document.getElementById('incubator0') as HTMLElement;
    this.actualPosition = 5;
    firstEgg.style.marginLeft = this.actualPosition + 'vw';
    this.setItemSizeAndAmount(event.target.innerWidth);
  }

  setItemSizeAndAmount(width: number): void {
    if (width > 1200) {
      this.sliderItemSize = 33.33;
      this.sliderItemAmount = 3;
    } else if (width > 800) {
      this.sliderItemSize = 50;
      this.sliderItemAmount = 2;
    } else {
      this.sliderItemSize = 100;
      this.sliderItemAmount = 1;
    }
  }

  public moveSlider(next: boolean): void {
    this.actualPosition = this.sliderService.moveSliderOneStep(next, this.actualPosition, 'incubator0', this.incubators.length, this.sliderItemSize, this.sliderItemAmount);
  }

  openIncubatorDialog(): void {
    const dialogRef = this.dialog.open(IncubationSelectorComponent, { panelClass: 'incubator-selector-dialog-container'});
    document.getElementById('gamescreen').style.filter = 'blur(5px)';

    dialogRef.afterClosed().subscribe(result => {
      document.getElementById('gamescreen').style.filter = 'unset';
      console.log(result);
    });
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
