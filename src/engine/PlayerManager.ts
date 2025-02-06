import {Orientation} from "./model/Orientation.ts";
import {gameState, getCurrentMap} from "./GameDataService.ts";
import {notifyChangedTile} from "./GraphicsEngine.ts";
import {Position} from "./model/Position.ts";
import {computeViewportPosition} from "./ViewportManager.ts";
import {
    getItemAtPlayerPosition,
    isTileAccessible,
    isTileIsNotObstructed,
    removeItemFromCurrentMapByUid
} from "./MapManager.ts";
import {PickableItem} from "./model/PickableItem.ts";


export const upKeyPressed = () => {
    rotatePlayer(Orientation.UP);
    movePlayer(0, -1);
}

export const downKeyPressed = () => {
    rotatePlayer(Orientation.DOWN);
    movePlayer(0, 1);
}

export const leftKeyPressed = () => {
    rotatePlayer(Orientation.LEFT);
    movePlayer(-1, 0);
}

export const rightKeyPressed = () => {
    rotatePlayer(Orientation.RIGHT);
    movePlayer(1, 0);
}

export const actionKeyPressed = () => {
    console.log("je sais rien faire pour l'instant");
}

export const pickUpKeyPressed = () => {
    const itemAtPlayerPosition = getItemAtPlayerPosition();

    if ( itemAtPlayerPosition && itemAtPlayerPosition instanceof PickableItem ) {
        console.log("je ramasse")
        addItemToInventory(itemAtPlayerPosition)
        updateStats()
    }
}


const addItemToInventory = ( item: PickableItem ) => {
    gameState.player.inventory.addItem(item);
    removeItemFromCurrentMapByUid(item.uid);
    notifyChangedTile(item.position);
    // refresh zone inventaire
}

export const rotatePlayer = (orientation: Orientation) => {
    gameState.player.orientation = orientation;
    notifyChangedTile(gameState.player.position);
}

export const movePlayer = (x: number, y: number) => {
    let playerX = gameState.player.position.x + x;
    if (playerX < 0) {
        playerX = 0;
    }
    if (playerX >= getCurrentMap().grid.getWidth()) {
        playerX = getCurrentMap().grid.getWidth() - 1;
    }

    let playerY = gameState.player.position.y + y;
    if (playerY < 0) {
        playerY = 0;
    }
    if (playerY >= getCurrentMap().grid.getHeight()) {
        playerY = getCurrentMap().grid.getHeight() - 1;
    }

    // puis je aller en playerX playerY
    if (isTileAccessible(playerX, playerY) && isTileIsNotObstructed(playerX, playerY)) {
        const oldPosition = structuredClone(gameState.player.position);
        gameState.player.position.x = playerX;
        gameState.player.position.y = playerY;


        notifyChangedTile(oldPosition);
        notifyChangedTile(new Position(playerX, playerY));
        console.debug(`player moved to ${playerX}, ${playerY}`);
        computeViewportPosition();
    }
}

export const updateStats = () => {
    // recalcul attack, on parcourt les objets pour appliquer les effets
    gameState.player.attack = gameState.player.baseAttack;
    gameState.player.defense = gameState.player.baseDefense;
    gameState.player.inventory.get().map(item => item as PickableItem).forEach(item => item.playerModificator(gameState.player));

}