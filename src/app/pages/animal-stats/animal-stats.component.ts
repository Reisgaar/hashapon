import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpgradeService } from 'src/app/shared/services/upgrade.service';

@Component({
  selector: 'app-animal-stats',
  templateUrl: './animal-stats.component.html',
  styleUrls: ['./animal-stats.component.scss']
})
export class AnimalStatsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AnimalStatsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public upgradeService: UpgradeService
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
