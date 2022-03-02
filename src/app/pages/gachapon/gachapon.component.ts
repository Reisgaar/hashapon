import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-gachapon',
  templateUrl: './gachapon.component.html',
  styleUrls: ['./gachapon.component.scss']
})
export class GachaponComponent implements OnInit {

  constructor(private utilsService: UtilsService) { }

  ngOnInit(): void {
    this.utilsService.changeActiveButton('button-gachapon');
  }

}
