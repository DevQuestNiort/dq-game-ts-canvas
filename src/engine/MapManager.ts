import {gameState, getCurrentMap} from "./GameDataService.ts";
import {Position} from "./model/Position.ts";
import {ItemType} from "./model/item/Item.ts";
import {Orientation} from "./model/Orientation.ts";
import {DoorItem} from "./model/item/DoorItem.ts";
import {DecorativeItem} from "./model/item/DecorativeItem.ts";
import {AbstractTalkablePlayerItem} from "./model/item/AbstractTalkablePlayerItem.ts";

export const isTileAccessible = (x: number, y: number) => {
    const tileType = getCurrentMap().grid.getCase(x, y)
    if (tileType === "l" && ! gameState.player.inventory.hasItemBy("redStone")) {
        console.log("aie ca brule")
        return false;
    } else if (tileType === "w" && ! gameState.player.inventory.hasItemBy("blueStone")) {
        console.log("ca a l'air profond")
        return false;
    } else if (["T", "║", "═", "╝", "╗", "╔", "╚", "╩", "╦", "╠", "╣", "╬", "■"].includes(tileType)) {
        console.log("poc");
        return false;
    }
    return true;
}

export const isTileIsNotObstructed = (x: number, y: number) => {
    const itemAtPos = getItemAtPosition(new Position(x, y))

    if (itemAtPos && itemAtPos instanceof AbstractTalkablePlayerItem && ! itemAtPos.isWalkable()) {
        return false
    }else if (itemAtPos && itemAtPos.type === ItemType.DOOR  ){
        const itemAtPos1 = itemAtPos as DoorItem;
        console.log("recherche de " + itemAtPos1.itemId + "  dans l inventaire")
        if (gameState.player.inventory.getById(itemAtPos1.itemId)|| itemAtPos1.itemId=== undefined ) {
            return true
        }
        return false
    }
    return true
}

export const getItemAtPosition = (position: Position) => {
    return gameState.mapStates[gameState.currentMap].items.getItemByPosition(position)
}


export const removeItemFromCurrentMapByUid = (uid: string) => {
    return gameState.mapStates[gameState.currentMap].items.removeItemByUid(uid)
}


export const getItemAtPlayerPosition = () => {
    return getItemAtPosition(gameState.player.position)
}

/**
 * return l objet face au joueur ou undefined si y a rien
 */
export const getItemInFrontOfPlayer = () => {
    const position = getPositionInFrontOfPlayer();
    if (position !== undefined) {
        return getItemAtPosition(position);
    }
    return undefined;
}

/**
 * return les coordonnes de la case face au joueur
 */
const getPositionInFrontOfPlayer = () => {

    let frontPositionX = gameState.player.position.x;
    let frontPositionY = gameState.player.position.y;
    switch (gameState.player.orientation) {
        case Orientation.UP:
            frontPositionY -= 1;
            break;
        case Orientation.DOWN:
            frontPositionY += 1;
            break;
        case Orientation.LEFT:
            frontPositionX -= 1;
            break;
        case Orientation.RIGHT:
            frontPositionX += 1;
            break;

    }
    if (frontPositionX < 0 || frontPositionX >= getCurrentMap().grid.getWidth() || frontPositionY < 0 || frontPositionY >= getCurrentMap().grid.getHeight()) {
        return undefined;
    }
    return new Position(frontPositionX, frontPositionY);
}