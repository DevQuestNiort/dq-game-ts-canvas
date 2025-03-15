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
            " Victoire, voici devant toi, à tes pieds,  code promo que tu pourras utilisé pour obtenir le pass pour le devquest gratuitement ! Pour cela rend toi sur la billeterie du devquest choisi ton pass 2 jours et colle le code réduc..   \n Attention Premier arrivé premier servi. ",

        ),

    ),



];
