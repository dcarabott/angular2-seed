import { Game } from './game';
import { JsonProperty, JsonMap } from '../decorators-api/jsonProperty';

export class GameWrapper {

    @JsonProperty({name: 'games', clazz: Game})
    gamesList: Game[];

    @JsonMap({clazz: Game})
    games: Map<String, Game>;

    constructor() {
        this.games = undefined;
        this.gamesList = undefined;
    }
}
