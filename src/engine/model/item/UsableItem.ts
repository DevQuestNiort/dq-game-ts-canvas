
import {Position} from "../Position.ts";
import { ItemType} from "./Item.ts";
import {PlayerState} from "../state/PlayerState.ts";
import {AbstractModificatorPlayerItem} from "./AbstractModificatorPlayerItem.ts";

export class UsableItem extends AbstractModificatorPlayerItem {

    constructor(uid: string, name: string, position: Position, playerModificator: (player: PlayerState) => void = () => {},  description: string, instructions: string, image: string) {
        super(uid, name, ItemType.USABLE, position, description, instructions, image, playerModificator);
    }
}