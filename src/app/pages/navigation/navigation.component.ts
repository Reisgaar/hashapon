import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AnimalListComponent } from '../animal-list/animal-list.component';
import { ConnectionService } from 'src/app/shared/services/connection/connection.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  walletIsConnected: boolean = false;
  animal: string;
  name: string;

  constructor(
    public connectionService: ConnectionService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  public connectWallet(): void {
    this.connectionService.connectAccount().then( () => {
      this.walletIsConnected = true;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AnimalListComponent, { panelClass: 'list-dialog-container' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
