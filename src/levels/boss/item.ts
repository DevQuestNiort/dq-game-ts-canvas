import {PNJItem} from "../../engine/model/item/PNJItem.ts";
import {Position} from "../../engine/model/Position.ts";

import {ModalTemplate} from "../../engine/model/modalTemplate/ModalTemplate.ts";
import {UsableItem} from "../../engine/model/item/UsableItem.ts";
import {ModalChoice} from "../../engine/model/modalTemplate/ModalChoice.ts";
import {gameState} from "../../engine/GameDataService.ts";
import {movePlayerToPositionAndMap} from "../../engine/PlayerManager.ts";

export const items = [

    new PNJItem("boss","Browser",new Position(16, 16),100,7,5,(stateContext)=>{
        stateContext.mapStates[stateContext.currentMap].items.addItem(
            new UsableItem("portail", "portail", new Position(16, 16), () => {
                    }, "Vers la salle du tresor", "press T pour sauter", "mission"))
        }
        ,"Browser","","dragon",
        new ModalTemplate("Browser", "dragon", "Je n'ai pas capturé la princess L'IA, nous sommes mariés et en lune de miel! Regarde dans les archives du chateau ! au Labo 4 eme etagère 6eme rangée livre 2",
            [
                new ModalChoice("Retourner dans le village" , ()=> movePlayerToPositionAndMap(10,10,"astenia")),
                new ModalChoice("Suicide" , ()=> gameState.player.takeCriticalDamage(100))
            ])),

]