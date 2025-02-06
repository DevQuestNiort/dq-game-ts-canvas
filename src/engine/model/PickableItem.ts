import {AbstractItem} from "./AbstractItem.ts";
import {Position} from "./Position.ts";
import {ItemType} from "./Item.ts";

export class PickableItem extends AbstractItem {
    constructor(uid: string, name: string, position: Position, description: string, instructions: string, image: string) {
        super(uid, name, ItemType.PICKABLE, position, description, instructions, image);
    }
}