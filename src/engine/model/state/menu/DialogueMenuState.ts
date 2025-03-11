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
import {playSound, SoundType} from "../../../SoundEngine.ts";

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
        const nuberOfEntry = modalTemplate.choices.length


        const choicesEntrys = modalTemplate.choices.map((choice,index) => new IhmEntry(choice.titre, new Position((GRID_PITCH *  VIEWPORT_SIZE_X)/2 , GRID_PITCH* (20 -(nuberOfEntry*1) + ((index -1) *1 )  ) ),20,choice.titre, choice.action) )
        this.entrys = [...choicesEntrys, ...this.entrys]
    }

    execute(){
        this.entrys[this.selectedEntry].action()
        playSound(SoundType.PICK)
        gameState.view = viewEnum.MAP;
        notifyViewportChanged();
    }
    down(){
        const maxItem = this.entrys.length - 1
        const newSelected = this.selectedEntry + 1
        if (newSelected> maxItem){
            this.selectedEntry = 0
        }
        else{
            this.selectedEntry = newSelected
        }
        playSound(SoundType.MOVE)
    }
    up(){
        const maxItem = this.entrys.length - 1
        const newSelected = this.selectedEntry - 1
        if (newSelected< 0){
            this.selectedEntry = maxItem
        }
        else{
            this.selectedEntry = newSelected
        }
        playSound(SoundType.MOVE)
    }

    build(evt){

        switch (evt.key) {
            case "ArrowUp":
            case "z":
            case "Z":

                this.up()
                break;
            case "ArrowDown":
            case "s":
            case "S":
                this.down()
                break;
            case "Enter":
                this.execute()
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
        splittext(pCtx,this.template.text,maxlength).forEach((text, index) => {
            console.log("printing text: ", text, index);
            pCtx.fillText(text.trim(), GRID_PITCH * 3, GRID_PITCH * 4 + (index + 1) * 25, TOTAL_PX_SIZE_X - GRID_PITCH * 6)

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