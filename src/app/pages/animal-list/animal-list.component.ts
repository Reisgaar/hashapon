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
  baby: Array<any> = [ {name: 'Homeless Goddess', type: 'baby1', stats: {atk: 1, def: 4, vit: 2}}, {name: 'Lucky Tsunami', type: 'baby2', stats: {atk: 5, def: 4, vit: 5}}, {name: 'Zonked Unicorn', type: 'baby3', stats: {atk: 0, def: 0, vit: 1}}, {name: 'Sensible Gangster', type: 'baby4', stats: {atk: 5, def: 0, vit: 3}} ];
  young: Array<any> = [ {name: 'Kind Nemesis', type: 'young1', stats: {atk: 10, def: 7, vit: 11}}, {name: 'Emotional Destroyer', type: 'young2', stats: {atk: 2, def: 4, vit: 9}}, {name: 'Popular Whistle', type: 'young3', stats: {atk: 1, def: 7, vit: 8}}, {name: 'Garrulous Doctor', type: 'young4', stats: {atk: 10, def: 11, vit: 10}}, {name: 'Carnivorous King', type: 'young5', stats: {atk: 10, def: 7, vit: 2}}, {name: 'Youthful Philosopher', type: 'young6', stats: {atk: 12, def: 1, vit: 5}}, {name: 'Indestructible Sadist', type: 'young7', stats: {atk: 7, def: 8, vit: 7}}, {name: 'Radical Intruder', type: 'young8', stats: {atk: 10, def: 4, vit: 9}}, {name: 'Wise Banana', type: 'young9', stats: {atk: 9, def: 4, vit: 12}}, {name: 'Jealous Monarch', type: 'young10', stats: {atk: 13, def: 11, vit: 12}} ];
  adult: Array<any> = [ {name: 'Macabre Pacifist', type: 'adult1', stats: {atk: 25, def: 19, vit: 20}}, {name: 'Dandy Sleepwalker', type: 'adult2', stats: {atk: 4, def: 15, vit: 22}}, {name: 'Ugly Maiden', type: 'adult3', stats: {atk: 30, def: 25, vit: 28}}, {name: 'Bizarre Comrade', type: 'adult4', stats: {atk: 0, def: 0, vit: 0}}, {name: 'Odorous Butcher', type: 'adult5', stats: {atk: 20, def: 14, vit: 25}}, {name: 'The Nightmare', type: 'adult6', stats: {atk: 25, def: 22, vit: 27}}, {name: 'Flammable Anarchist', type: 'adult7', stats: {atk: 10, def: 21, vit: 9}}, {name: 'Abandoned Pet', type: 'adult8', stats: {atk: 4, def: 15, vit: 23}}, {name: 'Viscous Nudist', type: 'adult9', stats: {atk: 22, def: 17, vit: 11}}, {name: 'Questionable Proffesional', type: 'adult10', stats: {atk: 30, def: 0, vit:15}}, {name: 'Neurotic Villain', type: 'adult11', stats: {atk: 0, def: 30, vit:30}} ];

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
