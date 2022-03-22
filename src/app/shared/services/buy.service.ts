import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { egg } from '../data/animal-data';
import { UtilsService } from './utils.service';


@Injectable({
  providedIn: 'root'
})
export class BuyService {

  constructor(
    private utilsService: UtilsService,
    private matDialog: MatDialog
  ) { }

  async buyGachapon(): Promise<void> {
    this.utilsService.openWaitForGachapon();

    // Add functionality to buy egg
    await this.getEgg(5000);

    // Close dialog and open detail
    this.matDialog.closeAll();
    this.utilsService.openStats(egg[4]);
  }

  async buyIncubator(): Promise<void> {
    console.log("buy incubator");
  }

  getEgg(ms: number): Promise<any> {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
