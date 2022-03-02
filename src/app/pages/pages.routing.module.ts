import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from './battle/battle.component';
import { EggsComponent } from './eggs/eggs.component';
import { GachaponComponent } from './gachapon/gachapon.component';
import { GymComponent } from './gym/gym.component';
import { HomeComponent } from './home/home.component';
import { IncubatorsComponent } from './incubators/incubators.component';
import { LobbyComponent } from './lobby/lobby.component';
import { PagesComponent } from './pages.component';
import { PlaygroundComponent } from './playground/playground.component';
import { SchoolComponent } from './school/school.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'gachapon',
        component: GachaponComponent
      },
      {
        path: 'eggs',
        component: EggsComponent
      },
      {
        path: 'incubators',
        component: IncubatorsComponent
      },
      {
        path: 'playground',
        component: PlaygroundComponent
      },
      {
        path: 'school',
        component: SchoolComponent
      },
      {
        path: 'gym',
        component: GymComponent
      },
      {
        path: 'lobby',
        component: LobbyComponent
      },
      {
        path: 'battle',
        component: BattleComponent
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
