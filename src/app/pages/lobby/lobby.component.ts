import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';
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
  ) { }

  ngOnInit(): void {
    if (!this.utilsService.walletIsConnected) { this.router.navigate(['home']); }

    if (!this.fighter) {
      this.openFighterDialog();
    }
  }

  openFighterDialog(): void {
    const dialogRef = this.dialog.open(FighterSelectorComponent, { panelClass: 'list-dialog-container', data: { cat: 'cat-' + location, tab: 'tab-' + location } });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
