import {GameConfiguration} from "./model/configuration/GameConfiguration.ts";
import {GameState} from "./model/state/GameState.ts";
import {GRID_PITCH} from "./constants.ts";
import {GridBackgroundPainter} from "./GridBackgroundPainter.ts";
import {Position} from "./model/Position.ts";
import {ItemsLayerPainter} from "./ItemsLayerPainter.ts";

export class GraphicsEngine {
    canvas: HTMLCanvasElement;
    canvasCtx: CanvasRenderingContext2D;
    gameConfiguration: GameConfiguration;
    gameState: GameState;
    backgroundImage: HTMLImageElement | undefined;
    playerImage: HTMLImageElement | undefined;
    fpsInterval: number;
    lastFrameTime: number;
    gridBackgroundPainter: GridBackgroundPainter;
    itemsLayerPainter: ItemsLayerPainter;
    tilesChanged: Position[];
    viewportChanged: boolean;

    constructor(canvas: HTMLCanvasElement, gameConfiguration: GameConfiguration, gameState: GameState) {
        this.canvas = canvas;
        this.canvasCtx = canvas.getContext("2d") as CanvasRenderingContext2D;
        this.gameConfiguration = gameConfiguration;
        this.gameState = gameState;
        this.prepareCanvas();
        this.fpsInterval = 1000 / gameConfiguration.viewport.fpsLimit;
        this.lastFrameTime = Date.now();
        this.gridBackgroundPainter = new GridBackgroundPainter(this.canvasCtx);
        this.itemsLayerPainter = new ItemsLayerPainter(this.canvasCtx, this.gameState, this.gameConfiguration);
        this.tilesChanged = [];
        this.viewportChanged = true;
    }

    draw = () => {
        // on rappelle cette fonction à chaque animation frame du navigateur
        requestAnimationFrame(this.draw);

        // si la dernière frame générée était il y a assez longtemps (fps limit), on peut draw une nouvelle frame
        const currentTime = Date.now();
        const elapsedTimeSinceLastFrame = currentTime - this.lastFrameTime;
        if (elapsedTimeSinceLastFrame > this.fpsInterval) {
            // on met à jour la date de la dernière frame en tenant compte du fait qu'une frame n'est pas forcément déssinée pile à 1 fpsInterval de l'ancienne fraùe
            this.lastFrameTime = currentTime - (elapsedTimeSinceLastFrame % this.fpsInterval);
            this.gridBackgroundPainter.paintBackground(this.getCurrentMap().grid, this.gameState.viewport, this.gameConfiguration.viewport.dimension, this.tilesChanged, this.viewportChanged)
            this.itemsLayerPainter.paintItemsLayer(this.getCurrentMapState().items);
            //this.drawGrid();
            this.drawPlayer();
            this.tilesChanged = [];
            this.viewportChanged = false;
        }
    }

    notifyChangedTile = (changedTile: Position) => {
        console.log(`tile changed notification x=${changedTile.x}, y=${changedTile.y}`);
        this.tilesChanged.push(changedTile);
    }
    notifyViewportChanged = () => {
        console.log("viewport changed notification");
        this.viewportChanged = true;
    }

    getCurrentMap = () => {
        return this.gameConfiguration.maps[this.gameState.currentMap];
    }

    getCurrentMapState = () => {
        return this.gameState.mapStates[this.gameState.currentMap];
    }


    drawBackground = () => {
        this.canvasCtx.drawImage(this.backgroundImage as HTMLImageElement,
            -this.gameState.viewport.position.x * GRID_PITCH,
            -this.gameState.viewport.position.y * GRID_PITCH);
    }

    drawPlayer = () => {
        this.canvasCtx.drawImage(this.playerImage as HTMLImageElement,
            (this.gameState.player.position.x - this.gameState.viewport.position.x) * GRID_PITCH,
            (this.gameState.player.position.y - this.gameState.viewport.position.y) * GRID_PITCH,
            GRID_PITCH,
            GRID_PITCH);
    }

    prepareCanvas = () => {
        this.canvas.width = this.gameConfiguration.viewport.dimension.width * GRID_PITCH;
        this.canvas.height = this.gameConfiguration.viewport.dimension.height * GRID_PITCH;
    }

    async init() {
        await this.itemsLayerPainter.init();
        await this.loadImage(this.gameConfiguration.player.playerImageUrl)
            .then(img => this.playerImage = img, err => console.log(err))
        // await this.loadImage(this.gameConfiguration.maps[this.gameState.currentMap].backgroundImageUrl)
        //     .then(img => this.backgroundImage = img, err => console.log(err))
    }

    loadImage(src: string): Promise<HTMLImageElement> {
        return new Promise((resolve, reject) => {
            let img = new Image()
            img.onload = () => resolve(img);
            img.onerror = reject
            img.src = src
        })
    }
}



