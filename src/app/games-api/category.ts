import { JsonProperty } from '../decorators-api/jsonProperty';

export class Category {
    name: string;
    slug: string;
    path: string;

    @JsonProperty('live-update')
    liveUpdate: boolean;

    @JsonProperty('game-ids')
    gameIds: number[];
    @JsonProperty('also-show-others-in-group')
    alsoShowOthersInGroup: boolean;
    @JsonProperty('also-show-latest-games')
    alsoShowLatestGames: boolean;

    constructor() {
        this.name = undefined;
        this.slug = undefined;
        this.path = undefined;
        this.liveUpdate = undefined;
        this.gameIds = undefined;
        this.alsoShowOthersInGroup = undefined;
        this.alsoShowLatestGames = undefined;
    }
}
