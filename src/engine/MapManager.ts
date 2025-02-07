import {gameState, getCurrentMap} from "./GameDataService.ts";
import {Position} from "./model/Position.ts";
import {ItemType} from "./model/Item.ts";
import {Orientation} from "./model/Orientation.ts";

export const isTileAccessible = (x: number, y: number) => {
    const tileType = getCurrentMap().grid.getCase(x, y)
    if (tileType === "l") {
        console.log("aie ca brule")
        return false;
    } else if (["T", "║", "═", "╝", "╗", "╔", "╚", "╩", "╦", "╠", "╣", "╬", "■"].includes(tileType)) {
        console.log("poc");
        return false;
    } else if (tileType === "w") {
        console.log("je vais me noyer")
        return false;
    }
    return true;
}

export const isTileIsNotObstructed = (x: number, y: number) => {
    const itemAtPos = getItemAtPosition(new Position(x, y))

    if (itemAtPos && (itemAtPos.type === ItemType.DECORATIF ||  itemAtPos.type === ItemType.PNJ)) {
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
 * return l obet face au joueur ou undefined si y a rien
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