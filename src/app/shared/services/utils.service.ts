import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  public activeButton: string = '';
  public walletIsConnected: boolean = false;

  constructor() { }

  public changeActiveButton(button: string): void {
    console.log(this.activeButton + '  -  ' + button);
    if (this.activeButton !== '' && this.walletIsConnected) {
      document.getElementById(this.activeButton).classList.remove('active');
    }
    if (button !== '' && this.walletIsConnected) {
      document.getElementById(button).classList.add('active');
    }
    this.activeButton = button;
  }
}
