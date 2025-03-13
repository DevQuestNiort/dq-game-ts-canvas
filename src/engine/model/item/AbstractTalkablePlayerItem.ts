import { AbstractItem } from "./AbstractItem.ts";
import { ItemType } from "./Item.ts";
import { Position } from "../Position.ts";
import { ModalTemplate } from "../modalTemplate/ModalTemplate.ts";

export class AbstractTalkablePlayerItem extends AbstractItem {
  interaction?: ModalTemplate;

  walkable: boolean = false;

  constructor(
    uid: string,
    name: string,
    type: ItemType,
    position: Position,
    description: string,
    instructions: string,
    image: string,
    interaction?: ModalTemplate,
    walkable: boolean = false,
  ) {
    super(uid, name, type, position, description, instructions, image);
    this.interaction = interaction;
    this.walkable = walkable;
  }

  isWalkable() {
    return this.walkable;
  }
}
