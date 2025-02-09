import {AbstractItem} from "./AbstractItem.ts";
import {Position} from "../Position.ts";
import { ItemType} from "./Item.ts";
import {PlayerState} from "../state/PlayerState.ts";

export class PickableItem extends AbstractItem {


    playerModificator : (player :PlayerState) => void;

    constructor(uid: string, name: string, position: Position, playerModificator: (player: PlayerState) => void = () => {},  description: string, instructions: string, image: string) {
        super(uid, name, ItemType.PICKABLE, position, description, instructions, image);
        this.playerModificator = playerModificator;
    }
}