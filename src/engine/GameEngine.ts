import {GameConfiguration} from "./model/configuration/GameConfiguration.ts";
import {GraphicsEngine} from "./GraphicsEngine.ts";
import {GameState} from "./model/state/GameState.ts";
import {PlayerState} from "./model/state/PlayerState.ts";
import {ViewportState} from "./model/state/ViewportState.ts";
import {Position} from "./model/Position.ts";

export class GameEngine {

    canvas: HTMLCanvasElement
    gameConfiguration: GameConfiguration;
    gameState: GameState;
    graphicsEngine: GraphicsEngine;

    constructor(gameConfiguration: GameConfiguration) {
        this.canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
        this.gameConfiguration = gameConfiguration;
        this.gameState = this.buildInitialGameState(gameConfiguration.player.initialState, gameConfiguration.initialMap);
        this.graphicsEngine = new GraphicsEngine(this.canvas as HTMLCanvasElement, this.gameConfiguration, this.gameState);
        this.binKeys();
        this.centerViewportOnPlayer();
    }

    buildInitialGameState: (initialPlayerState: PlayerState, initialMap: string) => GameState = (initialPlayerState: PlayerState, initialMap: string) => {
        return new GameState(initialPlayerState, new ViewportState(new Position(0, 0)), initialMap);
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
        console.debug("up key pressed");
        this.movePlayer(0, -1);
    }

    downKeyPressed = () => {
        console.debug("down key pressed");
        this.movePlayer(0, 1);
    }

    leftKeyPressed = () => {
        console.debug("left key pressed");
        this.movePlayer(-1, 0);
    }

    rightKeyPressed = () => {
        console.debug("right key pressed");
        this.movePlayer(1, 0);

    }

    actionKeyPressed = () => {
        console.debug("action key pressed");
    }

    getCurrentMap = () => {
        return this.gameConfiguration.maps[this.gameState.currentMap];
    }

    centerViewportOnPlayer = () => {
        this.setViewportPositionWithinMapX(this.gameState.player.position.x - Math.floor(this.gameConfiguration.viewport.dimension.width / 2))
        this.setViewportPositionWithinMapY(this.gameState.player.position.y - Math.floor(this.gameConfiguration.viewport.dimension.height / 2));
    }

    computeViewportPosition = () => {
        // on recalcule le viewport au cas ou on sort de la dead zone
        // top boundary
        if (this.gameState.player.position.y < (this.gameState.viewport.position.y + this.gameConfiguration.viewport.deadZone.position.y)) {
            this.setViewportPositionWithinMapY(this.gameState.player.position.y - this.gameConfiguration.viewport.deadZone.position.y);
        // bottom boundary
        } else if (this.gameState.player.position.y > (this.gameState.viewport.position.y + this.gameConfiguration.viewport.deadZone.position.y + this.gameConfiguration.viewport.deadZone.dimension.height)) {
            this.setViewportPositionWithinMapY(this.gameState.player.position.y - this.gameConfiguration.viewport.deadZone.position.y - this.gameConfiguration.viewport.deadZone.dimension.height);
        }
        // left boundary
        if (this.gameState.player.position.x < (this.gameState.viewport.position.x + this.gameConfiguration.viewport.deadZone.position.x)) {
            this.setViewportPositionWithinMapX(this.gameState.player.position.x - this.gameConfiguration.viewport.deadZone.position.x);
        // right boundary
        } else if (this.gameState.player.position.x > (this.gameState.viewport.position.x + this.gameConfiguration.viewport.deadZone.position.x + this.gameConfiguration.viewport.deadZone.dimension.width)) {
            this.setViewportPositionWithinMapX(this.gameState.player.position.x - this.gameConfiguration.viewport.deadZone.position.x - this.gameConfiguration.viewport.deadZone.dimension.width);
        }
    }

    setViewportPositionWithinMapX(x: number) {
        let viewportX = x;
        if (viewportX < 0) {
            viewportX = 0;
        }
        if (viewportX + this.gameConfiguration.viewport.dimension.width > this.getCurrentMap().grid.getWidth()) {
            viewportX = this.getCurrentMap().grid.getWidth() - this.gameConfiguration.viewport.dimension.width;
        }
        this.gameState.viewport.position.x = viewportX;
    }

    setViewportPositionWithinMapY(y: number) {
        let viewportY = y;
        if (viewportY < 0) {
            viewportY = 0;
        }
        if (viewportY + this.gameConfiguration.viewport.dimension.height > this.getCurrentMap().grid.getHeight()) {
            viewportY = this.getCurrentMap().grid.getHeight() - this.gameConfiguration.viewport.dimension.height;
        }
        this.gameState.viewport.position.y = viewportY;
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
        this.gameState.player.position.x = playerX;
        this.gameState.player.position.y = playerY;
        console.debug(`player moved to ${playerX}, ${playerY}`);
        this.computeViewportPosition();
    }

    run = async () => {
        // on démarre le graphcisEngine
        await this.graphicsEngine.loadAssets()
        this.graphicsEngine.draw();
    }
}