import {AbstractItem} from "./AbstractItem.ts";
import {ItemType} from "./Item.ts";
import {Position} from "../Position.ts";
import {ModalTemplate} from "../modalTemplate/ModalTemplate.ts";
import {AbstractTalkablePlayerItem} from "./AbstractTalkablePlayerItem.ts";

export class DecorativeItem extends AbstractTalkablePlayerItem {



    constructor(uid: string, name: string, position: Position, description: string, instructions: string, image: string, interaction: ModalTemplate = undefined) {
        super(uid, name, ItemType.DECORATIF, position, description, instructions, image,interaction);

    }
}