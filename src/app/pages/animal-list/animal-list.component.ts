import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimalStatsComponent } from '../animal-stats/animal-stats.component';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {

  egg: Array<any> = [ {type: 'birds'}, {type: 'canines'}, {type: 'felines'}, {type: 'marsupials'}, {type: 'primates'}, {type: 'reptiles'}, {type: 'rodents'}, {type: 'ursids'} ];
  baby: Array<any> = [ {type: 'baby'}, {type: 'baby'}, {type: 'baby'}, {type: 'baby'} ];
  young: Array<any> = [ {type: 'young'}, {type: 'young'}, {type: 'young'}, {type: 'young'}, {type: 'young'}, {type: 'young'}, {type: 'young'}, {type: 'young'}, {type: 'young'}, {type: 'young'} ];
  adult: Array<any> = [ {type: 'adult'}, {type: 'adult'}, {type: 'adult'}, {type: 'adult'}, {type: 'adult'}, {type: 'adult'}, {type: 'adult'}, {type: 'adult'}, {type: 'adult'}, {type: 'adult'}, {type: 'adult'}, {type: 'adult'} ];

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

  public openStats(): void {
    console.log('open stats');

    const dialogRef = this.dialog.open(AnimalStatsComponent, {
      panelClass: 'stat-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
