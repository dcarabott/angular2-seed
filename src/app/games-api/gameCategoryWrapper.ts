import { Category } from './category';
import { JsonProperty } from '../decorators-api/jsonProperty';

export class GameCategoryWrapper {
    @JsonProperty({clazz: Category})
    categories: Category[];

    constructor() {
        this.categories = undefined;
    }
}
