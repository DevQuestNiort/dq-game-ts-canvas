import { PlayerState } from "../state/PlayerState.ts";
import { AbstractItem } from "./AbstractItem.ts";
import { ItemType } from "./Item.ts";
import { Position } from "../Position.ts";

export class AbstractModificatorPlayerItem extends AbstractItem {
  playerModificator: (player: PlayerState) => void;

  constructor(
    uid: string,
    name: string,
    type: ItemType,
    position: Position,
    description: string,
    instructions: string,
    image: string,
    playerModificator: (player: PlayerState) => void,
  ) {
    super(uid, name, type, position, description, instructions, image);
    this.playerModificator = playerModificator;
  }
}
