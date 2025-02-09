
export abstract class AbstractModalTemplate {

    type: TypeModal

    constructor(type: TypeModal) {
        this.type = type;
    }
}


export enum TypeModal {
    INVENTAIRE,
    DETAILSIMPLE,
    PERSONNAGE

}