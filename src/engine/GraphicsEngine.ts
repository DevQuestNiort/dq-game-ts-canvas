import {GRID_PITCH} from "./constants.ts";
import {init as initGridBackgroundPainter, paintBackground} from "./GridBackgroundPainter.ts";
import {Position} from "./model/Position.ts";
import {paintItemsLayer} from "./ItemsLayerPainter.ts";
import {Orientation} from "./model/Orientation.ts";
import {Debug} from "../component/Debug.ts";
import {canvas, canvasContext, gameConfiguration, gameState, getCurrentMap} from "./GameDataService.ts";
import {getImage} from "./AssetLibrary.ts";


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


        gameDebug.innerHTML = Debug(gameState)
        // on met à jour la date de la dernière frame en tenant compte du fait qu'une frame n'est pas forcément déssinée pile à 1 fpsInterval de l'ancienne fraùe
        lastFrameTime = currentTime - (elapsedTimeSinceLastFrame % fpsInterval);
        paintBackground(getCurrentMap().grid, gameState.viewport, gameConfiguration.viewport.dimension, tilesChanged, viewportChanged)
        paintItemsLayer(getCurrentMapState().items);


        paintMenu()
        drawPlayer();
        tilesChanged = [];
        viewportChanged = false;
     
    }
}


function paintMenu(){
    const patternCanvas = document.createElement("canvas");
    patternCanvas.width = GRID_PITCH * 35;
    patternCanvas.height =  110;
    const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;

    pCtx.fillStyle = "#245a5a";
    pCtx.fillRect(0, 0, GRID_PITCH * 35, 110);

    pCtx.fillStyle = "#000000";
    pCtx.fillRect(0, 0, GRID_PITCH * 35, 110);
    pCtx.fillStyle = "#ffffff";
    pCtx.strokeStyle = "#ffffff"; // Définition de la couleur du contour
    pCtx.lineWidth = 4; // Épaisseur du contour
    pCtx.strokeRect( 0 + 3, 0 +3 , ((GRID_PITCH * 35)/2) -3, 110 - 6);
    pCtx.strokeRect( ((GRID_PITCH * 35)/2) + 3, 0 +3 , ((GRID_PITCH * 35)/2) -6, 110 - 6);
    pCtx.font = "20px gamms";
    pCtx.fillStyle = "#fff";
    pCtx.fillText("Points de Vie :  " + gameState.player.life, 10, 0 +3 + 22, 160)
    pCtx.fillText("Attaque :  " + gameState.player.attack  , 200, 0 +3 + 22, 125)
    pCtx.fillText("Defense :  " + gameState.player.defense, 350, 0 +3 + 22, 125)

    pCtx.fillText("Inventaire: ", 10, 0 +3 + 22 * 2 + 10, 125)
    gameState.player.inventory.get().map(item => getImage(item.image))
        .forEach((image,index) => pCtx.drawImage(image, 10 + index * (GRID_PITCH + 5), 67, GRID_PITCH, GRID_PITCH ) )


    canvasContext.drawImage(patternCanvas, 0, GRID_PITCH * 23);
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




