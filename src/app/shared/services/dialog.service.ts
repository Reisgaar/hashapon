import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FighterSelectorComponent } from 'src/app/pages/fighter-selector/fighter-selector.component';
import { AnimalListComponent } from 'src/app/pages/animal-list/animal-list.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    public dialog: MatDialog
  ) { }

  listDialog(url: string): void {
    let location: string;
    if (url.includes('playground')) {
      location = 'babies';
    } else if (url.includes('school')) {
      location = 'youngs';
    } else if (url.includes('gym')) {
      location = 'adults';
    } else {
      location = 'eggs';
    }
    const dialogRef = this.dialog.open(AnimalListComponent, { panelClass: 'list-dialog-container', data: { cat: 'cat-' + location, tab: 'tab-' + location } });
    document.getElementById('gamescreen').style.filter = 'blur(5px)';

    dialogRef.afterClosed().subscribe(result => {
      document.getElementById('gamescreen').style.filter = 'unset';
      console.log('The dialog was closed');
    });
  }

  fighterDialog(): any {
    const dialogRef = this.dialog.open(FighterSelectorComponent, { panelClass: 'fighter-dialog-container'});
    document.getElementById('selectFighter').style.visibility = 'hidden';
    document.getElementById('gamescreen').style.filter = 'blur(5px)';

    dialogRef.afterClosed().subscribe(result => {
      document.getElementById('selectFighter').style.visibility = 'visible';
      document.getElementById('gamescreen').style.filter = 'unset';
    });
  }
}
