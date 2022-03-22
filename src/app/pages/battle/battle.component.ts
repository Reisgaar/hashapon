import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {

  fighter: any;

  constructor(
    private router: Router,
    private utilsService: UtilsService
  ) {
    let navigation = this.router.getCurrentNavigation();
    if (navigation.extras.state) {
      this.fighter = navigation.extras.state.data;
    } else {
      this.fighter = null;
    }
  }

  ngOnInit(): void {
    if (!this.utilsService.walletIsConnected) { this.router.navigate(['home']); }
  }

}
