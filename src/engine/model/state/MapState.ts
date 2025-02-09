import {Item} from "../item/Item.ts";
import {Items} from "../item/Items.ts";

export class MapState {
    items: Items

    constructor(items: Item[]) {
        this.items = new Items(items);
    }
}