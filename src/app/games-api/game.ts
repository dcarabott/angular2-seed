import { JsonProperty } from '../decorators-api/jsonProperty';

export class Game {

    slug: string;
    title: string;
    author: string;
    date: string;
    modified: string;
    status: string;
    type: string;
    devices: string[];
    @JsonProperty('game-id')
    gameId: number;
    @JsonProperty('vendor-id')
    vendorId: string;
    @JsonProperty('vendor-game-id')
    vendorGameId: string;
    name: string;
    @JsonProperty('short-description')
    shortDescription: string;
    @JsonProperty('long-description')
    description: string;
    @JsonProperty('game-type')
    gameType: string;
    @JsonProperty('parent-game-id')
    parentGameId: string;
    // @JsonProperty('game-image')
    // gameImage: Image;
    // @JsonProperty({name: 'game-screenshots', clazz: Image})
    // gameScreenshots: Image[];
    // @JsonProperty('game-logo')
    // gameLogo: Image;
    @JsonProperty('allow-real-play')
    allowRealPlay: boolean;
    @JsonProperty('allow-demo-play')
    allowDemoPlay: boolean;
    @JsonProperty('new')
    isNew: boolean;
    @JsonProperty('live')
    isLive: boolean;
    @JsonProperty('hot')
    isHot: boolean;
    @JsonProperty('mini-game')
    isMiniGame: boolean;
    @JsonProperty('is-parent')
    isParent: boolean;
    @JsonProperty('offline')
    isOffline: boolean;
    @JsonProperty('maintenance')
    isMaintenance: boolean;
    category: string;
    url: string;
    jurisdiction: string;

    @JsonProperty('suggested-width')
    suggestedWidth: number;
    @JsonProperty('suggested-height')
    suggestedHeight: number;
    @JsonProperty('minimum-bet')
    minimumBet: number;
    @JsonProperty('maximum-bet')
    maximumBet: number;
    @JsonProperty('maximum-win')
    maximumWin: number;

    constructor() {
        this.slug = undefined;
        this.title = undefined;
        this.author = undefined;
        this.date = undefined;
        this.modified = undefined;
        this.status = undefined;
        this.type = undefined;
        this.gameId = undefined;
        this.vendorId = undefined;
        this.vendorGameId = undefined;
        this.name = undefined;
        this.shortDescription = undefined;
        this.description = undefined;
        this.gameType = undefined;
        this.parentGameId = undefined;
        // this.gameImage = undefined;
        // this.gameScreenshots = undefined;
        // this.gameLogo = undefined;
        this.allowRealPlay = undefined;
        this.allowDemoPlay = undefined;
        this.isNew = undefined;
        this.isLive = undefined;
        this.isHot = undefined;
        this.isMiniGame = undefined;
        this.isParent = undefined;
        this.isOffline = undefined;
        this.isMaintenance = undefined;
        this.category = undefined;
        this.url = undefined;
        this.jurisdiction = undefined;
        this.suggestedWidth = undefined;
        this.suggestedHeight = undefined;
        this.minimumBet = undefined;
        this.maximumBet = undefined;
        this.maximumWin = undefined;
    }
}
