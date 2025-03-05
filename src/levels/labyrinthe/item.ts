import {UsableItem} from "../../engine/model/item/UsableItem.ts";
import {Position} from "../../engine/model/Position.ts";
import {movePlayerToPositionAndMap} from "../../engine/PlayerManager.ts";
import {playSound} from "../../engine/SoundEngine.ts";

export const items = [
    new UsableItem("cm6uiaf5h000jvs643dm9oyj9", "Vortex", new Position(48, 40), (player) => {
        movePlayerToPositionAndMap(29, 30, "boss");
        playSound("jump")
    }, "Vortex dimensionel", "Press T pour entrer dans le vortex", "vortex"),
]