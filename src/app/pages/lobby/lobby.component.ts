import { Component, Inject, OnInit } from '@angular/core';
import { adult } from 'src/app/shared/data/animal-data';
import { BattleService } from 'src/app/shared/services/contracts/battle.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  adults = adult;

  constructor(
    public battleService: BattleService,
    private utilsService: UtilsService,
    private router: Router
  ) {
    if (!this.utilsService.walletIsConnected) {
      this.router.navigate(['home']);
    }
    this.adults.sort( (a, b) => {
      return b.battleTotal - a.battleTotal;
    });
  }

  ngOnInit(): void {
  }

  createStyleForProgressBar(stat: number, maxStat: number, color: string): string {
    return 'linear-gradient(90deg, ' + color+ ' 0%, ' + color + ' ' + (stat * 100 / 40) + '%, white ' + (stat * 100 / 40) + '%, white ' + (maxStat * 100 / 40) + '%, black ' + (maxStat * 100 / 40) + '%, black 100%)';
  }

}
