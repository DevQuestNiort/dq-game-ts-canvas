import {Grid} from "./model/configuration/Grid.ts";
import {GRID_PITCH} from "./constants.ts";
import {ViewportState} from "./model/state/ViewportState.ts";
import {TwoDimensionalSize} from "./model/TwoDimensionalSize.ts";
import {GridBackgroundFillers} from "./GridBackgroundFillers.ts";
import {Position} from "./model/Position.ts";

export class GridBackgroundPainter {

    fillers: GridBackgroundFillers;
    canvasCtx: CanvasRenderingContext2D;

    constructor(canvasCtx: CanvasRenderingContext2D) {
        this.canvasCtx = canvasCtx;
        this.fillers = new GridBackgroundFillers(canvasCtx);
    }

    paintBackground = (grid: Grid, viewportState: ViewportState, viewportDimension: TwoDimensionalSize, tilesChanged: Position[], viewportChanged: boolean) => {
        if (viewportChanged) {
            for (let x = 0; x < viewportDimension.width; x++) {
                for (let y = 0; y < viewportDimension.height; y++) {
                    this.paintBackgroundTile(x, y, grid.getCase(viewportState.position.x + x, viewportState.position.y + y));
                }
            }
        } else {
            for (let tile of tilesChanged) {
                this.paintBackgroundTile(tile.x - viewportState.position.x, tile.y - viewportState.position.y, grid.getCase(tile.x, tile.y));
            }
        }
    }

    paintBackgroundTile = (x: number, y: number, type: string) => {
        this.canvasCtx.fillStyle = (() => {
            switch (type) {
                case "h" :
                    return this.fillers.getFiller("grass");
                case " ":
                    return "rgba(171,171,171,1)";
                case "l":
                    return this.fillers.getFiller("lava");
                case "B":
                    return "rgb(72,49,11)";
                case "w":
                    return this.fillers.getFiller("water");
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
                    return this.fillers.getFiller("wall");
                case "S" :
                    return "#736435";
                default :
                    return "rgba(4,243,43,0.74)"
            }
        })();
        this.canvasCtx.fillRect(x * GRID_PITCH, y * GRID_PITCH, GRID_PITCH, GRID_PITCH);
    }

}