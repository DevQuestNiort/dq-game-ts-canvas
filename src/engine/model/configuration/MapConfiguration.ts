import {TwoDimensionalSize} from "../TwoDimensionalSize.ts";
import {Grid} from "./Grid.ts";

export class MapConfiguration {
    public grid : Grid;


    constructor(grid: Grid) {
        this.grid = grid;
    }
}