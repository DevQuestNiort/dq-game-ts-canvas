import {canvasContext, gameState} from "./GameDataService.ts";
import {TwoDimensionalSize} from "./model/TwoDimensionalSize.ts";
import {Position} from "./model/Position.ts";
import {GRID_PITCH, VIEWPORT_SIZE_X, VIEWPORT_SIZE_Y} from "./constants.ts";
import {getImage} from "./AssetLibrary.ts";
import {getItemAtPlayerPosition, getItemInFrontOfPlayer} from "./MapManager.ts";
import {PNJItem} from "./model/item/PNJItem.ts";
import {TypeModal} from "./model/modalTemplate/AbstractModalTemplate.ts";
import {viewEnum} from "./model/state/GameState.ts";

export const paintDialogs = () => {

    paintPlayerDialog();
    paintPnjDialog();
    paintPopupItemInfoDialog();
    paintInventaireFullDialog();
    paintInteractionDialog();
    paintDeathView();
    paintMainMenu();
}



const paintDeathView = () => {
    if (gameState.player.isDead() ) {
        const patternCanvas = document.createElement("canvas");
        patternCanvas.width = GRID_PITCH * VIEWPORT_SIZE_X;
        patternCanvas.height = GRID_PITCH * VIEWPORT_SIZE_Y;

        const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;
        pCtx.font = "50px gamms";
        pCtx.fillStyle = "#fff";


        pCtx.textAlign = "center";
        pCtx.fillText("GAME OVER", (GRID_PITCH *  VIEWPORT_SIZE_X)/2 , (GRID_PITCH * VIEWPORT_SIZE_Y) /2, GRID_PITCH * 23 - 10)
        drawDialog(new Position(0, 0), new TwoDimensionalSize(GRID_PITCH * VIEWPORT_SIZE_X, GRID_PITCH * VIEWPORT_SIZE_Y), patternCanvas);
    }
}


const paintMainMenu = () => {
    if (gameState.view === viewEnum.MAINMENU ) {
        drawDialog(new Position(0, 0), new TwoDimensionalSize(GRID_PITCH * VIEWPORT_SIZE_X, GRID_PITCH * VIEWPORT_SIZE_Y+110), gameState.mainmenu.paint());
    }
}

/**
 * imprime le cadre en bas a gauche avec les infos du joueur
 */
const paintPlayerDialog = () => {
    const patternCanvas = document.createElement("canvas");
    patternCanvas.width = GRID_PITCH * VIEWPORT_SIZE_X / 2;
    patternCanvas.height = 110;
    const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;
    pCtx.font = "20px gamms";
    pCtx.fillStyle = "#fff";
    pCtx.fillText("Points de Vie :  " + gameState.player.life, 10, 23, 160)
    pCtx.fillText("Attaque :  " + gameState.player.attack, 200, 23, 125)
    pCtx.fillText("Defense :  " + gameState.player.defense, 350, 23, 125)
    pCtx.fillText("Inventaire: ", 10, 57, 125)
    gameState.player.inventory.get().map(item => getImage(item.image))
        .forEach((image, index) => pCtx.drawImage(image, 7 + index * (GRID_PITCH + 5), 70, GRID_PITCH, GRID_PITCH))
    drawDialog(new Position(0, GRID_PITCH * VIEWPORT_SIZE_Y), new TwoDimensionalSize(GRID_PITCH * VIEWPORT_SIZE_X / 2, 110), patternCanvas);
}

/**
 * imprime le cadre en bas a droite avec les infos du pnj devant le joueur
 */
const paintPnjDialog = () => {
    const patternCanvas = document.createElement("canvas");
    patternCanvas.width = GRID_PITCH * VIEWPORT_SIZE_X / 2;
    patternCanvas.height = 110;
    const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;
    pCtx.fillStyle = "#fff";
    pCtx.font = "20px gamms";
    const itemInFrontOfPlayer = getItemInFrontOfPlayer()
    if (itemInFrontOfPlayer && itemInFrontOfPlayer instanceof PNJItem) {
        pCtx.fillStyle = "#fff";
        pCtx.fillText("Points de Vie :  " + itemInFrontOfPlayer.life, 10, 25, 160)
        pCtx.fillText("Attaque :  " + itemInFrontOfPlayer.attack, 200, 25, 125)
        pCtx.fillText("Defense :  " + itemInFrontOfPlayer.defense, 350, 25, 125)
        pCtx.fillText("name  :" + itemInFrontOfPlayer.name, 10, 57, 125)
    }
    else {
            pCtx.fillStyle = "#fff";
            pCtx.fillText("Taper I pour ouvrir menu Inventaire/Help " , 10, 25, 500)
    }
    drawDialog(new Position(GRID_PITCH * VIEWPORT_SIZE_X / 2, GRID_PITCH * VIEWPORT_SIZE_Y), new TwoDimensionalSize(GRID_PITCH * VIEWPORT_SIZE_X / 2, 110), patternCanvas);
}

/**
 * imprime le cadre en haut a gauche avec les infos de l'objet sur lequel on se trouve
 */
const paintPopupItemInfoDialog = () => {
    const itemAtPlayerPosition = getItemAtPlayerPosition();

    if (itemAtPlayerPosition) {
        const patternCanvas = document.createElement("canvas");
        patternCanvas.width = GRID_PITCH * 19;
        patternCanvas.height = GRID_PITCH * 3;

        const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;
        pCtx.fillStyle = "#245a5a";
        pCtx.fillRect(0, 0, GRID_PITCH * 19, GRID_PITCH * 3);
        pCtx.font = "20px gamms";
        pCtx.fillStyle = "#fff";
        pCtx.fillText("Description  : " + itemAtPlayerPosition.description, 10, 25, 500)

        pCtx.fillText(itemAtPlayerPosition.instructions, 10, 57, 500)
        drawDialog(new Position(0, 0), new TwoDimensionalSize(GRID_PITCH * 19, GRID_PITCH * 3), patternCanvas);
    }
}

/**
 * imprime l'inventaire en plein ecran avec toutes les infos sur les objets
 */
const paintInventaireFullDialog = () => {
    if (gameState.openMenu && gameState.contentMenu.type === TypeModal.INVENTAIRE) {
        const patternCanvas = document.createElement("canvas");
        patternCanvas.width = GRID_PITCH * VIEWPORT_SIZE_X;
        patternCanvas.height = GRID_PITCH * VIEWPORT_SIZE_Y;

        const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;
        pCtx.font = "20px gamms";
        pCtx.fillStyle = "#fff";

        const listeHelp=[
            "Touche Z Q S D : Monter, Gauche, Descendre, Droite ",
            "Touche I : Ouvrir l'inventaire ",
            "Touche T : Prendre ou interragir avec un objet ",
            "Touche F : Frapper un objet ou un personnage ",
            "Touche R : Parler avec un PNJ ",
            "Touche M : Couper/Activer le son ",
            "Alt + F4 : Ragequit  "
        ]

        const ligneDebutHelp = 14

        pCtx.fillText("Aide", GRID_PITCH * 3, GRID_PITCH*ligneDebutHelp, GRID_PITCH * 23 - 10)


        listeHelp.forEach((text, index) => {
            pCtx.fillText(text, GRID_PITCH * 4, (GRID_PITCH * ligneDebutHelp) + GRID_PITCH * (index + 1) + 20, GRID_PITCH * 20)
              })
        const LigneDebutListeInventaire = 1
        pCtx.fillText("Inventaire", GRID_PITCH * 3, GRID_PITCH*LigneDebutListeInventaire, GRID_PITCH * 23 - 10)
        gameState.player.inventory.get().forEach((item, index) => {
            pCtx.drawImage(getImage(item.image), (GRID_PITCH * 2), (GRID_PITCH * LigneDebutListeInventaire) + GRID_PITCH * (index + 1), GRID_PITCH, GRID_PITCH)
            pCtx.fillText(item.name, GRID_PITCH * 4, (GRID_PITCH * LigneDebutListeInventaire) + GRID_PITCH * (index + 1) + 20, GRID_PITCH * 10 - 10)
            pCtx.fillText(item.description, GRID_PITCH * 10, (GRID_PITCH * LigneDebutListeInventaire) + GRID_PITCH * (index + 1) + 20, GRID_PITCH * 12 - 10)
        })

        drawDialog(new Position(0, 0), new TwoDimensionalSize(GRID_PITCH * VIEWPORT_SIZE_X, GRID_PITCH * VIEWPORT_SIZE_Y), patternCanvas);
    }
}


/**
 * imprime la popup d'interaction
 */
const paintInteractionDialog = () => {
    if (gameState.openMenu && gameState.contentMenu.type === TypeModal.DETAILSIMPLE) {
        const patternCanvas = document.createElement("canvas");
        patternCanvas.width = GRID_PITCH * VIEWPORT_SIZE_X;
        patternCanvas.height = GRID_PITCH * VIEWPORT_SIZE_Y;

        const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;
        pCtx.font = "20px gamms";
        pCtx.fillStyle = "#fff";

        pCtx.fillText(gameState.contentMenu.title, GRID_PITCH * 3, GRID_PITCH * 1, GRID_PITCH * 23 - 10)

        gameState.contentMenu.texts.forEach((text, index) => {
            pCtx.fillText(text, GRID_PITCH * 3, GRID_PITCH * 2 + (index + 1) * 20, GRID_PITCH * 23 - 10)

        })
        drawDialog(new Position(0, 0), new TwoDimensionalSize(GRID_PITCH * VIEWPORT_SIZE_X, GRID_PITCH * VIEWPORT_SIZE_Y), patternCanvas);
    }
}

const drawDialog = (position: Position, size: TwoDimensionalSize, content: any) => {
    const patternCanvas = document.createElement("canvas");
    patternCanvas.width = size.width;
    patternCanvas.height = size.height;
    const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;
    // fond noir
    pCtx.fillStyle = "#245a5a";
    pCtx.fillRect(0, 0, size.width, size.height);
    // contours
    pCtx.strokeStyle = "#ffffff"; // Définition de la couleur du contour
    pCtx.lineWidth = 2; // Épaisseur du contour
    pCtx.strokeRect(3, 3, size.width - 6, size.height - 6);
    pCtx.strokeRect(6, 6, size.width - 12, size.height - 12);
    // contenu
    pCtx.drawImage(content, 9, 9, size.width - 18, size.height - 18);
    canvasContext.drawImage(patternCanvas, position.x, position.y);
}