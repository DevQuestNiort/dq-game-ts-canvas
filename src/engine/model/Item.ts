import {Position} from "./Position.ts";

export class Item {

    public uid: string;
    public name: string;
    public type: ItemType;
    public position: Position;
    public takable: boolean;
    public description: string;
    public instructions: string;
    public image: string;


    constructor(uid: string, name: string, type: ItemType, position: Position, takable: boolean, description: string, instructions: string, image: string) {
        this.uid = uid;
        this.name = name;
        this.type = type;
        this.position = position;
        this.takable = takable;
        this.description = description;
        this.instructions = instructions;
        this.image = image;

    }




}


export enum ItemType {
    DECORATIF ,
    TAKEABLE,
    CONSOMMABlE,
    USABLE,
}