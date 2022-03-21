import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {

  @Input() data: any;
  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

}
