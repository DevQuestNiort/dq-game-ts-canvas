export class ModalChoice {


    titre : string
    action :()=>void


    constructor(titre: string, action) {
        this.titre = titre;
        this.action = action
    }


}