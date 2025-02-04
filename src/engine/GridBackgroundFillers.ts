import {GRID_PITCH} from "./constants.ts";

export class GridBackgroundFillers {
    fillers: Record<string, string | CanvasGradient | CanvasPattern>;

    constructor(canvasCtx: CanvasRenderingContext2D) {
        this.fillers = {};
        this.fillers.wall = this.createPatternWall(canvasCtx);
        this.fillers.lava = this.createPatternLava(canvasCtx);
        this.fillers.water = this.createPatternWater(canvasCtx);
        this.fillers.grass = this.createPatternHerb(canvasCtx);
        this.fillers.tree = this.createPatternHerb(canvasCtx);
        this.fillers.dalle = this.createPatternDalle(canvasCtx);
    }

    getFiller(name: string): string | CanvasGradient | CanvasPattern {
        return this.fillers[name];
    }



    createPatternWall = (canvasCtx: CanvasRenderingContext2D) => {
        // Créer un petit canvas temporaire pour le pattern
        const patternCanvas = document.createElement("canvas");
        const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;

        // Taille du pattern (doit correspondre à background-size en CSS)
        patternCanvas.width = 32;
        patternCanvas.height = 32;

        // Fond de la cellulesd
        pCtx.fillStyle = "#3a3a38";
        pCtx.fillRect(0, 0, 32, 32);

        // Points du pattern (équivalent à radial-gradient)
        pCtx.fillStyle = "#5d5f5a";

        // Premier point en haut à gauche
        pCtx.fillRect(0,0.5,13,6.5)
        pCtx.fillRect(14,0.5,12,6.5)
        pCtx.fillRect(27,0.5,12,6.5)


        // line 2
        pCtx.fillRect(0,8,6,6)

        pCtx.fillRect(7,8,12,6)

        pCtx.fillRect(20,8,11,6)
// line 3
        pCtx.fillRect(10,15,12,6)

        pCtx.fillRect(5,15,4,6)
        pCtx.fillRect(0,15,4,6)
        pCtx.fillRect(23,15,9,6)

        // line 4

        pCtx.fillRect(18,22,14,4)
        pCtx.fillRect(0,22,6,4)
        pCtx.fillRect(7,22,10,4)

         //line 5

        pCtx.fillRect(0.5,27,14.5,4)
        pCtx.fillRect(16,27,8,4)
        pCtx.fillRect(25,27,6.5,4)
        // Créer le pattern
        return canvasCtx.createPattern(patternCanvas, "repeat") as CanvasPattern;
    }

    createPatternDalle = (canvasCtx: CanvasRenderingContext2D) => {
        // Créer un petit canvas temporaire pour le pattern
        const patternCanvas = document.createElement("canvas");
        const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;

        // Taille du pattern (doit correspondre à background-size en CSS)
        patternCanvas.width = 16;
        patternCanvas.height = 16;

        // Fond de la cellulesd
        pCtx.fillStyle = "#c9c8c8";
        pCtx.fillRect(0, 0, 32, 32);

        // Points du pattern (équivalent à radial-gradient)
        pCtx.fillStyle = "#e7e7e7";

        // Premier point en haut à gauche
        pCtx.fillRect(0,0,8,8)
        pCtx.fillRect(8,8,8,8)
        // Créer le pattern
        return canvasCtx.createPattern(patternCanvas, "repeat") as CanvasPattern;
    }

    createPatternHerb = (canvasCtx: CanvasRenderingContext2D) => {
        // Créer un petit canvas temporaire pour le pattern
        const patternCanvas = document.createElement("canvas");
        const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;

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
        return canvasCtx.createPattern(patternCanvas, "repeat") as CanvasPattern;
    }


    createPatternWater = (canvasCtx: CanvasRenderingContext2D) => {
        // Créer un petit canvas temporaire pour le pattern
        const patternCanvas = document.createElement("canvas");
        const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;

        // Taille du pattern (doit correspondre à background-size en CSS)
        patternCanvas.width = 32;
        patternCanvas.height = 32;

        // Fond bleu principal
        pCtx.fillStyle = "#0073ff";
        pCtx.fillRect(0, 0, 32, 32);

        // Dessiner les lignes diagonales (équivalent à repeating-linear-gradient)
        pCtx.strokeStyle = "#171dc8";
        pCtx.lineWidth = 2;

        pCtx.beginPath();
        pCtx.moveTo( 0, 0);
        pCtx.lineTo( 8, 8);
        pCtx.lineTo( 16, 0);
        pCtx.lineTo( 24, 8);
        pCtx.lineTo( 32, 0);

        pCtx.moveTo(  0, 8);
        pCtx.lineTo(  8, 16);
        pCtx.lineTo( 16, 8);
        pCtx.lineTo( 24, 16);
        pCtx.lineTo( 32, 8);


        pCtx.moveTo(  0, 16);
        pCtx.lineTo(  8, 24);
        pCtx.lineTo( 16, 16);
        pCtx.lineTo( 24, 24);
        pCtx.lineTo( 32, 16);

        pCtx.moveTo(  0, 24);
        pCtx.lineTo(  8, 32);
        pCtx.lineTo( 16, 24);
        pCtx.lineTo( 24, 32);
        pCtx.lineTo( 32, 24);

        pCtx.stroke();

        // Créer le pattern
        return canvasCtx.createPattern(patternCanvas, "repeat") as CanvasPattern;
    }
    createPatternLava = (canvasCtx: CanvasRenderingContext2D) => {
        const patternCanvas = document.createElement("canvas");
        const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;
        // Taille du pattern (basée sur background-size)
        patternCanvas.width = 16;
        patternCanvas.height = 16;

// Fond principal en rouge
        pCtx.fillStyle = "#d21111";
        pCtx.fillRect(0, 0, 32, 32);

// Dessiner les cercles radiaux
        pCtx.fillStyle = "#ffae00";

// Cercle 1 (0,0)
        pCtx.beginPath();
        pCtx.arc(2.5, 2.5, 2, 0, Math.PI * 2);
        pCtx.fill();

        pCtx.beginPath();
        pCtx.arc(10.5, 10.5, 2, 0, Math.PI * 2);
        pCtx.fill();



        pCtx.arc(0, 0, 2, 0, Math.PI * 2);
        pCtx.fill();

        return canvasCtx.createPattern(patternCanvas, "repeat") as CanvasPattern;
    }

}
