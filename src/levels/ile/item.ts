import {UsableItem} from "../../engine/model/item/UsableItem.ts";
import {Position} from "../../engine/model/Position.ts";
import {movePlayerToPositionAndMap} from "../../engine/PlayerManager.ts";
import {playSound, SoundType} from "../../engine/SoundEngine.ts";
import {DoorItem} from "../../engine/model/item/DoorItem.ts";
import {DecorativeItem} from "../../engine/model/item/DecorativeItem.ts";
import {ModalTemplate} from "../../engine/model/modalTemplate/ModalTemplate.ts";


export const items = [

    new UsableItem("moveToAsteria", "vers Astenia ", new Position(5, 20), () => {
        movePlayerToPositionAndMap(46, 21, "astenia");
        playSound(SoundType.VOYAGE)
    }, "Bateau", "Press T pour voyager vers Astenia", "boat01"),
    new UsableItem("moveToAsteria", "vers Astenia ", new Position(5, 21), () => {
        movePlayerToPositionAndMap(46, 21, "astenia");
        playSound(SoundType.VOYAGE)
    }, "Bateau", "Press T pour voyager vers Astenia", "boat02"),
    new UsableItem("moveToAsteria", "vers Astenia ", new Position(5, 22), () => {
        movePlayerToPositionAndMap(46, 21, "astenia");
        playSound(SoundType.VOYAGE)
    }, "Bateau", "Press T pour voyager vers Astenia", "boat03"),


    new DecorativeItem("chevre01", "Chevre", new Position(13, 12), "Chevre", "", "chevre01",
        new ModalTemplate("Chevre Maigre", "chevre01", " Beeeeh !  Je ne saaiiiiiis pas ce que tu cheeeeeeerche mais c'est paaaaaaas mon problèèèèèème.. ")),
    new DecorativeItem("chevre02", "Chevre", new Position(14, 11), "Chevre", "", "chevre02",
        new ModalTemplate("Chèvre ", "chevre02", " Beeeeh !  Riennnnn à signaaaaaler iciiiiiii !")),



]