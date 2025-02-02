import {Position} from "../Position.ts";
import {TwoDimensionalSize} from "../TwoDimensionalSize.ts";

export class DeadZone {
    public position: Position;
    public dimension: TwoDimensionalSize;

    constructor(position: Position, dimension: TwoDimensionalSize) {
        this.position = position;
        this.dimension = dimension;
    }
}