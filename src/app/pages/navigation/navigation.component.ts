import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  walletIsConnected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public connectWallet(): void {
    this.walletIsConnected = true;
  }

}
