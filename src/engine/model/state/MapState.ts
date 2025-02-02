import {Item} from "../Item.ts";

export class MapState {
    items: Item[]

    constructor(items: Item[]) {
        this.items = items;
    }
}