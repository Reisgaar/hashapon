import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { adult } from 'src/app/shared/data/animal-data';
import { PairingComponent } from '../popUp/pairing/pairing.component';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {

  fighter: any;
  opponent = adult[Math.floor(Math.random() * adult.length)];

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
      this.openPairingDialog();
    }
  }

  openPairingDialog(): void {
    const dialogRef = this.dialog.open(PairingComponent, {
      panelClass: 'waiting-opponent-dialog-container',
      disableClose: true,
      data: { fighter: this.fighter, opponent: this.opponent }
    });
    document.getElementById('battle').style.visibility = 'hidden';
    document.getElementById('gamescreen').style.filter = 'blur(5px)';

    dialogRef.afterClosed().subscribe(result => {
      const battle = document.getElementById('battle');
      battle.style.visibility = 'visible';
      battle.classList.add('animate');
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
