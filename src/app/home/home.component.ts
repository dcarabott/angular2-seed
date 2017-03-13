import { Component } from '@angular/core';
import { GamesService } from '../games-api/gameService';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  public games;

  constructor(gamesService: GamesService) {
    gamesService.requestGames().then((games) => {
      this.games = games;
    });
  }

  output(text) {
    console.log(text);
  }
}
