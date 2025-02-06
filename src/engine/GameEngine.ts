import {GameConfiguration} from "./model/configuration/GameConfiguration.ts";
import {draw, init as initGraphicsEngine} from "./GraphicsEngine.ts";
import {GameState} from "./model/state/GameState.ts";
import {PlayerState} from "./model/state/PlayerState.ts";
import {ViewportState} from "./model/state/ViewportState.ts";
import {Position} from "./model/Position.ts";
import {MapState} from "./model/state/MapState.ts";
import {centerViewportOnPlayer,} from "./ViewportManager.ts";
import {init as initAssetLibrary} from "./AssetLibrary.ts";
import {gameConfiguration, setCanvas, setGameConfiguration, setGameState} from "./GameDataService.ts";
import {
    actionKeyPressed,
    downKeyPressed, leftKeyPressed,
    pickUpKeyPressed,
    rightKeyPressed,
    upKeyPressed
} from "./PlayerManager.ts";

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
            case "Z":
                upKeyPressed();
                break;
            case "ArrowDown":
            case "s":
            case "S":
                downKeyPressed();
                break;
            case "ArrowLeft":
            case "q":
            case "Q":
                leftKeyPressed();
                break;
            case "ArrowRight":
            case "d":
            case "D":
                rightKeyPressed();
                break;
            case "f":
            case "F":
                actionKeyPressed();
                break;
            case "t":
            case "T":
                pickUpKeyPressed();
                break;
        }

    })
}
export const run = async () => {
    draw();
}
