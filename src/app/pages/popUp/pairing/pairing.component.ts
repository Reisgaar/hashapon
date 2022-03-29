import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pairing',
  templateUrl: './pairing.component.html',
  styleUrls: ['./pairing.component.scss']
})
export class PairingComponent implements OnInit {

  fighter: any;
  opponent: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PairingComponent>
  ) {
    this.fighter = data.fighter;
    this.opponent = data.opponent;
  }

  ngOnInit(): void {
    this.delay();
  }

  async delay(): Promise<void> {
    await this.getOpponent(5000).then(() => {
      this.dialogRef.close();
    });
  }

  getOpponent(ms: number): Promise<any> {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
