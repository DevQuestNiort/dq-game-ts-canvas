import {Grid} from "./model/configuration/Grid.ts";
import {GRID_PITCH} from "./constants.ts";

export class GridBackgroundPainter {
    paintFullBackground = (grid: Grid, canvasCtx: CanvasRenderingContext2D) => {
        for (let x = 0; x < grid.getWidth(); x++) {
            for (let y = 0; y < grid.getHeight(); y++) {
                this.paintBackgroundTile(x, y, grid.getCase(x, y), canvasCtx);
            }
        }
    }

    paintBackgroundTile = (x: number, y: number, type: string, canvasCtx: CanvasRenderingContext2D) => {
        const color = (() => {
            switch (type) {
                case "h" :
                case "T" :
                    return "rgba(100,224,105,0.5)";
                case " ":
                    return "rgba(171,171,171,0.5)";
                case "l":
                    return "rgba(252,41,41,1)";
                case "B":
                    return "rgb(72,49,11)";
                case "w":
                    return "rgba(41,76,252,0.5)";
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
                    return "#1e1d11";
                case "S" :
                    return "#736435";
                default :
                    return "rgba(4,243,43,0.74)"
            }
        })();

        canvasCtx.fillStyle = color;
        canvasCtx.fillRect(x * GRID_PITCH, y * GRID_PITCH, GRID_PITCH, GRID_PITCH);
    }

    createPatternHerb = (ctx) => {
        // Créer un petit canvas temporaire pour le pattern
        const patternCanvas = document.createElement("canvas");
        const pCtx = patternCanvas.getContext("2d");

        // Taille du pattern (doit correspondre à background-size en CSS)
        patternCanvas.width = 16;
        patternCanvas.height = 16;

        // Fond de la cellule
        pCtx.fillStyle = "#206702";
        pCtx.fillRect(0, 0, 16, 16);

        // Points du pattern (équivalent à radial-gradient)
        pCtx.fillStyle = "#1b521b";

        // Premier point en haut à gauche
        pCtx.beginPath();
        pCtx.arc(2.5, 2.5, 2.5, 0, Math.PI * 2);
        pCtx.fill();

        // Deuxième point décalé (8px, 8px) comme en CSS
        pCtx.beginPath();
        pCtx.arc(10.5, 10.5, 2.5, 0, Math.PI * 2);
        pCtx.fill();

        // Créer le pattern
        return ctx.createPattern(patternCanvas, "repeat");
    }
}