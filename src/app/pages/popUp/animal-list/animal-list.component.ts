import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { types, egg, baby, young, adult } from '../../../shared/data/animal-data';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { UpgradeService } from 'src/app/shared/services/contracts/upgrade.service';
import { BattleService } from 'src/app/shared/services/contracts/battle.service';
import { Router } from '@angular/router';
import { NftService } from 'src/app/shared/services/connection/nft.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {

  egg: Array<any> = egg;
  baby: Array<any> = baby;
  young: Array<any> = young;
  adult: Array<any> = adult;
  types: Array<string> = types;
  refreshing: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AnimalListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public utilsService: UtilsService,
    public upgradeService: UpgradeService,
    public battleService: BattleService,
    public router: Router,
    private nftService: NftService
  ) { }

  ngOnInit(): void {
    this.nftService.getWalletNft();
    document.getElementById(this.data.tab).classList.add('active');
    document.getElementById(this.data.cat).classList.remove('hidden');
  }

  async refreshList(): Promise<void> {
    this.refreshing = true;
    await this.nftService.getWalletNft();
    this.refreshing = false;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  changeTab(event: any): void {
    document.getElementById('tab-eggs').classList.remove('active');
    document.getElementById('tab-babies').classList.remove('active');
    document.getElementById('tab-youngs').classList.remove('active');
    document.getElementById('tab-adults').classList.remove('active');

    document.getElementById('cat-eggs').classList.add('hidden');
    document.getElementById('cat-babies').classList.add('hidden');
    document.getElementById('cat-youngs').classList.add('hidden');
    document.getElementById('cat-adults').classList.add('hidden');

    document.getElementById(event.target.id).classList.add('active');
    document.getElementById(event.target.id.replace('tab-', 'cat-')).classList.remove('hidden');
  }

  public upgrade(event: any, category: string): void {

    if (category === 'egg') {
      console.log('upgrading ' + category);
      event.stopPropagation();
    } else if (category === 'baby') {
      console.log('upgrading ' + category);
      event.stopPropagation();
    } else if (category === 'young') {
      console.log('upgrading ' + category);
      event.stopPropagation();
    } else {
      console.log('error');
    }
  }

}
