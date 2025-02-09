import {Position} from "../Position.ts";
import {AbstractItem} from "./AbstractItem.ts";

export class Items {

    private list: AbstractItem[]

    constructor(items: AbstractItem[]) {
        this.list = items
    }

    get = () => {
        return this.list
    }


    /**
     * N'a pas de sens lorsque cette classe represent l inventaire du joueur
     * @param position
     */
    getItemByPosition = (position: Position) => {
        return this.list.find(item => item.position.x === position.x && item.position.y === position.y)
    }
    getById = (uid: string) => {
      return this.list.find(item => item.uid === uid)
    }
    hasItemBy = (uid: string) => {
        return this.list.some(item => item.uid === uid)
    }

    removeItemByUid = (uid: string) => {
        this.list = this.list.filter(item => item.uid !== uid)
    }

    addItem = (item: AbstractItem) => {
        this.list.push(item)
    }

}


