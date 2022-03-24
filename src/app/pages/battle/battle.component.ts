import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { SearchingOpponentComponent } from '../popUp/searching-opponent/searching-opponent.component';
import { adult } from 'src/app/shared/data/animal-data';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {

  fighter: any;
  opponent = adult[Math.floor(Math.random() * 8)];

  constructor(
    public dialogRef: MatDialogRef<BattleComponent>,
    private router: Router,
    public dialog: MatDialog,
    private utilsService: UtilsService
  ) {
    let navigation = this.router.getCurrentNavigation();
    if (navigation.extras.state) {
      this.fighter = navigation.extras.state.data;
    } else {
      this.fighter = null;
    }
  }

  ngOnInit(): void {
    if (!this.utilsService.walletIsConnected || this.fighter === null) {
      this.router.navigate(['home']);
    } else {
      this.openSearchDialog();
    }
  }

  openSearchDialog(): void {
    const dialogRef = this.dialog.open(SearchingOpponentComponent, {
      panelClass: 'waiting-opponent-dialog-container',
      disableClose: true,
      data: { animal: this.fighter }
    });
    document.getElementById('battle').style.visibility = 'hidden';
    document.getElementById('gamescreen').style.filter = 'blur(5px)';

    dialogRef.afterClosed().subscribe(result => {
      document.getElementById('battle').style.visibility = 'visible';
      document.getElementById('gamescreen').style.filter = 'unset';
      this.startBattle();
    });
  }

  async startBattle(): Promise<void> {
    await this.delay(5000);
    this.utilsService.openBattleStats(this.fighter, this.opponent);
  }

  async delay(ms: number): Promise<any> {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
