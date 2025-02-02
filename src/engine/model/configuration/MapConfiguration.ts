import {Grid} from "./Grid.ts";
import {Item} from "../Item.ts";

export class MapConfiguration {
    public grid: Grid;

    public items: Item[];

    constructor(grid: Grid, items: Item[]) {
        this.grid = grid;
        this.items = items;
    }
}