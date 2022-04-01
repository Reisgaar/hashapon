import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-egg',
  templateUrl: './new-egg.component.html',
  styleUrls: ['./new-egg.component.scss']
})
export class NewEggComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewEggComponent>
  ) { }

  ngOnInit(): void {
  }

}
