import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimalStatsComponent } from '../animal-stats/animal-stats.component';
import { young } from 'src/app/shared/data/animal-data';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {

  actualPosition: number = 0;
  data: Array<any> = young;

  @HostListener('window:resize', ['$event'])

  handleResize(event: any) {
    if (event.target.innerWidth > 600) {
      const firstYoung = document.getElementById('young-0') as HTMLElement;
      this.actualPosition = 0;
      firstYoung.style.marginLeft = this.actualPosition + 'vw';
    }
  }

  constructor(
    public dialogRef: MatDialogRef<SchoolComponent>,
    @Inject(MAT_DIALOG_DATA) public sentData: any,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
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
    const firstYoung = document.getElementById('young-0') as HTMLElement;
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
    firstYoung.style.marginLeft = this.actualPosition + 'vw';
  }

  public openStats(ref: string, nam: string, sta: Array<any>): void {
    const dialogRef = this.dialog.open(AnimalStatsComponent, {
      panelClass: 'stat-dialog-container',
      data: { reference: ref, name: nam, stats: sta}
    });
    dialogRef.afterClosed().subscribe(result => { console.log('The dialog was closed'); });
  }

}
