import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  totalLife1 = this.battleResult.log.assaults[0].c1life;
  totalLife2 = this.battleResult.log.assaults[0].c2life;

  constructor(
    public dialogRef: MatDialogRef<BattleStatisticsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) {
    this.fighter = data.fighter;
    this.opponent = data.opponent;
  }

  ngOnInit(): void {
  }

  changeLifeBar(life1: number, life2: number, result1: number, result2: number): void {

    let actualLife1 = ((life1 - result2) * 100) / this.totalLife1;
    if (actualLife1 < 0) { actualLife1 = 0; }
    let actualLife2 = ((life2 - result1) * 100) / this.totalLife2;
    if (actualLife2 < 0) { actualLife2 = 0; }
    const actualDamage1 = (result2 * 100) / this.totalLife1;
    const actualDamage2 = (result1 * 100) / this.totalLife2;

    document.getElementById('lifebar1').style.width = actualLife1.toString() + '%';
    document.getElementById('lifebar2').style.width = actualLife2.toString() + '%';
    document.getElementById('damagebar1').style.width = actualDamage1.toString() + '%';
    document.getElementById('damagebar2').style.width = actualDamage2.toString() + '%';
  }

  endBattle(): void {
    this.dialogRef.close();
    this.router.navigate(['home']);
  }

}
