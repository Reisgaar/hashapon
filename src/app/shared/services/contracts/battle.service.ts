import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { adult } from '../../data/animal-data';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  constructor(
    private router: Router,
    private matDialog: MatDialog
  ) { }

  watchBattle(animal: any): void {
    let navigationExtras: NavigationExtras = {
      state: {
        data: animal
      }
    };
    this.router.navigate(['/pages/battle'], navigationExtras);
  }

  sendToFight(event: any, animal: any): void {
    event.stopPropagation();
    console.log('Start battle with: ' + animal.name);
    console.log(adult);
    adult.find( index => index.name === animal.name).lookingOpponent = true;
  }

  public sendFighterToLobby(event: any, animal: any): void {
    event.stopPropagation();
    this.matDialog.closeAll();
    let navigationExtras: NavigationExtras = {
      state: {
        data: animal
      }
    };
    this.router.navigate(['/']).then(() => {
      this.router.navigate(['/pages/lobby'], navigationExtras);
    });
  }
}
