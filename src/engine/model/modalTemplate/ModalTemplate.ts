import {AbstractModalTemplate, TypeModal} from "./AbstractModalTemplate.ts";

export class ModalTemplate  extends AbstractModalTemplate{

    title : string
    image : string
    text :string

    constructor(title: string,image:string,  text: string) {
        super(TypeModal.DETAILSIMPLE)
        this.title = title;
        this.image=image;
        this.text = text;
    }
}