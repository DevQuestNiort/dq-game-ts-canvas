import {canvasContext} from "./GameDataService.ts";
import {getImage} from "./AssetLibrary.ts";

const fillers: Record<string, string | CanvasGradient | CanvasPattern> = {};

export const init = () => {
    fillers.wood = createPatternWood(canvasContext)
    fillers.wall = createPatternWall(canvasContext);
    fillers.lava = createPatternLava(canvasContext);
    fillers.water = createPatternWater(canvasContext);
    fillers.grass = createPatternHerb(canvasContext);
    fillers.tree = createPatternHerb(canvasContext);
    fillers.dalle = createPatternDalle(canvasContext);
    fillers.sand = createPatternSand(canvasContext);
}

export const getFiller: (name: string) => string | CanvasGradient | CanvasPattern = name => {
    return fillers[name];
}


const createPatternWood = (canvasCtx: CanvasRenderingContext2D) => {
    // Créer un petit canvas temporaire pour le pattern
    const patternCanvas = document.createElement("canvas");
    const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;

    // Taille du pattern (doit correspondre à background-size en CSS)
    patternCanvas.width = 16;
    patternCanvas.height = 16;

    // Fond de la cellule
    pCtx.fillStyle = "#a9824b";
    pCtx.fillRect(0, 0, 16, 16);

    // Points du pattern (équivalent à radial-gradient)
    pCtx.fillStyle = "#362105";

    // Premier point en haut à gauche
    pCtx.beginPath()
    pCtx.lineWidth = 1;
    pCtx.moveTo(0,7  )
    pCtx.lineTo(16,7  )
    pCtx.moveTo(5,0  )
    pCtx.lineTo(5,7  )
    pCtx.moveTo(11,7  )
    pCtx.lineTo(11,15  )
    pCtx.moveTo(0,15  )
    pCtx.lineTo(16,15  )
    pCtx.stroke()
    pCtx.fillRect(2, 3, 1, 1);
    pCtx.fillRect(7, 3, 1, 1);
    pCtx.fillRect(7, 11, 1, 1);
    pCtx.fillRect(14, 11, 1, 1);
    // Créer le pattern
    return canvasCtx.createPattern(patternCanvas, "repeat") as CanvasPattern;
}


const createPatternSand = (canvasCtx: CanvasRenderingContext2D) => {
    // Créer un petit canvas temporaire pour le pattern
    const patternCanvas = document.createElement("canvas");
    const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;

    // Taille du pattern (doit correspondre à background-size en CSS)
    patternCanvas.width = 16;
    patternCanvas.height = 16;

    // Fond de la cellule
    pCtx.fillStyle = "#725d16";
    pCtx.fillRect(0, 0, 16, 16);

    // Points du pattern (équivalent à radial-gradient)
    pCtx.fillStyle = "#afa004";

    // Premier point en haut à gauche

    pCtx.fillRect(1,1 ,1 ,1 )
    // Deuxième point décalé (8px, 8px) comme en CSS
    pCtx.fillRect(3,4 ,1 ,1 )
    pCtx.fillRect(8,5 ,1 ,1 )
    pCtx.fillStyle = "#efeddd";
    pCtx.fillRect(12,2 ,1 ,1 )
    pCtx.fillRect(2,12 ,1 ,1 )
    pCtx.fillStyle = "#4b4934";

    pCtx.fillRect(1,8 ,1 ,1 )
    pCtx.fillRect(5,15 ,1 ,1 )
    pCtx.fillRect(10,10 ,1 ,1 )
    pCtx.fillRect(10,11 ,1 ,1 )
    // Créer le pattern
    return canvasCtx.createPattern(patternCanvas, "repeat") as CanvasPattern;
}


const createPatternWall = (canvasCtx: CanvasRenderingContext2D) => {
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
    pCtx.fillRect(0, 0.5, 13, 6.5)
    pCtx.fillRect(14, 0.5, 12, 6.5)
    pCtx.fillRect(27, 0.5, 12, 6.5)


    // line 2
    pCtx.fillRect(0, 8, 6, 6)

    pCtx.fillRect(7, 8, 12, 6)

    pCtx.fillRect(20, 8, 11, 6)
// line 3
    pCtx.fillRect(10, 15, 12, 6)

    pCtx.fillRect(5, 15, 4, 6)
    pCtx.fillRect(0, 15, 4, 6)
    pCtx.fillRect(23, 15, 9, 6)

    // line 4

    pCtx.fillRect(18, 22, 14, 4)
    pCtx.fillRect(0, 22, 6, 4)
    pCtx.fillRect(7, 22, 10, 4)

    //line 5

    pCtx.fillRect(0.5, 27, 14.5, 4)
    pCtx.fillRect(16, 27, 8, 4)
    pCtx.fillRect(25, 27, 6.5, 4)
    // Créer le pattern
    return canvasCtx.createPattern(patternCanvas, "repeat") as CanvasPattern;
}
const createPatternDalle2 = (canvasCtx: CanvasRenderingContext2D) => {
    // Créer un petit canvas temporaire pour le pattern
    const patternCanvas = document.createElement("canvas");
    const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;

    // Taille du pattern (doit correspondre à background-size en CSS)
    patternCanvas.width = 32;
    patternCanvas.height = 32;

    getImage("bg-carrelage");
    // Fond de la cellules


    // Premier point en haut à gauche
    pCtx.drawImage(getImage("bg-carrelage"),0,0,32,32)

    // Créer le pattern
    return canvasCtx.createPattern(patternCanvas, "repeat") as CanvasPattern;
}
const createPatternDalle = (canvasCtx: CanvasRenderingContext2D) => {
    // Créer un petit canvas temporaire pour le pattern
    const patternCanvas = document.createElement("canvas");
    const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;

    // Taille du pattern (doit correspondre à background-size en CSS)
    patternCanvas.width = 32;
    patternCanvas.height = 32;

    // Fond de la cellulesd
    pCtx.fillStyle = "#e1e1e1";
    pCtx.fillRect(0, 0, 32, 32);

    // Points du pattern (équivalent à radial-gradient)
    pCtx.fillStyle = "#a8a8a8";

    // Premier point en haut à gauche
    pCtx.fillRect(0, 0, 16, 16)
    pCtx.fillRect(16, 16, 16, 16)
    // Créer le pattern
    return canvasCtx.createPattern(patternCanvas, "repeat") as CanvasPattern;
}

const createPatternHerb = (canvasCtx: CanvasRenderingContext2D) => {
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


const createPatternWater = (canvasCtx: CanvasRenderingContext2D) => {
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
    pCtx.moveTo(0, 0);
    pCtx.lineTo(8, 8);
    pCtx.lineTo(16, 0);
    pCtx.lineTo(24, 8);
    pCtx.lineTo(32, 0);

    pCtx.moveTo(0, 8);
    pCtx.lineTo(8, 16);
    pCtx.lineTo(16, 8);
    pCtx.lineTo(24, 16);
    pCtx.lineTo(32, 8);


    pCtx.moveTo(0, 16);
    pCtx.lineTo(8, 24);
    pCtx.lineTo(16, 16);
    pCtx.lineTo(24, 24);
    pCtx.lineTo(32, 16);

    pCtx.moveTo(0, 24);
    pCtx.lineTo(8, 32);
    pCtx.lineTo(16, 24);
    pCtx.lineTo(24, 32);
    pCtx.lineTo(32, 24);

    pCtx.stroke();

    // Créer le pattern
    return canvasCtx.createPattern(patternCanvas, "repeat") as CanvasPattern;
}


const createPatternLava2 = (canvasCtx: CanvasRenderingContext2D) => {
    // Créer un petit canvas temporaire pour le pattern
    const patternCanvas = document.createElement("canvas");
    const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;

    // Taille du pattern (doit correspondre à background-size en CSS)
    patternCanvas.width = 32;
    patternCanvas.height = 32;

    // Premier point en haut à gauche
    pCtx.drawImage(getImage("bg-lava"),0,0,32,32)

    // Créer le pattern
    return canvasCtx.createPattern(patternCanvas, "repeat") as CanvasPattern;
}
const createPatternLava = (canvasCtx: CanvasRenderingContext2D) => {
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
