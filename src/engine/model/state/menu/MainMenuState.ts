import {IhmEntry} from "../../menu/IhmEntry.ts";
import {Position} from "../../Position.ts";
import {GRID_PITCH, TOTAL_PX_SIZE_X, TOTAL_PX_SIZE_Y, VIEWPORT_SIZE_X} from "../../../constants.ts";
import {newGame} from "../../../GameEngine.ts";
import {playSound, SoundType} from "../../../SoundEngine.ts";
import {MenuState} from "./MenuState.ts";
import {getImage} from "../../../AssetLibrary.ts";

export class MainMenuState extends MenuState{


    public name : string = "MainMenu"
    public texts: IhmEntry[]




    constructor() {
        super()
        const entry1  = new IhmEntry("01",new Position((GRID_PITCH *  VIEWPORT_SIZE_X)/2 , GRID_PITCH*8), 30, "Nouvelle partie",()=> newGame())
        const entry2  = new IhmEntry("02",new Position((GRID_PITCH *  VIEWPORT_SIZE_X)/2 , GRID_PITCH*11),30, "Help info",()=> console.log("new game"))
        const entry3  = new IhmEntry("03",new Position((GRID_PITCH *  VIEWPORT_SIZE_X)/2 , GRID_PITCH*14),30, "A Propos !",()=> alert("Created by Devquest"))

        this.entrys= [entry1,entry2,entry3]
        this.texts= [
            new IhmEntry("title", new Position((GRID_PITCH *  VIEWPORT_SIZE_X)/2 , GRID_PITCH*2),50,"DevQuest The Game",undefined),
            new IhmEntry("subtitle", new Position((GRID_PITCH *  VIEWPORT_SIZE_X)/2 , GRID_PITCH*3),20,"Le jeu officiel de la conférence officielle de Niort",undefined)
        ]
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

    execute(){
        this.entrys[this.selectedEntry].action()
        playSound(SoundType.PICK)
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
        patternCanvas.width = TOTAL_PX_SIZE_X;
        patternCanvas.height = TOTAL_PX_SIZE_Y;

        const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;
        pCtx.font = "50px gamms";
        pCtx.fillStyle = "#fff";
        pCtx.drawImage(getImage("bgMenu"), 0,0  , TOTAL_PX_SIZE_X, TOTAL_PX_SIZE_Y)
        pCtx.fillStyle = "rgba(0,0,0,0.85)";
        pCtx.fillRect(GRID_PITCH * 4, GRID_PITCH * 1 ,GRID_PITCH * 27 ,GRID_PITCH * 4)
        pCtx.textAlign = "center";

        this.texts.forEach((entry, index) => {
            pCtx.font = `${entry.size}px gamms`;
            pCtx.fillStyle = "#fff";
            pCtx.fillText(entry.text, entry.position.x, entry.position.y+ 30, GRID_PITCH * 20)
        })

        pCtx.drawImage(getImage("logodq"), (GRID_PITCH * 5), (GRID_PITCH * 1.5)  , GRID_PITCH * 3, GRID_PITCH * 3)
        pCtx.drawImage(getImage("logodq"), (GRID_PITCH * 27), (GRID_PITCH * 1.5)  , GRID_PITCH * 3, GRID_PITCH * 3)



        pCtx.fillStyle = "#fff";
        this.entrys.forEach((entry, index) => {
            pCtx.font = `${entry.size}px gamms`;
            if (index === this.selectedEntry){
                const textWidth= pCtx.measureText(entry.text).width + 20
                pCtx.fillRect( entry.position.x -((textWidth)/2), entry.position.y,textWidth ,entry.size+20)

                pCtx.fillStyle = "#020202";
                pCtx.drawImage(getImage("logodq"),entry.position.x -((textWidth)/2) - GRID_PITCH * 2.0,  entry.position.y   , GRID_PITCH * 1.5, GRID_PITCH * 1.5)
            }
            else {
                pCtx.fillStyle = "#fff";
            }
            pCtx.fillText(entry.text, entry.position.x, entry.position.y+ 30, GRID_PITCH * 20)
        })
        return patternCanvas
    }
}