import { Injectable } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';
import { NetworkService } from '../connection/network.service';
const BuyGachaponAbi = require('../abi/NftFactory.json');

@Injectable({
  providedIn: 'root'
})
export class GachaponService {

  addresses: any;

  constructor(
    private connectionService: ConnectionService,
    private networkService: NetworkService
  ) {
    this.addresses = this.networkService.getAddressNetwork();
  }

  // Function to nuy a new gachapon
  public async buyGachapon(): Promise<any> {
    await this.connectionService.syncAccount();
    const nftFactoryOracle = new this.connectionService.web3js.eth.Contract(BuyGachaponAbi.abi, this.addresses.nftFactoryOracleAddress);
    const price = await nftFactoryOracle.methods.getPriceInBNB('100000000').call();
    return price;
  }
}
