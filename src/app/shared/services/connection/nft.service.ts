import { Injectable } from '@angular/core';
import { ConnectionService } from './connection.service';
const GachaponERC721Abi = require('../contracts/abi/GachaponERC721.json');
import { egg } from '../../data/animal-data';

@Injectable({
  providedIn: 'root'
})
export class NftService {

  constructor(
    private connectionService: ConnectionService
  ) { }

  async getWalletNft(wallet: any): Promise<any> {
    const contract = new this.connectionService.web3js.eth.Contract(GachaponERC721Abi.abi, GachaponERC721Abi.address);
    console.log(wallet);
    contract.defaultAccount = wallet;
    const nftBalance = await contract.methods.balanceOf(wallet).call();
    console.log(nftBalance);

    for (let i = 0; i < nftBalance; i++) {
      const tokenId = await contract.methods.tokenOfOwnerByIndex(wallet, i).call();
      let tokenMetadataURI = await contract.methods.tokenURI(tokenId).call();
      if (tokenMetadataURI.startsWith('ipfs://')) {
        tokenMetadataURI = 'https://ipfs.io/ipfs/' + tokenMetadataURI.split('ipfs://')[1];
      }
      const tokenMetadata = await fetch(tokenMetadataURI).then ((response) => response.json());
      egg.push(tokenMetadata);
      console.log(tokenMetadata);
    }
  }
}
