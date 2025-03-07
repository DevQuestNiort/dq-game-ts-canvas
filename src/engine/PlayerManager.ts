import {Orientation} from "./model/Orientation.ts";
import {gameState, getCurrentMap} from "./GameDataService.ts";
import {notifyChangedTile, notifyViewportChanged} from "./GraphicsEngine.ts";
import {Position} from "./model/Position.ts";
import {computeViewportPosition} from "./ViewportManager.ts";
import {
    getItemAtPlayerPosition, getItemAtPosition,
    getItemInFrontOfPlayer,
    isTileAccessible,
    isTileIsNotObstructed,
    removeItemFromCurrentMapByUid
} from "./MapManager.ts";
import {PickableItem} from "./model/item/PickableItem.ts";
import {ComsumableItem} from "./model/item/ComsumableItem.ts";
import {UsableItem} from "./model/item/UsableItem.ts";
import {PNJItem} from "./model/item/PNJItem.ts";
import {playSound} from "./SoundEngine.ts";
import {DecorativeItem} from "./model/item/DecorativeItem.ts";
import {InventaireTemplate} from "./model/modalTemplate/InventaireTemplate.ts";


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
    const itemInFrontOfPlayer = getItemInFrontOfPlayer();
    if (itemInFrontOfPlayer && itemInFrontOfPlayer instanceof PNJItem) {

        console.log("j'attaque'" + itemInFrontOfPlayer.name);
        attak(itemInFrontOfPlayer)
    }
}

export const interactKeyPressed = () => {
    const itemInFrontOfPlayer = getItemInFrontOfPlayer();
    if (itemInFrontOfPlayer && itemInFrontOfPlayer instanceof DecorativeItem) {
        console.log("j'attaque'" + itemInFrontOfPlayer.name);
        interact(itemInFrontOfPlayer)
    }
}


export const inventoryKeyPressed = () => {
    openInventory()
}


export const pickUpKeyPressed = () => {
    const itemAtPlayerPosition = getItemAtPlayerPosition();

    if (itemAtPlayerPosition && itemAtPlayerPosition instanceof PickableItem) {
        console.log("je ramasse")
        addItemToInventory(itemAtPlayerPosition)
    } else if (itemAtPlayerPosition && itemAtPlayerPosition instanceof ComsumableItem) {
        console.log("je Consomme")
        comsumnItem(itemAtPlayerPosition)
    } else if (itemAtPlayerPosition && itemAtPlayerPosition instanceof UsableItem) {
        console.log("j utilise")
        useItem(itemAtPlayerPosition)
    }

}

const attak = (pnj: PNJItem) => {


    let degatToPnj = (gameState.player.attack - pnj.defense)
    if (degatToPnj < 1) {
        degatToPnj = 1
    }
    pnj.life = pnj.life - degatToPnj

    if (pnj.life < 1) {
        console.log('death of ', pnj.name)
        pnj.death(gameState)
        playSound("kill")
    } else {
        gameState.player.takeDamage(pnj.attack)

    }
    notifyChangedTile(pnj.position);
    playSound("attack")
}


function interact(itemInFrontOfPlayer: DecorativeItem) {
    if (itemInFrontOfPlayer.interaction) {


        if (!gameState.openMenu) {
            gameState.contentMenu = itemInFrontOfPlayer.interaction
            gameState.isOnMap = false
            gameState.openMenu = true
        } else {
            gameState.contentMenu = undefined
            gameState.isOnMap = true
            gameState.openMenu = false
        }

        notifyViewportChanged()

    }

}

function openInventory() {
    if (!gameState.openMenu) {
        gameState.contentMenu = new InventaireTemplate()
        gameState.isOnMap = false
        gameState.openMenu = true
    } else {
        gameState.contentMenu = undefined
        gameState.isOnMap = true
        gameState.openMenu = false
    }

    notifyViewportChanged()


}


const addItemToInventory = (item: PickableItem) => {
    gameState.player.takeItem(item);
    removeItemFromCurrentMapByUid(item.uid);
    notifyViewportChanged()

}

const comsumnItem = (item: ComsumableItem) => {

    gameState.player.consumItem(item)
    removeItemFromCurrentMapByUid(item.uid);
    notifyViewportChanged()

}

const useItem = (item: UsableItem) => {
    console.log("useItem")
    item.playerModificator(gameState.player)
    computeViewportPosition()
    notifyViewportChanged()

}


export const rotatePlayer = (orientation: Orientation) => {
    gameState.player.orientation = orientation;
    notifyChangedTile(gameState.player.position);
}


export const movePlayerToPositionAndMap = (playerX: number, playerY: number, mapName: string) => {
    gameState.player.position.x = playerX;
    gameState.player.position.y = playerY;
    gameState.currentMap = mapName
    // puis je aller en playerX playerY


    console.debug(`player moved to ${playerX}, ${playerY}`);
    notifyViewportChanged() // Revoir

}


export const movePlayerToPosition = (playerX: number, playerY: number) => {

    // puis je aller en playerX playerY
    if (isTileAccessible(playerX, playerY) && isTileIsNotObstructed(playerX, playerY)) {
        const oldPosition = structuredClone(gameState.player.position);

        gameState.player.position.x = playerX;
        gameState.player.position.y = playerY;


        if(getItemAtPosition(oldPosition)){
            notifyViewportChanged()
        }

        notifyChangedTile(oldPosition);
        const fog = getCurrentMap().fog;
        if (fog === undefined) {
            notifyChangedTile(new Position(playerX, playerY));
        } else {
            for(let x = playerX - fog.distance - 1; x <= playerX + fog.distance + 1; x++) {
                for(let y = playerY - fog.distance - 1; y <= playerY + fog.distance + 1; y++) {
                    if (x >= 0 && x < getCurrentMap().grid.getWidth() && y >= 0 && y < getCurrentMap().grid.getHeight()) {
                        notifyChangedTile(new Position(x, y));
                    }
                }
            }
        }

        console.debug(`player moved to ${playerX}, ${playerY}`);
        computeViewportPosition();
        return true
    }

    return false
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
    const boolean = movePlayerToPosition(playerX, playerY);
    if (boolean) {
        playSound("move")
    } else {
        playSound("error")
    }

}

