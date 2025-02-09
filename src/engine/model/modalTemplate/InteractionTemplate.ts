import {AbstractModalTemplate, TypeModal} from "./AbstractModalTemplate.ts";

export class PersonnageTemplate extends AbstractModalTemplate{

    message : String

    responses : String[]


    constructor() {
        super(TypeModal.PERSONNAGE);
    }
}