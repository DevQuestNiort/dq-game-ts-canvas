import {canvasContext, gameState} from "./GameDataService.ts";
import {TwoDimensionalSize} from "./model/TwoDimensionalSize.ts";
import {Position} from "./model/Position.ts";
import {GRID_PITCH, TOTAL_PX_SIZE_X, TOTAL_PX_SIZE_Y, VIEWPORT_SIZE_X, VIEWPORT_SIZE_Y} from "./constants.ts";
import {getImage} from "./AssetLibrary.ts";
import {getItemAtPlayerPosition, getItemInFrontOfPlayer} from "./MapManager.ts";
import {PNJItem} from "./model/item/PNJItem.ts"
import {viewEnum} from "./model/state/GameState.ts";
import {AbstractTalkablePlayerItem} from "./model/item/AbstractTalkablePlayerItem.ts";




export const paintDialogs = () => {

    paintMenuFullPage();
}

export const paintDialogOnMap = () =>{
    paintDeathView();
    paintPlayerDialog();
    paintInteractionDialog();
    paintPopupItemInfoDialog();
}



const paintDeathView = () => {
    if (gameState.player.isDead() ) {
        const patternCanvas = document.createElement("canvas");
        patternCanvas.width = TOTAL_PX_SIZE_X;
        patternCanvas.height = TOTAL_PX_SIZE_Y ;

        const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;
        pCtx.font = "50px gamms";

        pCtx.drawImage(getImage("deadbg"), 0,0  , TOTAL_PX_SIZE_X, TOTAL_PX_SIZE_Y)
        pCtx.fillStyle = "rgba(0,0,0,0.8)";
        pCtx.fillRect(0,0  , TOTAL_PX_SIZE_X, TOTAL_PX_SIZE_Y)
        pCtx.fillStyle = "#fff";
        pCtx.textAlign = "center";
        pCtx.fillText("GAME OVER", (GRID_PITCH *  VIEWPORT_SIZE_X)/2 , (GRID_PITCH * VIEWPORT_SIZE_Y) /2, GRID_PITCH * 23 - 10)
        drawDialog(new Position(0, 0), new TwoDimensionalSize(TOTAL_PX_SIZE_X, TOTAL_PX_SIZE_Y), patternCanvas);
    }
}


const paintMenuFullPage = () => {
    if (gameState.view !== viewEnum.MAP ) {
        drawDialog(new Position(0, 0), new TwoDimensionalSize(TOTAL_PX_SIZE_X, TOTAL_PX_SIZE_Y), gameState.getCurrentView().paint());
    }
}

/**
 * imprime le cadre en bas a gauche avec les infos du joueur
 */
const paintPlayerDialog = () => {
    const patternCanvas = document.createElement("canvas");
    patternCanvas.width = GRID_PITCH * VIEWPORT_SIZE_X / 2;
    patternCanvas.height = GRID_PITCH*3;
    const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;
    pCtx.font = "20px gamms";
    pCtx.fillStyle = "#fff";
    pCtx.fillText("Points de Vie :  " + gameState.player.life, 10, 23, 160)
    pCtx.fillText("Attaque :  " + gameState.player.attack, 200, 23, 125)
    pCtx.fillText("Defense :  " + gameState.player.defense, 350, 23, 125)
    gameState.player.inventory.get().map(item => getImage(item.image))
        .forEach((image, index) => pCtx.drawImage(image, 7 + index * (GRID_PITCH + 5), 60, GRID_PITCH, GRID_PITCH))
    drawDialog(new Position(0, GRID_PITCH * VIEWPORT_SIZE_Y), new TwoDimensionalSize(GRID_PITCH * VIEWPORT_SIZE_X / 2, GRID_PITCH*3), patternCanvas);
}

/**
 * imprime le cadre en bas a droite avec les infos du pnj devant le joueur
 */
const paintInteractionDialog = () => {
    const patternCanvas = document.createElement("canvas");
    patternCanvas.width = GRID_PITCH * VIEWPORT_SIZE_X / 2;
    patternCanvas.height = GRID_PITCH*3;
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
        if (itemInFrontOfPlayer.underAttack){
            pCtx.textAlign = "end"
            pCtx.fillText("Taper F pour attaquer " , GRID_PITCH * VIEWPORT_SIZE_X / 2, 84, 500)
        }
        else {
            pCtx.textAlign = "end"
            pCtx.fillText("Taper R pour parler ou F pour attaquer " , GRID_PITCH * VIEWPORT_SIZE_X / 2, 84, 500)
        }
        pCtx.textAlign = "start"
    }
    else if  (itemInFrontOfPlayer && itemInFrontOfPlayer instanceof AbstractTalkablePlayerItem && itemInFrontOfPlayer.interaction){

        pCtx.fillStyle = "#fff";
        pCtx.fillText("Taper R pour interagir " , 10, 25, 500)

    }
    else {
            pCtx.fillStyle = "#fff";
            pCtx.fillText("Taper I pour ouvrir menu Inventaire " , 10, 25, 500)
        pCtx.fillText("Taper H pour ouvrir l'aide " , 10, 55, 500)
    }
    drawDialog(new Position(GRID_PITCH * VIEWPORT_SIZE_X / 2, GRID_PITCH * VIEWPORT_SIZE_Y), new TwoDimensionalSize(GRID_PITCH * VIEWPORT_SIZE_X / 2, GRID_PITCH*3), patternCanvas);
}

/**
 * imprime le cadre en haut a gauche avec les infos de l'objet sur lequel on se trouve
 */
const paintPopupItemInfoDialog = () => {
    const itemAtPlayerPosition = getItemAtPlayerPosition();
console.log("itemAtPlayerPosition",itemAtPlayerPosition)
    if (itemAtPlayerPosition) {
        const patternCanvas = document.createElement("canvas");
        patternCanvas.width = GRID_PITCH * 19;
        patternCanvas.height = GRID_PITCH * 3;

        const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;
        pCtx.fillStyle = "#245a5a";
        pCtx.fillRect(0, 0, GRID_PITCH * 19, GRID_PITCH * 3);
        pCtx.font = "20px gamms";
        pCtx.fillStyle = "#fff";
        pCtx.fillText(itemAtPlayerPosition.description, 10, 25, 500)

        pCtx.fillText(itemAtPlayerPosition.instructions, 10, 57, 500)
        drawDialog(new Position(0, 0), new TwoDimensionalSize(GRID_PITCH * 19, GRID_PITCH * 3), patternCanvas);
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


/**
 * Permet de splitter un texte en un tableau de texte selon une largeur max . Split par mot.
 * @param context canvaContext 2D
 * @param text Le texte à decoupé
 * @param length la largeur max en pixel
 */
export function splittext(context, text,length){
    return text.split(" ").reduce((agr,word)=>{
        if (word === "\n" ){
            agr.push("")

        }
        if (context.measureText( agr[agr.length-1]+word).width < length  ){
            agr[agr.length-1] = agr[agr.length-1] +" " + word
        }
        else {
            agr.push(word)
        }
        return agr
    },[""])


}