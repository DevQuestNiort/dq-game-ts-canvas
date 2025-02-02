import {GameConfiguration} from "./model/configuration/GameConfiguration.ts";
import {GraphicsEngine} from "./GraphicsEngine.ts";
import {GameState} from "./model/state/GameState.ts";
import {PlayerState} from "./model/state/PlayerState.ts";
import {ViewportState} from "./model/state/ViewportState.ts";
import {Position} from "./model/Position.ts";
import {ViewportManager} from "./ViewportManager.ts";
import {MapState} from "./model/state/MapState.ts";
import {ItemType} from "./model/Item.ts";

export class GameEngine {

    canvas: HTMLCanvasElement
    gameConfiguration: GameConfiguration;
    gameState: GameState;
    graphicsEngine: GraphicsEngine;
    viewportManager: ViewportManager;


    constructor(gameConfiguration: GameConfiguration) {
        this.canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
        this.gameConfiguration = gameConfiguration;
        this.gameState = this.buildInitialGameState(gameConfiguration.player.initialState, gameConfiguration.initialMap);
        this.graphicsEngine = new GraphicsEngine(this.canvas as HTMLCanvasElement, this.gameConfiguration, this.gameState);
        this.viewportManager = new ViewportManager(this.gameState, this.gameConfiguration, this.graphicsEngine.notifyViewportChanged);
        this.binKeys();
        this.viewportManager.centerViewportOnPlayer();
    }

    buildInitialGameState: (initialPlayerState: PlayerState, initialMap: string) => GameState = (initialPlayerState: PlayerState, initialMap: string) => {
        //const mapStates = this.gameConfiguration.maps.entries().map((name, map) => {map.name, map.items}).reduce((acc, map) => {acc[map.name] = map.items; return acc}, {});
        const mapStates = Object.entries(this.gameConfiguration.maps).map(([name, map]) => {
            return {
                name: name,
                mapState: new MapState(map.items)
            }
        }).reduce((acc: Record<string, MapState>, map) => {
                acc[map.name] = map.mapState;
                return acc;
            }, {}
        )
        return new GameState(initialPlayerState, new ViewportState(new Position(0, 0)), initialMap, mapStates);
    }

    binKeys = () => {
        addEventListener("keydown", (evt) => {
            switch (evt.key) {
                case "ArrowUp":
                case "z":
                    this.upKeyPressed();
                    break;
                case "ArrowDown":
                case "s":
                    this.downKeyPressed();
                    break;
                case "ArrowLeft":
                case "q":
                    this.leftKeyPressed();
                    break;
                case "ArrowRight":
                case "d":
                    this.rightKeyPressed();
                    break;
                case "f":
                    this.actionKeyPressed();
                    break;
            }
        })
    }

    upKeyPressed = () => {
        this.movePlayer(0, -1);
    }

    downKeyPressed = () => {
        this.movePlayer(0, 1);
    }

    leftKeyPressed = () => {
        this.movePlayer(-1, 0);
    }

    rightKeyPressed = () => {
        this.movePlayer(1, 0);

    }

    actionKeyPressed = () => {
        console.log("je sais rien faire pour l'instant");
    }

    getCurrentMap = () => {
        return this.gameConfiguration.maps[this.gameState.currentMap];
    }

    movePlayer = (x: number, y: number) => {
        let playerX = this.gameState.player.position.x + x;
        if (playerX < 0) {
            playerX = 0;
        }
        if (playerX >= this.getCurrentMap().grid.getWidth()) {
            playerX = this.getCurrentMap().grid.getWidth() - 1;
        }

        let playerY = this.gameState.player.position.y + y;
        if (playerY < 0) {
            playerY = 0;
        }
        if (playerY >= this.getCurrentMap().grid.getHeight()) {
            playerY = this.getCurrentMap().grid.getHeight() - 1;
        }

        // puis je aller en playerX playerY
        if (this.isTileAccessible(playerX, playerY) && this.isTileIsNotObstruct(playerX, playerY)) {
            const oldPosition = structuredClone(this.gameState.player.position);
            this.gameState.player.position.x = playerX;
            this.gameState.player.position.y = playerY;
            this.graphicsEngine.notifyChangedTile(oldPosition);
            this.graphicsEngine.notifyChangedTile(new Position(playerX, playerY));
            console.debug(`player moved to ${playerX}, ${playerY}`);
            this.viewportManager.computeViewportPosition();
        }
    }

    isTileAccessible = (x: number, y: number) => {
        const tileType = this.getCurrentMap().grid.getCase(x, y)
        if (tileType === "l") {
            console.log("aie ca brule")
            return false;
        } else if (["║", "═", "╝", "╗", "╔", "╚", "╩", "╦", "╠", "╣", "╬", "■"].includes(tileType)) {
            console.log("poc");
            return false;
        } else if (tileType === "w") {
            console.log("je vais me noyer")
            return false;
        }
        return true;
    }

    isTileIsNotObstruct = (x: number, y: number) => {
        const itemAtPos = this.gameState.mapStates[this.gameState.currentMap].items.getItemByPosition(new Position(x,y))

        if (itemAtPos && itemAtPos.type=== ItemType.DECORATIF){
            return false
        }
        return true
    }

    run = async () => {
        // on démarre le graphcisEngine
        await this.graphicsEngine.init()
        this.graphicsEngine.draw();
    }
}