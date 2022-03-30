import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NftService } from 'src/app/shared/services/connection/nft.service';
import { UpgradeService } from 'src/app/shared/services/contracts/upgrade.service';

@Component({
  selector: 'app-animal-stats',
  templateUrl: './animal-stats.component.html',
  styleUrls: ['./animal-stats.component.scss']
})
export class AnimalStatsComponent implements OnInit {

  refreshing: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AnimalStatsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public upgradeService: UpgradeService,
    private nftService: NftService
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  async refreshList(): Promise<void> {
    this.refreshing = true;
    await this.nftService.getWalletNft();
    this.refreshing = false;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
