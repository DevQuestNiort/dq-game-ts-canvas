import {Position} from "../Position.ts";
import {Orientation} from "../Orientation.ts";
import {Items} from "../Items.ts";

export class PlayerState {
    /** position sur la grille */
    public position: Position;
    public orientation: Orientation
    public readonly baseAttack: number
    public readonly baseDefense: number
    public attack: number
    public defense: number
    public life: number
    public inventory: Items

    constructor(position: Position, orientation: Orientation, baseAttack: number, baseDefense: number, life: number) {
        this.position = position;
        this.orientation = orientation;
        this.baseAttack = baseAttack;
        this.baseDefense = baseDefense;
        this.attack = baseAttack;
        this.defense = baseDefense;
        this.life = life;
        this.inventory = new Items([])
    }
}