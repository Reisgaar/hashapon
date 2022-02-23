import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-animal-stats',
  templateUrl: './animal-stats.component.html',
  styleUrls: ['./animal-stats.component.scss']
})
export class AnimalStatsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AnimalStatsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

}
