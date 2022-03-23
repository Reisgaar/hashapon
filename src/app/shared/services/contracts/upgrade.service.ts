import { stagger } from '@angular/animations';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpgradeService {

  constructor() { }

  startUpgrade(event: any, animal: any): void {
    console.log('Start ' + this.getStage(animal) + ' upgrade');
    event.stopPropagation();
  }

  forwardUpgrade(event: any, animal: any): void {
    console.log('Forward ' + this.getStage(animal) + ' upgrade');
    event.stopPropagation();
  }

  finishUpgrade(event: any, animal: any): void {
    console.log('Finish ' + this.getStage(animal) + ' upgrade');
    event.stopPropagation();
  }

  upgradeStat(event: any, animal: any, stat: string): void {
    console.log('Upgrade ' + animal.name + '\'s ' + stat);
    event.stopPropagation();
  }

  getStage(animal: any): string {
    let stage = '';
    switch (animal.stage) {
      case 0: stage = 'egg'; break;
      case 1: stage = 'baby'; break;
      case 2: stage = 'young'; break;
      default: stage = ''; break;
    }
    return stage;
  }
}
