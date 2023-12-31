import { Injectable } from '@angular/core';
import { ConnectionService } from './connection.service';
const GachaponERC721ProxyAbi = require('../contracts/abi/GachaponERC721Proxy.json');
import { egg } from '../../data/animal-data';

@Injectable({
  providedIn: 'root'
})
export class NftService {

  constructor(
    private connectionService: ConnectionService
  ) { }



  async getWalletNft(): Promise<any> {
    const wallet = this.connectionService.getWalletAddress();
    const contract = new this.connectionService.web3js.eth.Contract(GachaponERC721ProxyAbi.abi, GachaponERC721ProxyAbi.address);
    contract.defaultAccount = wallet;
    const nftBalance = await contract.methods.balanceOf(wallet).call();

    for (let i = 0; i < nftBalance; i++) {
      let tokenMetadata: any;
      try {
        const tokenId = await contract.methods.tokenOfOwnerByIndex(wallet, i).call();
        let tokenMetadataURI = await contract.methods.tokenURI(tokenId).call();
        console.log(tokenId);
        console.log(tokenMetadataURI);
        tokenMetadataURI = this.setUrlIfIpfs(tokenMetadataURI);
        tokenMetadata = await fetch(tokenMetadataURI).then ((response) => response.json());
      } catch (error) {
        tokenMetadata = {image: 'waiting'};
      }
      egg[i] = tokenMetadata;
      console.log(tokenMetadata);
    }
    console.log(egg);
  }

  setUrlIfIpfs(url: string): string {
    let tokenMetadataURI = url;
    if (tokenMetadataURI.startsWith('ipfs://')) {
      tokenMetadataURI = 'https://ipfs.io/ipfs/' + tokenMetadataURI.split('ipfs://')[1];
    }
    return url;
  }
}
