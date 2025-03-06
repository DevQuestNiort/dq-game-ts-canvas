import {GRID_PITCH} from "./constants.ts";
import {init as initGridBackgroundPainter, paintBackground} from "./GridBackgroundPainter.ts";
import {Position} from "./model/Position.ts";
import {paintItemsLayer} from "./ItemsLayerPainter.ts";
import {Orientation} from "./model/Orientation.ts";
import {Debug} from "../component/Debug.ts";
import {canvas, canvasContext, gameConfiguration, gameState, getCurrentMap} from "./GameDataService.ts";
import {paintDialogs} from "./DialogPainter.ts";
import {paintFog} from "./FogPainter.ts";


let gameDebug: HTMLElement
let playerImage: HTMLImageElement | undefined;
let fpsInterval: number;
let lastFrameTime: number;
let tilesChanged: Position[];
let viewportChanged: boolean;

export const init = async () => {
    gameDebug = document.getElementById("game-debug") as HTMLElement;
    prepareCanvas();
    fpsInterval = 1000 / gameConfiguration.viewport.fpsLimit;
    lastFrameTime = Date.now();
    await initGridBackgroundPainter();
    tilesChanged = [];
    viewportChanged = true;
    await loadImage(gameConfiguration.player.playerImageUrl)
        .then(img => playerImage = img, err => console.log(err))
}

export const draw = () => {
    // on rappelle cette fonction à chaque animation frame du navigateur
    requestAnimationFrame(draw);

    // si la dernière frame générée était il y a assez longtemps (fps limit), on peut draw une nouvelle frame
    const currentTime = Date.now();
    const elapsedTimeSinceLastFrame = currentTime - lastFrameTime;
    if (elapsedTimeSinceLastFrame > fpsInterval) {


        gameDebug.innerHTML = Debug(gameState, gameConfiguration)
        // on met à jour la date de la dernière frame en tenant compte du fait qu'une frame n'est pas forcément déssinée pile à 1 fpsInterval de l'ancienne fraùe
        lastFrameTime = currentTime - (elapsedTimeSinceLastFrame % fpsInterval);
        paintBackground(getCurrentMap().grid, gameState.viewport, gameConfiguration.viewport.dimension, tilesChanged, viewportChanged)
        paintItemsLayer(getCurrentMapState().items, tilesChanged, viewportChanged);
        drawPlayer();
        paintFog(tilesChanged, viewportChanged);
        paintDialogs();
        tilesChanged = [];
        viewportChanged = false;
    }
}

export const notifyChangedTile = (changedTile: Position) => {
    console.log(`tile changed notification x=${changedTile.x}, y=${changedTile.y}`);
    tilesChanged.push(changedTile);
}
export const notifyViewportChanged = () => {
    console.log("viewport changed notification");
    viewportChanged = true;
}

const getCurrentMapState = () => {
    return gameState.mapStates[gameState.currentMap];
}

const drawPlayer = () => {
    const shift = (() => {
        switch (gameState.player.orientation) {
            case Orientation.UP:
                return 0;
            case Orientation.DOWN:
                return 1;
            case Orientation.LEFT:
                return 2;
            case Orientation.RIGHT:
                return 3;
        }
    })();

    canvasContext.drawImage(playerImage as HTMLImageElement, GRID_PITCH * shift, 0, GRID_PITCH, GRID_PITCH, (gameState.player.position.x - gameState.viewport.position.x) * GRID_PITCH, (gameState.player.position.y - gameState.viewport.position.y) * GRID_PITCH, GRID_PITCH, GRID_PITCH);
}

const prepareCanvas = () => {
    canvas.width = gameConfiguration.viewport.dimension.width * GRID_PITCH;
    canvas.height = gameConfiguration.viewport.dimension.height * GRID_PITCH + 110;
}

const loadImage: (src: string) => Promise<HTMLImageElement> = (src: string) => {
    return new Promise((resolve, reject) => {
        let img = new Image()
        img.onload = () => resolve(img);
        img.onerror = reject
        img.src = src
    })
}




