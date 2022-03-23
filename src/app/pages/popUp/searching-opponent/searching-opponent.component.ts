import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-searching-opponent',
  templateUrl: './searching-opponent.component.html',
  styleUrls: ['./searching-opponent.component.scss']
})
export class SearchingOpponentComponent implements OnInit {

  fighter: any;
  opponent: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<SearchingOpponentComponent>
  ) {
    this.fighter = data.animal;
  }

  ngOnInit(): void {
    this.simulateOpponentSearch();
  }

  async simulateOpponentSearch(): Promise<void> {
    await this.getOpponent(5000).then(() => {
      this.dialogRef.close();
    });
  }

  getOpponent(ms: number): Promise<any> {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
