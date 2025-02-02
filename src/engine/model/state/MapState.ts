import {Item} from "../Item.ts";
import {Items} from "../Items.ts";

export class MapState {
    items: Items

    constructor(items: Item[]) {
        this.items = new Items(items);
    }
}