import {GameConfiguration} from "./model/configuration/GameConfiguration.ts";
import {GameState} from "./model/state/GameState.ts";
import {GRID_PITCH} from "./constants.ts";
import {GridBackgroundPainter} from "./GridBackgroundPainter.ts";

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

    constructor(canvas: HTMLCanvasElement, gameConfiguration: GameConfiguration, gameState: GameState) {
        this.canvas = canvas;
        this.canvasCtx = canvas.getContext("2d") as CanvasRenderingContext2D;
        this.gameConfiguration = gameConfiguration;
        this.gameState = gameState;
        this.prepareCanvas();
        this.fpsInterval = 1000 / gameConfiguration.viewport.fpsLimit;
        this.lastFrameTime = Date.now();
        this.gridBackgroundPainter = new GridBackgroundPainter();
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
            console.debug("new frame drawn")

            this.gridBackgroundPainter.paintFullBackground(this.getCurrentMap().grid, this.canvasCtx)
            //this.drawGrid();
            this.drawPlayer();
        }
    }

    getCurrentMap = () => {
        return this.gameConfiguration.maps[this.gameState.currentMap];
    }
    drawGrid()  {
        const cols = this.getCurrentMap().grid.getWidth(); // Nombre de colonnes
        const rows = this.getCurrentMap().grid.getHeight(); // Nombre de lignes
        const cellSize = GRID_PITCH; // Taille des cellules

        // Remplir le fond (ex: en blanc pour reset au de)
        this.canvasCtx.fillStyle = "#ffffff";
        this.canvasCtx.fillRect(0, 0, this.getCurrentMap().grid.getWidth()*GRID_PITCH, this.getCurrentMap().grid.getHeight()*GRID_PITCH);


        const patternHerb = createPatternHerb(this.canvasCtx)


        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {

                let x = i * cellSize;
                let y = j * cellSize;

                let color
                switch (this.getCurrentMap().grid.getCase(i,j)){
                    case "h" :
                    case "T" : color =patternHerb; break;
                    case " ":  color = "rgba(171,171,171,0.5)"; break;

                    case "l": color = "rgba(252,41,41,1)"; break;
                    case "B":color = "rgb(72,49,11)"; break;
                    case "w": color = "rgba(41,76,252,0.5)"; break;
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
                        color = "#1e1d11"; break;

                   case "S" : color = "#736435"; break;
                    default : color ="rgba(4,243,43,0.74)"
                }

                this.canvasCtx.fillStyle = color;
                this.canvasCtx.fillRect(x,y, GRID_PITCH, GRID_PITCH);


            }
        }


    }



    drawBackground = () => {
        this.canvasCtx.drawImage(this.backgroundImage as HTMLImageElement,
            -this.gameState.viewport.position.x * GRID_PITCH,
            -this.gameState.viewport.position.y * GRID_PITCH);
    }

    drawPlayer = () => {
        this.canvasCtx.drawImage(this.playerImage as HTMLImageElement,
            (this.gameState.player.position.x - this.gameState.viewport.position.x) * GRID_PITCH,
            (this.gameState.player.position.y - this.gameState.viewport.position.y) * GRID_PITCH);
    }

    prepareCanvas = () => {
        this.canvas.width = this.gameConfiguration.viewport.dimension.width * GRID_PITCH;
        this.canvas.height = this.gameConfiguration.viewport.dimension.height * GRID_PITCH;
    }

    async loadAssets() {
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



function createPatternHerb(ctx) {
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