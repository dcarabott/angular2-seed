import { Injectable } from '@angular/core';
import { GameWrapper } from './gameWrapper';
import { HttpService } from '../http-api/httpService';

@Injectable()
export class GamesService {

  private rawGames: any = null;
  private gameList: Array<any>;
  private categorisedGameList: any;
  private categoryData: any;

  constructor(private httpService: HttpService) {

  }

  public requestGames() {
    return new Promise((resolve, reject) => {
      this.httpService.getSingle(GameWrapper, "https://api-staging.voodoodreams.com/v1/games").then((gameWrapper: any) => {
        this.rawGames = gameWrapper;
        this.gameList = gameWrapper.gamesList;
        this.categorisedGameList = Object.create(null);
        this.categoryData = Object.create(null);
        resolve(this.gameList);
      });
    });
  }
}
