import {Position} from "../Position.ts";

export class ViewportState {
    // viewport position sur la grille
    public position: Position;


    constructor(position: Position) {
        this.position = position;
    }
}