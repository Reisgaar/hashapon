import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { GachaponComponent } from './pages/gachapon/gachapon.component';
import { PagesComponent } from './pages/pages.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { SchoolComponent } from './pages/school/school.component';
import { GymComponent } from './pages/gym/gym.component';
import { IncubatorsComponent } from './pages/incubators/incubators.component';
import { EggsComponent } from './pages/eggs/eggs.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { AnimalListComponent } from './pages/popUp/animal-list/animal-list.component';
import { AnimalStatsComponent } from './pages/popUp/animal-stats/animal-stats.component';
import { LobbyComponent } from './pages/lobby/lobby.component';
import { BattleComponent } from './pages/battle/battle.component';
import { HomeComponent } from './pages/home/home.component';
import { TimerComponent } from './pages/timer/timer.component';
import { InteractionComponent } from './pages/interaction/interaction.component';
import { WaitingGachaponComponent } from './pages/popUp/waiting-gachapon/waiting-gachapon.component';
import { IncubationSelectorComponent } from './pages/popUp/incubation-selector/incubation-selector.component';
import { ErrorComponent } from './pages/popUp/error/error.component';
import { NewEggComponent } from './pages/popUp/new-egg/new-egg.component';
import { BattleStatisticsComponent } from './pages/popUp/battle-statistics/battle-statistics.component';
import { PairingComponent } from './pages/popUp/pairing/pairing.component';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    GachaponComponent,
    PlaygroundComponent,
    SchoolComponent,
    GymComponent,
    IncubatorsComponent,
    EggsComponent,
    NavigationComponent,
    AnimalListComponent,
    AnimalStatsComponent,
    LobbyComponent,
    BattleComponent,
    HomeComponent,
    TimerComponent,
    InteractionComponent,
    WaitingGachaponComponent,
    IncubationSelectorComponent,
    PairingComponent,
    ErrorComponent,
    NewEggComponent,
    BattleStatisticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  exports: [
    MatFormFieldModule,
    MatDialogModule
],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
