import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { BuyService } from 'src/app/shared/services/buy.service';

@Component({
  selector: 'app-gachapon',
  templateUrl: './gachapon.component.html',
  styleUrls: ['./gachapon.component.scss']
})
export class GachaponComponent implements OnInit {

  constructor(
    private router: Router,
    private utilsService: UtilsService,
    public buyService: BuyService
  ) { }

  ngOnInit(): void {
    if (!this.utilsService.walletIsConnected) { this.router.navigate(['home']); }
    this.utilsService.changeActiveButton('button-gachapon');
  }

}
