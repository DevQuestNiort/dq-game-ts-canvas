import {Position} from "../Position.ts";

export class IhmEntry {

    public id: string
    public position : Position
    public size: number;
    public text:string
    public action : any


    constructor(id: string, position: Position,size:number, text: string, action: any) {
        this.id = id;
        this.position = position
        this.size=size;
        this.text = text;
        this.action = action;
    }
}