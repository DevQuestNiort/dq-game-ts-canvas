import {GameConfiguration} from "./model/configuration/GameConfiguration.ts";
import {draw, init as initGraphicsEngine, notifyChangedTile} from "./GraphicsEngine.ts";
import {GameState} from "./model/state/GameState.ts";
import {PlayerState} from "./model/state/PlayerState.ts";
import {ViewportState} from "./model/state/ViewportState.ts";
import {Position} from "./model/Position.ts";
import {MapState} from "./model/state/MapState.ts";
import {ItemType} from "./model/Item.ts";
import {Orientation} from "./model/Orientation.ts";
import {centerViewportOnPlayer, computeViewportPosition} from "./ViewportManager.ts";
import {init as initAssetLibrary} from "./AssetLibrary.ts";
import {gameConfiguration, gameState, setCanvas, setGameConfiguration, setGameState} from "./GameDataService.ts";

export const init = async (gameCfg: GameConfiguration) => {
    setCanvas(document.getElementById("gameCanvas") as HTMLCanvasElement);
    setGameConfiguration(gameCfg);
    setGameState(buildInitialGameState(gameConfiguration.player.initialState, gameConfiguration.initialMap));
    await initAssetLibrary();
    await initGraphicsEngine();
    bindKeys();
    centerViewportOnPlayer();
}

const buildInitialGameState: (initialPlayerState: PlayerState, initialMap: string) => GameState = (initialPlayerState: PlayerState, initialMap: string) => {
    const mapStates = Object.entries(gameConfiguration.maps).map(([name, map]) => {
        return {
            name: name, mapState: new MapState(map.items)
        }
    }).reduce((acc: Record<string, MapState>, map) => {
        acc[map.name] = map.mapState;
        return acc;
    }, {})
    return new GameState(initialPlayerState, new ViewportState(new Position(0, 0)), initialMap, mapStates);
}

const bindKeys = () => {
    addEventListener("keydown", (evt) => {
        switch (evt.key) {
            case "ArrowUp":
            case "z":
                upKeyPressed();
                break;
            case "ArrowDown":
            case "s":
                downKeyPressed();
                break;
            case "ArrowLeft":
            case "q":
                leftKeyPressed();
                break;
            case "ArrowRight":
            case "d":
                rightKeyPressed();
                break;
            case "f":
                actionKeyPressed();
                break;
        }
    })
}

const upKeyPressed = () => {
    rotatePlayer(Orientation.UP);
    movePlayer(0, -1);
}

const downKeyPressed = () => {
    rotatePlayer(Orientation.DOWN);
    movePlayer(0, 1);
}

const leftKeyPressed = () => {
    rotatePlayer(Orientation.LEFT);
    movePlayer(-1, 0);
}

const rightKeyPressed = () => {
    rotatePlayer(Orientation.RIGHT);
    movePlayer(1, 0);

}

const actionKeyPressed = () => {
    console.log("je sais rien faire pour l'instant");
}

const getCurrentMap = () => {
    return gameConfiguration.maps[gameState.currentMap];
}

const rotatePlayer = (orientation: Orientation) => {
    gameState.player.orientation = orientation;
    notifyChangedTile(gameState.player.position);
}

const movePlayer = (x: number, y: number) => {
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
    if (isTileAccessible(playerX, playerY) && isTileIsNotObstruct(playerX, playerY)) {
        const oldPosition = structuredClone(gameState.player.position);
        gameState.player.position.x = playerX;
        gameState.player.position.y = playerY;
        notifyChangedTile(oldPosition);
        notifyChangedTile(new Position(playerX, playerY));
        console.debug(`player moved to ${playerX}, ${playerY}`);
        computeViewportPosition();
    }
}

const isTileAccessible = (x: number, y: number) => {
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

const isTileIsNotObstruct = (x: number, y: number) => {
    const itemAtPos = gameState.mapStates[gameState.currentMap].items.getItemByPosition(new Position(x, y))

    if (itemAtPos && itemAtPos.type === ItemType.DECORATIF) {
        return false
    }
    return true
}

export const run = async () => {
    draw();
}
