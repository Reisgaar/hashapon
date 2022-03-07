import { Component, Inject, OnInit } from '@angular/core';
import { adult } from 'src/app/shared/data/animal-data';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-fighter-selector',
  templateUrl: './fighter-selector.component.html',
  styleUrls: ['./fighter-selector.component.scss']
})
export class FighterSelectorComponent implements OnInit {

  adults = adult;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {animal: any},
    public dialogRef: MatDialogRef<FighterSelectorComponent>
  ) {
    this.adults.sort( (a, b) => {
      return b.battleTotal - a.battleTotal;
    });
  }

  ngOnInit(): void {
  }

  selectFigther(animal: any): void {
    this.dialogRef.close(animal);
  }

}
