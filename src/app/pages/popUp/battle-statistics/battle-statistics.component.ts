import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { battle } from 'src/app/shared/data/last-battle';

@Component({
  selector: 'app-battle-statistics',
  templateUrl: './battle-statistics.component.html',
  styleUrls: ['./battle-statistics.component.scss']
})
export class BattleStatisticsComponent implements OnInit {

  battleResult = battle;
  fighter: any;
  opponent: any;

  constructor(
    public dialogRef: MatDialogRef<BattleStatisticsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.fighter = data.fighter;
    this.opponent = data.opponent;
  }

  ngOnInit(): void {
  }

}
