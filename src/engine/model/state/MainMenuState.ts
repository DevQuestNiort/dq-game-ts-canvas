import {IhmEntry} from "../menu/IhmEntry.ts";
import {Position} from "../Position.ts";
import {GRID_PITCH, VIEWPORT_SIZE_X, VIEWPORT_SIZE_Y} from "../../constants.ts";
import {gameState} from "../../GameDataService.ts";
import {newGame} from "../../GameEngine.ts";

export class MainMenuState{


    public name : string = "MainMenu"
    public texts: IhmEntry[]

    public selectedEntry:number = 0
    public entrys : IhmEntry[]


    constructor() {
        const entry1  = new IhmEntry("01",new Position((GRID_PITCH *  VIEWPORT_SIZE_X)/2 , GRID_PITCH*6), 30, "Nouvelle partie",()=> newGame())
        const entry2  = new IhmEntry("02",new Position((GRID_PITCH *  VIEWPORT_SIZE_X)/2 , GRID_PITCH*9),30, "Help info",()=> console.log("new game"))

        this.entrys= [entry1,entry2]
        this.texts= [
            new IhmEntry("title", new Position((GRID_PITCH *  VIEWPORT_SIZE_X)/2 , GRID_PITCH*2),50,"DevQuest The Game",undefined),
            new IhmEntry("subtitle", new Position((GRID_PITCH *  VIEWPORT_SIZE_X)/2 , GRID_PITCH*3),20,"Le jeu officiel de la conference officiel de Niort",undefined)
        ]
    }

    up(){
        const maxItem = this.entrys.length - 1
        const newSelected = this.selectedEntry + 1
        if (newSelected> maxItem){
            this.selectedEntry = 0
        }
        else{
            this.selectedEntry = newSelected
        }
    }
    down(){
        const maxItem = this.entrys.length - 1
        const newSelected = this.selectedEntry - 1
        if (newSelected< 0){
            this.selectedEntry = maxItem
        }
        else{
            this.selectedEntry = newSelected
        }
    }

    execute(){
        this.entrys[this.selectedEntry].action()
    }



    paint(){
        const patternCanvas = document.createElement("canvas");
        patternCanvas.width = GRID_PITCH * VIEWPORT_SIZE_X;
        patternCanvas.height = GRID_PITCH * VIEWPORT_SIZE_Y;

        const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;
        pCtx.font = "50px gamms";
        pCtx.fillStyle = "#fff";


        pCtx.textAlign = "center";
        // pCtx.fillText("GAME OVER", (GRID_PITCH *  VIEWPORT_SIZE_X)/2 , (GRID_PITCH * VIEWPORT_SIZE_Y) /2, GRID_PITCH * 23 - 10)

        gameState.mainmenu.texts.forEach((entry, index) => {
            pCtx.font = `${entry.size}px gamms`;
            pCtx.fillStyle = "#fff";
            pCtx.fillText(entry.text, entry.position.x, entry.position.y+ 30, GRID_PITCH * 20)
        })


        pCtx.fillStyle = "#fff";
        gameState.mainmenu.entrys.forEach((entry, index) => {
            pCtx.font = `${entry.size}px gamms`;
            if (index === gameState.mainmenu.selectedEntry){
                pCtx.fillStyle = "#0F0";
            }
            else {
                pCtx.fillStyle = "#fff";
            }
            pCtx.fillText(entry.text, entry.position.x, entry.position.y+ 30, GRID_PITCH * 20)
        })
        return patternCanvas
    }
}