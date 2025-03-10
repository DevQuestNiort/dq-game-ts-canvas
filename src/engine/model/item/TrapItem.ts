import {AbstractModificatorPlayerItem} from "./AbstractModificatorPlayerItem.ts";
import {ItemType} from "./Item.ts";
import {Position} from "../Position.ts";
import {PlayerState} from "../state/PlayerState.ts";
import {gameState} from "../../GameDataService.ts";

export class TrapItem extends AbstractModificatorPlayerItem {

    itemDetectorId:string

    constructor(uid: string, name: string, position: Position, description: string, instructions: string, image: string, playerModificator: (player: PlayerState) => void, isHidden: boolean,itemDetectorId="none") {
        super(uid, name, ItemType.PIEGE, position, description, instructions, image, playerModificator);

        this._isHidden = isHidden;
        this.itemDetectorId=itemDetectorId
    }

    private _isUsed: boolean = false;

    get isUsed(): boolean {
        return this._isUsed;
    }

    private _isHidden: boolean = true;

    get isHidden(): boolean {
        return this._isHidden;
    }

    isvisible(){
        return !this.isHidden || gameState.player.inventory.hasItemBy(this.itemDetectorId) ||  this._isUsed

    }

    activerPiege() {
        if (!this.isUsed) {
            this._isHidden = false;
            this._isUsed = true;
            this.playerModificator();
        }
    }

}