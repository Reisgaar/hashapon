import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BattleService } from 'src/app/shared/services/battle.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { FighterSelectorComponent } from '../fighter-selector/fighter-selector.component';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  fighter: any;

  constructor(
    private router: Router,
    private utilsService: UtilsService,
    public dialog: MatDialog,
    public battleService: BattleService
  ) {
    if (!this.utilsService.walletIsConnected) {
      this.router.navigate(['home']);
    }
    console.log('init lobby');
    let navigation = this.router.getCurrentNavigation();
    if (navigation.extras.state) {
      this.fighter = navigation.extras.state.data;
    } else {
      this.fighter = null;
    }
  }

  ngOnInit(): void {
    this.utilsService.changeActiveButton('');
    if (!this.fighter) {
      this.openFighterDialog();
    }
  }

  openFighterDialog(): void {
    const dialogRef = this.dialog.open(FighterSelectorComponent, { panelClass: 'fighter-dialog-container'});
    document.getElementById('selectFighter').style.visibility = 'hidden';
    document.getElementById('gamescreen').style.filter = 'blur(5px)';

    dialogRef.afterClosed().subscribe(result => {
      document.getElementById('selectFighter').style.visibility = 'visible';
      document.getElementById('gamescreen').style.filter = 'unset';
      this.fighter = result;
    });
  }

}
