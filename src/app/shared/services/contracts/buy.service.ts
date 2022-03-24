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

  uri = '';

  constructor(
    private utilsService: UtilsService,
    private matDialog: MatDialog,
    private connectionService: ConnectionService
  ) { }

  async buyGachapon(): Promise<void> {
    this.mintAndPay(this.uri);
    /*
    this.utilsService.openWaitForGachapon();
    // Add functionality to buy egg
    await this.getEgg(5000);
    // Close dialog and open detail
    this.matDialog.closeAll();
    this.utilsService.openStats(egg[4]);
    */
  }

  async buyIncubator(inc: any): Promise<void> {
    console.log("buy incubator " + inc.type);
  }

  getEgg(ms: number): Promise<any> {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  // Function to get a pair of tokens
  public async mintAndPay(uri: string): Promise<any>{
    await this.connectionService.syncAccount();
    const nftFactory = new this.connectionService.web3js.eth.Contract(GachaponERC721Abi.abi, GachaponERC721Abi.address);
    const userAddr = this.connectionService.accounts[0];
    try {
      return await nftFactory.methods.mintAndPay(uri).send({from: userAddr});
    } catch (e) {
      throw e;
    }
  }
}
