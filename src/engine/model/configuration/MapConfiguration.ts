import {Grid} from "./Grid.ts";
import {AbstractItem} from "../item/AbstractItem.ts";
import {Fog} from "./Fog.ts";

export class MapConfiguration {
    public grid: Grid;

    public items: AbstractItem[];

    public fog: Fog | undefined;

    constructor(grid: Grid, items: AbstractItem[], fog: Fog | undefined = undefined) {
        this.grid = grid;
        this.items = items;
        this.fog = fog;
    }
}