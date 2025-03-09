import {IhmEntry} from "../../menu/IhmEntry.ts";
import {Position} from "../../Position.ts";
import {GRID_PITCH, TOTAL_PX_SIZE_X,  VIEWPORT_SIZE_X, VIEWPORT_SIZE_Y} from "../../../constants.ts";
import {gameState} from "../../../GameDataService.ts";
import {MenuState} from "./MenuState.ts";
import {viewEnum} from "../GameState.ts";
import {notifyViewportChanged} from "../../../GraphicsEngine.ts";
import {getImage} from "../../../AssetLibrary.ts";
import {ModalTemplate} from "../../modalTemplate/ModalTemplate.ts";
import {splittext} from "../../../DialogPainter.ts";

export class DialogueMenuState extends MenuState{


    public name : string = "dialogue"

    public selectedEntry:number = 0
    public entrys : IhmEntry[]

    public template : ModalTemplate

    constructor() {
        super()
        const entry1  = new IhmEntry("01",new Position((GRID_PITCH *  VIEWPORT_SIZE_X)/2 , GRID_PITCH*20), 20, "Retour au jeu",()=> {
            gameState.view = viewEnum.MAP;
                notifyViewportChanged();
        }
        )

        this.entrys= [entry1]

    }


    setTemplate(modalTemplate:ModalTemplate){
        this.template = modalTemplate
    }


    build(evt){

        switch (evt.key) {
            case "Enter":
                this.entrys[this.selectedEntry].action()
                break
        }


    }

    paint(){
        const patternCanvas = document.createElement("canvas");
        patternCanvas.width = GRID_PITCH * VIEWPORT_SIZE_X;
        patternCanvas.height = GRID_PITCH * VIEWPORT_SIZE_Y;

        const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;
        pCtx.font = "20px gamms";
        pCtx.fillStyle = "#fff";

        pCtx.fillText(this.template.title, GRID_PITCH * 5, GRID_PITCH * 3, GRID_PITCH * 23 - 10)
        pCtx.drawImage(getImage(this.template.image), (GRID_PITCH ), (GRID_PITCH ) , GRID_PITCH*3, GRID_PITCH*3)
        const maxlength = TOTAL_PX_SIZE_X - GRID_PITCH * 6
        splittext(pCtx,this.template.text,maxlength).map(text => text.trim()).forEach((text, index) => {
            pCtx.fillText(text, GRID_PITCH * 3, GRID_PITCH * 4 + (index + 1) * 25, TOTAL_PX_SIZE_X - GRID_PITCH * 6)

        })

        pCtx.textAlign = "center";
        this.entrys.forEach((entry, index) => {
            pCtx.font = `${entry.size}px gamms`;
            if (index === this.selectedEntry){
                const textWidth= pCtx.measureText(entry.text).width + 20
                pCtx.fillRect( entry.position.x -((textWidth)/2), entry.position.y,textWidth ,entry.size+20)
                pCtx.fillStyle = "#245a5a";
            }
            else {
                pCtx.fillStyle = "#fff";
            }
            pCtx.fillText(entry.text, entry.position.x, entry.position.y+ 30, GRID_PITCH * 20)
        })

        return patternCanvas
    }
}