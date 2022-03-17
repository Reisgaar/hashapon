import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnimalListComponent } from '../animal-list/animal-list.component';
import { ConnectionService } from 'src/app/shared/services/connection/connection.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  walletIsConnected: boolean = false;
  account: string;
  animal: string;
  name: string;

  constructor(
    private router: Router,
    public connectionService: ConnectionService,
    public dialog: MatDialog,
    private utilsService: UtilsService,
    private dialogService: DialogService
    ) { }

  ngOnInit(): void {
  }

  public connectWallet(): void {
    this.connectionService.connectAccount().then( (res) => {
      if (res){
        this.walletIsConnected = true;
        this.account = res[0].substring(0, 4) + '...' + res[0].substring(res[0].length - 4);
        this.utilsService.walletIsConnected = true;
      }
    });
  }

  openDialog(): void {
    let location: string;
    if (this.router.url.includes('playground')) {
      location = 'babies';
    } else if (this.router.url.includes('school')) {
      location = 'youngs';
    } else if (this.router.url.includes('gym')) {
      location = 'adults';
    } else {
      location = 'eggs';
    }
    const dialogRef = this.dialog.open(AnimalListComponent, { panelClass: 'list-dialog-container', data: { cat: 'cat-' + location, tab: 'tab-' + location } });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
