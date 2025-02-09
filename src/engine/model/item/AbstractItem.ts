import {Position} from "../Position.ts";
import {ItemType} from "./Item.ts";

export abstract class AbstractItem {
    
    public uid: string;
    public name: string;
    public type: ItemType;
    public position: Position;
    public description: string;
    public instructions: string;
    public image: string;

    constructor(uid: string, name: string, type: ItemType, position: Position, description: string, instructions: string, image: string) {
        this.uid = uid;
        this.name = name;
        this.type = type;
        this.position = position;
        this.description = description;
        this.instructions = instructions;
        this.image = image;
    }
}