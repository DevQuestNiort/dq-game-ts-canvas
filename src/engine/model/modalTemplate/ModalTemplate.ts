import {AbstractModalTemplate, TypeModal} from "./AbstractModalTemplate.ts";

export class ModalTemplate  extends AbstractModalTemplate{

    title : string
    texts :string[]

    constructor(title: string, texts: string[]) {
        super(TypeModal.DETAILSIMPLE)
        this.title = title;
        this.texts = texts;
    }
}