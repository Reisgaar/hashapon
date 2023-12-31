import { Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimalStatsComponent } from 'src/app/pages/popUp/animal-stats/animal-stats.component';
import { BattleStatisticsComponent } from 'src/app/pages/popUp/battle-statistics/battle-statistics.component';
import { ErrorComponent } from 'src/app/pages/popUp/error/error.component';
import { NewEggComponent } from 'src/app/pages/popUp/new-egg/new-egg.component';
import { WaitingGachaponComponent } from 'src/app/pages/popUp/waiting-gachapon/waiting-gachapon.component';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  public activeButton: string = '';
  public walletIsConnected: boolean = false;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<UtilsService>,
    @Inject(MAT_DIALOG_DATA) public sentData: any
  ) { }

  public changeActiveButton(button: string): void {
    if (this.activeButton !== '' && this.walletIsConnected) {
      document.getElementById(this.activeButton).classList.remove('active');
    }
    if (button !== '' && this.walletIsConnected) {
      document.getElementById(button).classList.add('active');
    }
    this.activeButton = button;
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

  /*
   * POP UPS
   */

  // Individual animal stats & interaction
  public openStats(animal: any): void {
    const dialogRef = this.dialog.open(AnimalStatsComponent, {
      panelClass: 'stat-dialog-container',
      data: animal
    });
    document.getElementById('list-buttons').style.filter = 'blur(5px)';
    document.getElementById('lists').style.filter = 'blur(5px)';
    dialogRef.afterClosed().subscribe(result => {
      document.getElementById('list-buttons').style.filter = 'unset';
      document.getElementById('lists').style.filter = 'unset';
      console.log('The dialog was closed');
    });
  }

  // Obtained new Egg
  public openNewEgg(): void {
    const dialogRef = this.dialog.open(NewEggComponent, { panelClass: 'stat-dialog-container' });
    dialogRef.afterClosed().subscribe(result => { console.log('The dialog was closed'); });
  }

  // Open battle statistics
  public openBattleStats(animal1: any, animal2: any): void {
    const dialogRef = this.dialog.open(BattleStatisticsComponent, {
      panelClass: 'battle-stat-dialog-container',
      disableClose: true,
      data: {fighter: animal1, opponent: animal2}
    });
    dialogRef.afterClosed().subscribe(result => { console.log('The dialog was closed'); });
  }

  // Waiting for gachapon buy process
  public openWaitForGachapon(): void {
    const dialogRef = this.dialog.open(WaitingGachaponComponent, { panelClass: 'buy-gachapon-dialog-container', disableClose: true});
    dialogRef.afterClosed().subscribe(result => { console.log('The dialog was closed'); });
  }

  // Any error message
  public openError(errorMessage: string): void {
    const dialogRef = this.dialog.open(ErrorComponent, { panelClass: 'error-dialog-container', data: errorMessage});
    dialogRef.afterClosed().subscribe(result => { console.log('The dialog was closed'); });
  }
}
