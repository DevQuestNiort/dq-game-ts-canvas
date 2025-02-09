import {Grid} from "./Grid.ts";
import {AbstractItem} from "../item/AbstractItem.ts";

export class MapConfiguration {
    public grid: Grid;

    public items: AbstractItem[];

    constructor(grid: Grid, items: AbstractItem[]) {
        this.grid = grid;
        this.items = items;
    }
}