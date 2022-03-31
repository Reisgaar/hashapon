import { stagger } from '@angular/animations';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpgradeService {

  constructor() { }

  // START UPGRADES

  upgradeEggToChild(event: any, animal: any): void {
    console.log('Start egg upgrade');
    event.stopPropagation();
  }

  upgradeChildToYoung(event: any, animal: any): void {
    console.log('Start child upgrade');
    event.stopPropagation();
  }

  upgradeYoungToAdult(event: any, animal: any): void {
    console.log('Start young upgrade');
    event.stopPropagation();
  }

  upgradeAdultStat(event: any, animal: any): void {
    console.log('Start stat upgrade');
    event.stopPropagation();
  }

  upgradeStat(event: any, animal: any, stat: string): void {
    console.log('Upgrade ' + animal.name + '\'s ' + stat);
    event.stopPropagation();
  }

  // FORWARD UPGRADES

  forwardUpgrade(event: any, animal: any): void {
    console.log('Forward ' + this.getStage(animal) + ' upgrade');
    event.stopPropagation();
  }

  // FINISH UPGRADES

  finishUpgrade(event: any, animal: any): void {
    console.log('Finish ' + this.getStage(animal) + ' upgrade');
    event.stopPropagation();
  }

  getStage(animal: any): string {
    let stage = '';
    switch (animal.stage) {
      case 0: stage = 'egg'; break;
      case 1: stage = 'baby'; break;
      case 2: stage = 'young'; break;
      case 3: stage = 'adult'; break;
      default: stage = ''; break;
    }
    return stage;
  }
}
