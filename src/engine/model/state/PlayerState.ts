import {Position} from "../Position.ts";

export class PlayerState {
    /** position sur la grille */
    public position: Position;

    constructor(position: Position) {
        this.position = position;
    }
}