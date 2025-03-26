import { UsableItem } from "../../engine/model/item/UsableItem.ts";
import { Position } from "../../engine/model/Position.ts";
import { movePlayerToPositionAndMap } from "../../engine/PlayerManager.ts";
import { playSound, SoundType } from "../../engine/SoundEngine.ts";
import {DecorativeItem} from "../../engine/model/item/DecorativeItem.ts";
import {ModalTemplate} from "../../engine/model/modalTemplate/ModalTemplate.ts";

export const items = [
  new UsableItem(
    "fsdfsfdsfdsfs",
    "Vortex",
    new Position(28, 11),
    () => {
      movePlayerToPositionAndMap(20, 20, "astenia"); // 30, 13
      playSound(SoundType.JUMP);
    },
    "Vortex dimensionnel",
    "appuyer sur T pour entrer dans le vortex",
    "vortex",
  ),

    new DecorativeItem(
        "fgddsfdsffg",
        "quest",
        new Position(27, 10),
        "",
        "Clique sur R pour lire",
"quest",
        new ModalTemplate(
            "Too late",
            "quest",
            " La récompense unique a déja été trouvé par un aventurier ! Mais Féliciatation d'être parvenu jusqu'ici ! N'hesites pas poster le code se trouvant à tes pieds, sur les reseaux sociaux en taguant le devquest, comme preuve et reconnaissance de ta victoire! ",
        ),
    ),
];
