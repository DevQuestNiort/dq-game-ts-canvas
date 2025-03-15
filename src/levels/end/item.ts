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
            "Victoire",
            "quest",
            " Victoire, voici devant toi, à tes pieds, le code promo que tu pourras utiliser pour obtenir le pass Devquest gratuitement ! Pour cela, rends-toi sur la billetterie du Devquest, choisis ton pass 2 jours et colle le code réduc.\nAttention, Premier arrivé, premier servi! ",

        ),

    ),



];
