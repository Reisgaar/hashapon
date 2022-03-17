import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FighterSelectorComponent } from 'src/app/pages/fighter-selector/fighter-selector.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    public dialog: MatDialog
  ) { }

  fighterDialog(): any {
    const dialogRef = this.dialog.open(FighterSelectorComponent, { panelClass: 'list-dialog-container'});
    document.getElementById('selectFighter').style.visibility = 'hidden';
    document.getElementById('gamescreen').style.filter = 'blur(5px)';

    dialogRef.afterClosed().subscribe(result => {
      document.getElementById('selectFighter').style.visibility = 'visible';
      document.getElementById('gamescreen').style.filter = 'unset';
      if (result) {
        return result;
      } else {
        return null;
      }
    });
  }
}
