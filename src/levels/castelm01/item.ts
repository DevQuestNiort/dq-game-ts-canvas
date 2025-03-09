import {UsableItem} from "../../engine/model/item/UsableItem.ts";
import {Position} from "../../engine/model/Position.ts";
import {movePlayerToPositionAndMap} from "../../engine/PlayerManager.ts";
import {playSound, SoundType} from "../../engine/SoundEngine.ts";
import {DoorItem} from "../../engine/model/item/DoorItem.ts";


export const items = [
    new UsableItem("cm6wgtgl8000pvs637yvkmuig", "Vortex", new Position(23, 26), () => {
        movePlayerToPositionAndMap(30, 13,"astenia");// 30, 13
        playSound(SoundType.JUMP)
    }, "Vortex dimensionel", "Press T pour entrer dans le vortex", "echelle"),

    new DoorItem("cm6wgtl9d000qvs632skbx029", "Porte Rouge", new Position(29, 26), "Porte Rouge", "", "prisonRed","cleRouge"),
]