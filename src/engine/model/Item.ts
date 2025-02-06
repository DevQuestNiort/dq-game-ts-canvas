import {Position} from "./Position.ts";



/*

ITEM Sterile ( tonneau, decoratif )  MVP zero action ( bloquant et decoratif )



 */



export interface Item {

    uid: string;
    name: string;
    type: ItemType;
    position: Position;
    description: string;
    instructions: string;
    image: string;


}


export enum ItemType {
    DECORATIF,
    PICKABLE,
    USABLE,
}


export enum BonusType {
    LIFE,
    DEGAT,
    DEFENSE,
}