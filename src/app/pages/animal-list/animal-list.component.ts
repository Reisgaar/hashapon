import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimalStatsComponent } from '../animal-stats/animal-stats.component';
import { egg, baby, young, adult } from '../../shared/data/animal-list';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {

  egg: Array<any> = egg;
  baby: Array<any> = baby;
  young: Array<any> = young;
  adult: Array<any> = adult;

  constructor(
    public dialogRef: MatDialogRef<AnimalListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeTab(event: any): void {
    document.getElementById('tab-eggs').classList.remove('active');
    document.getElementById('tab-babies').classList.remove('active');
    document.getElementById('tab-youngs').classList.remove('active');
    document.getElementById('tab-adults').classList.remove('active');

    document.getElementById('cat-eggs').classList.add('hidden');
    document.getElementById('cat-babies').classList.add('hidden');
    document.getElementById('cat-youngs').classList.add('hidden');
    document.getElementById('cat-adults').classList.add('hidden');

    document.getElementById(event.target.id).classList.add('active');
    document.getElementById(event.target.id.replace('tab-', 'cat-')).classList.remove('hidden');
  }

  public openStats(ref: string, nam: string, sta: Array<any>): void {

    const dialogRef = this.dialog.open(AnimalStatsComponent, {
      panelClass: 'stat-dialog-container',
      data: { reference: ref, name: nam, stats: sta}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public upgrade(event: any, category: string): void {

    if (category === 'egg') {
      console.log('upgrading ' + category);
      event.stopPropagation();
    } else if (category === 'baby') {
      console.log('upgrading ' + category);
      event.stopPropagation();
    } else if (category === 'young') {
      console.log('upgrading ' + category);
      event.stopPropagation();
    } else {
      console.log('error');
    }
  }

}
