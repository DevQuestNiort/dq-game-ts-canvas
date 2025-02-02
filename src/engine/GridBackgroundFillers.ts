export class GridBackgroundFillers {
    fillers: Record<string, string | CanvasGradient | CanvasPattern>;

    constructor(canvasCtx: CanvasRenderingContext2D) {
        this.fillers = {};
        this.fillers.wall = "#1e1d11";
        this.fillers.lava = this.createPatternLava(canvasCtx);
        this.fillers.water = this.createPatternWater(canvasCtx);
        this.fillers.grass = this.createPatternHerb(canvasCtx);
    }

    getFiller(name: string): string | CanvasGradient | CanvasPattern {
        return this.fillers[name];
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
        patternCanvas.width = 8;
        patternCanvas.height = 8;

        // Fond bleu principal
        pCtx.fillStyle = "#0073ff";
        pCtx.fillRect(0, 0, 8, 8);

        // Dessiner les lignes diagonales (équivalent à repeating-linear-gradient)
        pCtx.strokeStyle = "#171dc8";
        pCtx.lineWidth = 3;

        pCtx.beginPath();
        pCtx.moveTo(0, 0);
        pCtx.lineTo(8, 8);
        pCtx.stroke();

        // Créer le pattern
        return canvasCtx.createPattern(patternCanvas, "repeat") as CanvasPattern;
    }
    createPatternLava = (canvasCtx: CanvasRenderingContext2D) => {
        const patternCanvas = document.createElement("canvas");
        const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;
        // Taille du pattern (basée sur background-size)
        patternCanvas.width = 32;
        patternCanvas.height = 32;

// Fond principal en rouge
        pCtx.fillStyle = "#d21111";
        pCtx.fillRect(0, 0, 32, 32);

// Dessiner les cercles radiaux
        pCtx.fillStyle = "#ffae00";

// Cercle 1 (0,0)
        pCtx.beginPath();
        pCtx.arc(8, 8, 6, 0, Math.PI * 2);
        pCtx.fill();

// Cercle 2 (décalé à 16px,16px)
        pCtx.beginPath();
        pCtx.arc(24, 24, 6, 0, Math.PI * 2);
        pCtx.fill();

// Dessiner les lignes verticales
        pCtx.fillStyle = "#ffae00";

        // pCtx.fillRect(0, 7, 32, 2); // Ligne horizontale
        // pCtx.fillRect(7, 0, 2, 32); // Ligne verticale
        // Créer le pattern
        return canvasCtx.createPattern(patternCanvas, "repeat") as CanvasPattern;
    }

}
