import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {

  constructor(
    private router: Router,
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    if (!this.utilsService.walletIsConnected) { this.router.navigate(['home']); }
  }

}
