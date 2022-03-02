import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-gachapon',
  templateUrl: './gachapon.component.html',
  styleUrls: ['./gachapon.component.scss']
})
export class GachaponComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private utilsService: UtilsService
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params['warning']);
    });
  }

  ngOnInit(): void {
    this.utilsService.changeActiveButton('button-gachapon');
  }

}
