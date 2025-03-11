import {PNJItem} from "../../engine/model/item/PNJItem.ts";
import {Position} from "../../engine/model/Position.ts";
import {ModalTemplate} from "../../engine/model/modalTemplate/ModalTemplate.ts";
import {ComsumableItem} from "../../engine/model/item/ComsumableItem.ts";
import {gameState} from "../../engine/GameDataService.ts";
import {PickableItem} from "../../engine/model/item/PickableItem.ts";
import {UsableItem} from "../../engine/model/item/UsableItem.ts";
import {movePlayerToPosition, movePlayerToPositionAndMap} from "../../engine/PlayerManager.ts";
import {playSound, SoundType} from "../../engine/SoundEngine.ts";


export const items = [
    new PNJItem("snake01", "snake", new Position(26, 22), 5, 3, 1, (stateContext) => {
    }, "serpent", "", "serpent",new ModalTemplate("snake", "serpent", "tssssss ")),
    new PNJItem("snake02", "snake", new Position(37, 5), 5, 3, 1, (stateContext) => {
    }, "serpent", "", "serpent",new ModalTemplate("snake", "serpent", "tssssss ")),
    new PNJItem("snake03", "snake", new Position(26, 5), 5, 3, 1, (stateContext) => {
    }, "serpent", "", "serpent",new ModalTemplate("snake", "serpent", "tssssss ")),
    new PNJItem("snake04", "snake", new Position(17, 7), 5, 3, 1, (stateContext) => {
    }, "serpent", "", "serpent",new ModalTemplate("snake", "serpent", "tssssss ")),
    new PNJItem("snake05", "snake", new Position(14, 3), 5, 3, 1, (stateContext) => {
    }, "serpent", "", "serpent",new ModalTemplate("snake", "serpent", "tssssss ")),
    new PNJItem("snake06", "snake", new Position(12, 22), 5, 3, 1, (stateContext) => {
        stateContext.mapStates[stateContext.currentMap].items.addItem(new PickableItem("cleJaune", "cle Jaune", new Position(12, 22), () => {
        }, "Clef Jaune", "appuyer sur T pour rammasser", "cle"),)
    }, "serpent", "", "serpent",new ModalTemplate("snake", "serpent", "tssssss ")),
    new PNJItem("snake07", "snake", new Position(15, 25), 5, 3, 1, (stateContext) => {
    }, "serpent", "", "serpent",new ModalTemplate("snake", "serpent", "tssssss ")),
    new PNJItem("snake08", "snake", new Position(8, 35), 5, 3, 1, (stateContext) => {
    }, "serpent", "", "serpent",new ModalTemplate("snake", "serpent", "tssssss ")),
    new PNJItem("snake09", "snake", new Position(27, 38), 5, 3, 1, (stateContext) => {
    }, "serpent", "", "serpent",new ModalTemplate("snake", "serpent", "tssssss ")),
    new PNJItem("snake10", "snake", new Position(3, 16), 5, 3, 1, (stateContext) => {
    }, "serpent", "", "serpent",new ModalTemplate("snake", "serpent", "tssssss ")),
    new PNJItem("snake11", "snake", new Position(3, 10), 5, 3, 1, (stateContext) => {
    }, "serpent", "", "serpent",new ModalTemplate("snake", "serpent", "tssssss ")),
    new PNJItem("snake12", "snake", new Position(19, 15), 5, 3, 1, (stateContext) => {
    }, "serpent", "", "serpent",new ModalTemplate("snake", "serpent", "tssssss ")),
    new PNJItem("snake13", "snake", new Position(37, 32), 5, 3, 1, (stateContext) => {
    }, "serpent", "", "serpent",new ModalTemplate("snake", "serpent", "tssssss ")),

    new UsableItem("toAstenia", "toAstenia", new Position(0, 40), () => {
        movePlayerToPositionAndMap(124, 23,"astenia");
        playSound(SoundType.JUMP)
    }, "Vers Astenia", "appuyer sur T pour entrer dans Astenia", "vortex"),
]
