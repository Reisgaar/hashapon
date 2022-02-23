import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AnimalListComponent } from '../animal-list/animal-list.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  walletIsConnected: boolean = false;
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public connectWallet(): void {
    this.walletIsConnected = true;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AnimalListComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
