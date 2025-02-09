import {AbstractItem} from "./AbstractItem.ts";
import {Position} from "../Position.ts";
import {ItemType} from "./Item.ts";
import {PlayerState} from "../state/PlayerState.ts";
import {GameState} from "../state/GameState.ts";

export class PNJItem extends AbstractItem {

    life: number
    attack: number
    defense: number

    onDeath: (stateContext : GameState) => void;

    constructor(uid: string, name: string, position: Position, life: number, attack: number, defense: number, onDeath: (stateContext : GameState) => void , description: string, instructions: string, image: string) {
        super(uid, name, ItemType.PNJ, position, description, instructions, image);
        this.life = life
        this.attack = attack
        this.defense = defense
        this.onDeath = onDeath
    }




    death(stateContext : GameState){
        this.onDeath(stateContext);
        stateContext.mapStates[stateContext.currentMap].items.removeItemByUid(this.uid)
    }

}