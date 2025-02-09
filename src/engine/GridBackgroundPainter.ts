import {Grid} from "./model/configuration/Grid.ts";
import {GRID_PITCH} from "./constants.ts";
import {ViewportState} from "./model/state/ViewportState.ts";
import {TwoDimensionalSize} from "./model/TwoDimensionalSize.ts";
import {getFiller, init as initGridBackgroundFillers} from "./GridBackgroundFillers.ts";
import {Position} from "./model/Position.ts";
import {getImage, init as initAssetLibrary} from "./AssetLibrary.ts";
import {canvasContext} from "./GameDataService.ts";


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
                return  "rgb(0,0,0)";
            case "p":
                return  "rgb(0,0,0)";
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
            canvasContext.drawImage(getImage("arbre"), x * GRID_PITCH, y * GRID_PITCH, GRID_PITCH, GRID_PITCH);
            break

    }
}