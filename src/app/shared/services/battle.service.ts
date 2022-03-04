import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  constructor() { }

  sendToFight(event: any, animal: any): void {
    console.log('Start battle with: ' + animal.name);
    event.stopPropagation();
  }
}
