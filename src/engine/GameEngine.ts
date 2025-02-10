import {GameConfiguration} from "./model/configuration/GameConfiguration.ts";
import {draw, init as initGraphicsEngine, notifyViewportChanged} from "./GraphicsEngine.ts";
import {GameState} from "./model/state/GameState.ts";
import {PlayerState} from "./model/state/PlayerState.ts";
import {ViewportState} from "./model/state/ViewportState.ts";
import {Position} from "./model/Position.ts";
import {MapState} from "./model/state/MapState.ts";
import {centerViewportOnPlayer,} from "./ViewportManager.ts";
import {init as initAssetLibrary} from "./AssetLibrary.ts";
import {gameConfiguration, gameState, setCanvas, setGameConfiguration, setGameState} from "./GameDataService.ts";
import {
    actionKeyPressed,
    downKeyPressed, interactKeyPressed, inventoryKeyPressed, leftKeyPressed,
    pickUpKeyPressed,
    rightKeyPressed,
    upKeyPressed
} from "./PlayerManager.ts";
import {Options} from "./model/state/Options.ts";
import {getItemInFrontOfPlayer} from "./MapManager.ts";
import {PNJItem} from "./model/item/PNJItem.ts";
import {DecorativeItem} from "./model/item/DecorativeItem.ts";

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
    return new GameState(initialPlayerState, new ViewportState(new Position(0, 0)), initialMap, mapStates,new Options((localStorage.getItem("sound")|| "ON") === "OFF" ));
}

const bindKeys = () => {
    addEventListener("keydown", (evt) => {
        if (evt.ctrlKey && evt.shiftKey && evt.key.toLowerCase() === "a"){
            evt.preventDefault();
            gameConfiguration.debugMod = ! gameConfiguration.debugMod
        }

        switch (evt.key) {
            case "ArrowUp":
            case "z":
            case "Z":

                if( ! gameState.isOnMap ) {
                    break
                }
                upKeyPressed();
                break;
            case "ArrowDown":
            case "s":
            case "S":
                if( ! gameState.isOnMap ) {
                    break
                }
                downKeyPressed();
                break;
            case "ArrowLeft":
            case "q":
            case "Q":
                if( ! gameState.isOnMap ) {
                    break
                }
                leftKeyPressed();
                break;
            case "ArrowRight":
            case "d":
            case "D":
                if( ! gameState.isOnMap ) {
                    break
                }
                rightKeyPressed();
                break;
            case "f":
            case "F":
                if( ! gameState.isOnMap ) {
                    break
                }
                actionKeyPressed();
                break;
            case "t":
            case "T":
                if( ! gameState.isOnMap ) {
                    break
                }
                pickUpKeyPressed();
                break;
            case "m":
            case "M":
                muteSwitch();

                break;

            case "i":
            case "I":
                inventoryKeyPressed()
                break;

            case "r":
            case "R":


                interactKeyPressed()


                break;

        }

    })
}


function muteSwitch() {

    gameState.options.mute = !gameState.options.mute
    localStorage.setItem("sound",gameState.options.mute ? "OFF": "ON" )
}

export const run = async () => {
    draw();
}
