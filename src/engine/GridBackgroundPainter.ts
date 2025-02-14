import {Grid} from "./model/configuration/Grid.ts";
import {GRID_PITCH} from "./constants.ts";
import {ViewportState} from "./model/state/ViewportState.ts";
import {TwoDimensionalSize} from "./model/TwoDimensionalSize.ts";
import {getFiller, init as initGridBackgroundFillers} from "./GridBackgroundFillers.ts";
import {Position} from "./model/Position.ts";
import {getImage, init as initAssetLibrary} from "./AssetLibrary.ts";
import {canvasContext, gameConfiguration} from "./GameDataService.ts";


export const init = async () => {
    initGridBackgroundFillers()
    await initAssetLibrary()
}

export const paintBackground = (grid: Grid, viewportState: ViewportState, viewportDimension: TwoDimensionalSize, tilesChanged: Position[], viewportChanged: boolean) => {
    if (viewportChanged) {
        for (let x = 0; x < viewportDimension.width; x++) {
            for (let y = 0; y < viewportDimension.height; y++) {
                paintBackgroundTile(x, y, grid.getCase(viewportState.position.x + x, viewportState.position.y + y));
            }
        }
    } else {
        for (let tile of tilesChanged) {
            paintBackgroundTile(tile.x - viewportState.position.x, tile.y - viewportState.position.y, grid.getCase(tile.x, tile.y));
        }
    }

    if (gameConfiguration.debugMod) {
        canvasContext.strokeStyle = "#c400ff";
        canvasContext.strokeRect(gameConfiguration.viewport.deadZone.position.x * GRID_PITCH,
            gameConfiguration.viewport.deadZone.position.y * GRID_PITCH,
            gameConfiguration.viewport.deadZone.dimension.width * GRID_PITCH,
            gameConfiguration.viewport.deadZone.dimension.height * GRID_PITCH);
    }


}

const paintBackgroundTile = (x: number, y: number, type: string) => {
    canvasContext.fillStyle = (() => {
        switch (type) {
            case "T" :
                return getFiller("tree");
            case "h" :
                return getFiller("grass");
            case " ":
                // return "rgb(255,255,255)";
                return getFiller("dalle");
            case "l":
                return getFiller("lava");
            case "B":
                return getFiller("wood")
            case "w":
                return getFiller("water");
            case "║":
            case "═":
            case "╝":
            case "╗":
            case "╔":
            case "╚":
            case "╩":
            case "╦":
            case "╠":
            case "╣":
            case "╬":
            case "■":
                return getFiller("wall");
            case "x":
                return "rgb(0,0,0)";
            case "p":
                return "rgb(0,0,0)";
            case "S" :
                return getFiller("sand");
            default :
                return "rgba(0,0,0)"
        }
    })();
    canvasContext.fillRect(x * GRID_PITCH, y * GRID_PITCH, GRID_PITCH, GRID_PITCH);

    // build couche items
    switch (type) {
        case "T" :
            canvasContext.drawImage(getImage("bg-herbe"), x * GRID_PITCH, y * GRID_PITCH, GRID_PITCH, GRID_PITCH);
            canvasContext.drawImage(getImage("arbre"), x * GRID_PITCH, y * GRID_PITCH, GRID_PITCH, GRID_PITCH);
            break;
        case "h" :
            canvasContext.drawImage(getImage("bg-herbe"), x * GRID_PITCH, y * GRID_PITCH, GRID_PITCH, GRID_PITCH);

            break;
        case "l" :
            canvasContext.drawImage(getImage("bg-lava"), x * GRID_PITCH, y * GRID_PITCH, GRID_PITCH, GRID_PITCH);
            break

        case "║":
        case "═":
        case "╝":
        case "╗":
        case "╔":
        case "╚":
        case "╩":
        case "╦":
        case "╠":
        case "╣":
        case "╬":
        case "■":
            canvasContext.drawImage(getImage("bg-mur"), x * GRID_PITCH, y * GRID_PITCH, GRID_PITCH, GRID_PITCH);
            break
        case " ":
            canvasContext.drawImage(getImage("bg-sol"), x * GRID_PITCH, y * GRID_PITCH, GRID_PITCH, GRID_PITCH);
            break
        case "w":
            canvasContext.drawImage(getImage("bg-water"), x * GRID_PITCH, y * GRID_PITCH, GRID_PITCH, GRID_PITCH);
            break
        case "S":
            canvasContext.drawImage(getImage("bg-chemin"), x * GRID_PITCH, y * GRID_PITCH, GRID_PITCH, GRID_PITCH);

            break
    }
}