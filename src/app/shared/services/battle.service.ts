import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  constructor(
    private router: Router,
    private matDialog: MatDialog
  ) { }

  sendToFight(animal: any): void {
    console.log('Start battle with: ' + animal.name);
  }

  public sendFighterToLobby(event: any, animal: any): void {
    event.stopPropagation();
    this.matDialog.closeAll();
    this.router.navigate(['/pages/lobby'], { queryParams: {data: JSON.stringify(animal)} });
  }
}
