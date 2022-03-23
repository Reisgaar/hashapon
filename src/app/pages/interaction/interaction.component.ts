import { Component, Input, OnInit } from '@angular/core';
import { UpgradeService } from 'src/app/shared/services/contracts/upgrade.service';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {

  @Input() data: any;
  @Input() type: string;

  constructor(public upgradeService: UpgradeService) { }

  ngOnInit(): void {
  }

}
