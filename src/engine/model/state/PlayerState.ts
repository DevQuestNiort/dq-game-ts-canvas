import {Position} from "../Position.ts";
import {Orientation} from "../Orientation.ts";

export class PlayerState {
    /** position sur la grille */
    public position: Position;
    public orientation: Orientation

    constructor(position: Position, orientation: Orientation) {
        this.position = position;
        this.orientation = orientation;
    }
}