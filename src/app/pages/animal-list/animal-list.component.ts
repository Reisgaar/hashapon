import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {

  egg: Array<any> = [
    {type: 'birds'},
    {type: 'canines'},
    {type: 'felines'},
    {type: 'marsupials'},
    {type: 'primates'},
    {type: 'reptiles'},
    {type: 'rodents'},
    {type: 'ursids'}
  ];

  baby: Array<any> = [
    {type: 'baby'},
    {type: 'baby'},
    {type: 'baby'},
    {type: 'baby'},
  ];

  young: Array<any> = [
    {type: 'young'},
    {type: 'young'},
    {type: 'young'},
    {type: 'young'},
    {type: 'young'},
    {type: 'young'}
  ];

  adult: Array<any> = [
    {type: 'adult'},
    {type: 'adult'},
    {type: 'adult'},
    {type: 'adult'},
    {type: 'adult'},
    {type: 'adult'},
    {type: 'adult'},
    {type: 'adult'},
    {type: 'adult'},
    {type: 'adult'},
    {type: 'adult'},
    {type: 'adult'}
  ];

  constructor(
    public dialogRef: MatDialogRef<AnimalListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
