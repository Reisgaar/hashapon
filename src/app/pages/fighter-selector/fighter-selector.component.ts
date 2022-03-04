import { Component, OnInit } from '@angular/core';
import { adult } from 'src/app/shared/data/animal-data';

@Component({
  selector: 'app-fighter-selector',
  templateUrl: './fighter-selector.component.html',
  styleUrls: ['./fighter-selector.component.scss']
})
export class FighterSelectorComponent implements OnInit {

  adults = adult;

  constructor() {
    this.adults.sort( (a, b) => {
      return b.battleTotal - a.battleTotal;
    });
  }

  ngOnInit(): void {
  }

}
