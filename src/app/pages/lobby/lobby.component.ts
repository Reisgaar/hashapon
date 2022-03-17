import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BattleService } from 'src/app/shared/services/battle.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  fighter: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private utilsService: UtilsService,
    public dialog: MatDialog,
    public battleService: BattleService,
    private dialogService: DialogService
  ) {
    if (!this.utilsService.walletIsConnected) {
      this.router.navigate(['home']);
    }
    this.route.queryParams.subscribe(params => {
      if (params.data) {
        this.fighter = JSON.parse(params.data);
        console.log(this.fighter);
      }
    });
  }

  ngOnInit(): void {
    this.utilsService.changeActiveButton('');
    if (!this.fighter) {
      this.openFighterDialog();
    }
  }

  openFighterDialog(): void {
    this.fighter = this.dialogService.fighterDialog();
  }

  removeFighter(): void {
    this.fighter = null;
  }

}
