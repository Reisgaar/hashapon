import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eggs',
  templateUrl: './eggs.component.html',
  styleUrls: ['./eggs.component.scss']
})

export class EggsComponent implements OnInit {

  data: any = [
    {type: 'birds'},
    {type: 'canines'},
    {type: 'felines'},
    {type: 'marsupials'},
    {type: 'primates'},
    {type: 'reptiles'},
    {type: 'rodents'},
    {type: 'ursids'}
  ];

  constructor() { }

  ngOnInit(): void {
    this.data = this.shuffleArray(this.data);
    console.log(this.data);
  }

  public shuffleArray(array): any {
    let currentIndex = array.length;
    let randomIndex: any;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

}
