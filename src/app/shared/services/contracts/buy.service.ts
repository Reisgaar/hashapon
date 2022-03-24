import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { egg } from '../../data/animal-data';
import { ConnectionService } from '../connection/connection.service';
import { UtilsService } from './../utils.service';
const GachaponERC721Abi = require('./abi/GachaponERC721.json');


@Injectable({
  providedIn: 'root'
})
export class BuyService {

  constructor(
    private utilsService: UtilsService,
    private matDialog: MatDialog,
    private connectionService: ConnectionService
  ) { }

  async buyGachapon(): Promise<void> {
    this.utilsService.openWaitForGachapon();
    // Add functionality to buy egg
    try {
      await this.mintAndPay();
      // Get new egg
      let newEgg = egg[Math.floor(Math.random() * egg.length)];
      // Close dialog and open detail
      this.matDialog.closeAll();
      this.utilsService.openNewEgg(newEgg);
    } catch (error) {
      console.log('error');
      this.matDialog.closeAll();
      this.utilsService.openError(error.message);
    }
  }

  async buyIncubator(inc: any): Promise<void> {
    console.log("buy incubator " + inc.type);
  }

  // Function to get a pair of tokens
  public async mintAndPay(): Promise<any>{
    await this.connectionService.syncAccount();
    const nftFactory = new this.connectionService.web3js.eth.Contract(GachaponERC721Abi.abi, GachaponERC721Abi.address);
    const userAddr = this.connectionService.accounts[0];
    try {
      return await nftFactory.methods.mintAndPay().send({from: userAddr});
    } catch (e) {
      throw e;
    }
  }
}
