import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnimalListComponent } from '../popUp/animal-list/animal-list.component';
import { ConnectionService } from 'src/app/shared/services/connection/connection.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { NftService } from 'src/app/shared/services/connection/nft.service';

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
    public router: Router,
    public connectionService: ConnectionService,
    public dialog: MatDialog,
    private utilsService: UtilsService,
    private dialogService: DialogService,
    private nftService: NftService
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
      this.nftService.getWalletNft(res[0]);
    });
  }

  openDialog(): void {
    this.dialogService.listDialog(this.router.url);
  }

}
