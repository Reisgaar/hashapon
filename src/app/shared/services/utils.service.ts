import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  public activeButton: string = '';

  constructor() { }

  public changeActiveButton(button: string): void {
    console.log(this.activeButton + '  -  ' + button);
    if (this.activeButton !== '') {
      document.getElementById(this.activeButton).classList.remove('active');
    }
    if (button !== '') {
      document.getElementById(button).classList.add('active');
    }
    this.activeButton = button;
  }
}
