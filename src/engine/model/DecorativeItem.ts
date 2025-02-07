import {AbstractItem} from "./AbstractItem.ts";
import {ItemType} from "./Item.ts";
import {Position} from "./Position.ts";

export class DecorativeItem extends AbstractItem {


    message:string

    constructor(uid: string, name: string, position: Position, description: string, instructions: string, image: string,message :string ="") {
        super(uid, name, ItemType.DECORATIF, position, description, instructions, image);
        this.message = message
    }
}