import {AbstractItem} from "./AbstractItem.ts";
import {ItemType} from "./Item.ts";
import {Position} from "../Position.ts";

export class DoorItem extends AbstractItem {


    message:string
    itemId:string

    constructor(uid: string, name: string, position: Position, description: string, instructions: string, image: string,itemId:string = undefined ,message :string ="") {
        super(uid, name, ItemType.DOOR, position, description, instructions, image);
        this.message = message
        this.itemId= itemId
    }
}