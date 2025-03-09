import {AbstractModificatorPlayerItem} from "./AbstractModificatorPlayerItem.ts";
import {ItemType} from "./Item.ts";
import {Position} from "../Position.ts";
import {PlayerState} from "../state/PlayerState.ts";
import {gameState} from "../../GameDataService.ts";

export class TrapItem extends AbstractModificatorPlayerItem {

    constructor(uid: string, name: string, position: Position, description: string, instructions: string, image: string, playerModificator: (player: PlayerState) => void, isHidden: boolean) {
        super(uid, name, ItemType.PIEGE, position, description, instructions, image, playerModificator);

        this._isHidden = isHidden;
    }

    private _isUsed: boolean = false;

    get isUsed(): boolean {
        return this._isUsed;
    }

    private _isHidden: boolean = true;

    get isHidden(): boolean {
        return this._isHidden;
    }

    activerPiege() {
        if (!this._isUsed) {
            this._isHidden = false;
            this._isUsed = true;
            this.playerModificator(gameState.player);
        }
    }

}