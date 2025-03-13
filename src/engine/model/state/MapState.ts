import { Items } from "../item/Items.ts";
import { AbstractItem } from "../item/AbstractItem.ts";

export class MapState {
  items: Items;

  constructor(items: AbstractItem[]) {
    this.items = new Items(items);
  }
}
