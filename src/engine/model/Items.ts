import {Item} from "./Item.ts";
import {Position} from "./Position.ts";

export class Items {

    private list: Item[]

    constructor(items: Item[]) {
        this.list = items
    }

    get = () => {
        return this.list
    }

    getItemByPosition = (position: Position) => {
        return this.list.find(item => item.position.x === position.x && item.position.y === position.y)
    }

    removeItemByUid = (uid: string) => {
        this.list = this.list.filter(item => item.uid !== uid)
    }

}


