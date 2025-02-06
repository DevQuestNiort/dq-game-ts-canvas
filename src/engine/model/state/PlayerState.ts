import {Position} from "../Position.ts";
import {Orientation} from "../Orientation.ts";
import {Items} from "../Items.ts";

export class PlayerState {
    /** position sur la grille */
    public position: Position;
    public orientation: Orientation
    public degat: number
    public defense: number
    public life: number
    public inventory: Items

    constructor(position: Position, orientation: Orientation, degat: number, defense: number, life: number) {
        this.position = position;
        this.orientation = orientation;
        this.degat = degat;
        this.defense = defense;
        this.life = life;
        this.inventory = new Items([])
    }
}