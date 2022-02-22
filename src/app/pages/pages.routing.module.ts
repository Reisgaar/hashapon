import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EggsComponent } from './eggs/eggs.component';
import { GachaponComponent } from './gachapon/gachapon.component';
import { GymComponent } from './gym/gym.component';
import { IncubatorsComponent } from './incubators/incubators.component';
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
        component: GachaponComponent
      },
      {
        path: 'gacha',
        component: GachaponComponent
      },
      {
        path: 'incubators',
        component: IncubatorsComponent
      },
      {
        path: 'eggs',
        component: EggsComponent
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
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
