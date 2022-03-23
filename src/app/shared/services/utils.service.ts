import { Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimalStatsComponent } from 'src/app/pages/popUp/animal-stats/animal-stats.component';
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

  public openStats(animal: any): void {
    const dialogRef = this.dialog.open(AnimalStatsComponent, {
      panelClass: 'stat-dialog-container',
      data: animal
    });
    dialogRef.afterClosed().subscribe(result => { console.log('The dialog was closed'); });
  }

  public openWaitForGachapon(): void {
    const dialogRef = this.dialog.open(WaitingGachaponComponent, { panelClass: 'stat-dialog-container'});
    dialogRef.afterClosed().subscribe(result => { console.log('The dialog was closed'); });
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
}
