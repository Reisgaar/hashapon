import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { egg } from 'src/app/shared/data/animal-data';

@Component({
  selector: 'app-incubation-selector',
  templateUrl: './incubation-selector.component.html',
  styleUrls: ['./incubation-selector.component.scss']
})
export class IncubationSelectorComponent implements OnInit {
  egg: Array<any> = egg;

  constructor(
    public dialogRef: MatDialogRef<IncubationSelectorComponent>,
  ) { }

  ngOnInit(): void {
  }

  selectEgg(egg: any): void {
    this.dialogRef.close(egg);
  }

}
