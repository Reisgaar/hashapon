import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-searching-opponent',
  templateUrl: './searching-opponent.component.html',
  styleUrls: ['./searching-opponent.component.scss']
})
export class SearchingOpponentComponent implements OnInit {

  fighter: any;
  opponent: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.fighter = data.animal;
  }

  ngOnInit(): void {
  }

}
