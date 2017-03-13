import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { HttpService } from './http-api/httpService';
import { GamesService } from './games-api/gameService';
import { CommonModule } from '@angular/common';
import { GameCellComponent } from './game-cell/game-cell.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, {useHash: true})
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    GameCellComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    HttpService,
    GamesService
  ]
})
export class AppModule {

}
