import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  constructor(
    private router: Router,
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    if (!this.utilsService.walletIsConnected) { this.router.navigate(['home']); }
  }

}
