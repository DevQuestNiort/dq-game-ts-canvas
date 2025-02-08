import {UsableItem} from "../../engine/model/UsableItem.ts";
import {Position} from "../../engine/model/Position.ts";
import {movePlayerToPositionAndMap} from "../../engine/PlayerManager.ts";
import {playSound} from "../../engine/SoundManager.ts";
import {DoorItem} from "../../engine/model/DoorItem.ts";


export const items = [
    new UsableItem("cm6wgtgl8000pvs637yvkmuig", "Vortex", new Position(23, 17), (player) => {
        movePlayerToPositionAndMap(30, 13,"astenia");// 30, 13
        playSound("jump")
    }, "Vortex dimensionel", "Press T pour entrer dans le vortex", "echelle"),

    new DoorItem("cm6wgtl9d000qvs632skbx029", "Porte Rouge", new Position(29, 17), "Porte Rouge", "", "prisonRed","cleRouge"),
]