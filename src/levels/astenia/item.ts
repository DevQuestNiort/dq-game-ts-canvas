import {Position} from "../../engine/model/Position.ts";
import {DecorativeItem} from "../../engine/model/DecorativeItem.ts";
import {PickableItem} from "../../engine/model/PickableItem.ts";
import {ComsumableItem} from "../../engine/model/ComsumableItem.ts";
import {UsableItem} from "../../engine/model/UsableItem.ts";
import {movePlayer, movePlayerToPosition} from "../../engine/PlayerManager.ts";
import {PNJItem} from "../../engine/model/PNJItem.ts";
import {gameState, getCurrentMap} from "../../engine/GameDataService.ts";

export const items = [
    new PickableItem("cm6uhwsdm0002vs63dzl0g70a", "Epee", new Position(10, 5), (player) => player.attack += 3, "Epee Magique augmentant l'attaque +3", "press T pour prendre", "raresword"),
    new PickableItem("cm6uhwsdn0003vs63vjx18npm", "bouclier", new Position(9, 13), (player) => player.defense += 5, "Bouclier D' Agnes, +5 en defense", "press T pour prendre", "bouclier"),

    new ComsumableItem("cm6uhwsdn0004vs63z2xh2hfh", "Potion", new Position(16, 16), (player) => player.life += 15, "Potion de soin +15", "press T pour Boise", "potion"),
    new UsableItem("cm6uiav5h000jvs633dm9oyj9", "Vortex", new Position(13, 22), (player) => {
        movePlayerToPosition(36, 5)
    }, "Vortex dimensionel", "Press T pour entrer dans le vortex", "vortex"),
    new UsableItem("cm6uiryd9000kvs6308ahv6nm", "Vortex", new Position(36, 5), (player) => {
        movePlayerToPosition(13, 22)
    }, "Vortex dimensionel", "Press T pour entrer dans le vortex", "vortex"),

    new PNJItem("cm6uj11q4000lvs63d6xka7h4", "Vincent", new Position(13, 10), 10, 3, 2, (stateContext) => {
        stateContext.mapStates[stateContext.currentMap].items.addItem(new ComsumableItem("cm6ul464y000mvs630qlpu3ik", "Potion", new Position(13, 10), (player) => player.life += 15, "Potion de soin +15", "", "potion"),)
    }, "niak", "", "troll"),

    new DecorativeItem("cm6uhwsdo0005vs630x547dy7", "tonneau", new Position(8, 13), "Tonneau", "", "tonneau"),
    new DecorativeItem("cm6uhwsdo0006vs63ms9nj6rz", "tonneau", new Position(9, 3), "Tonneau", "", "tonneau"),
    new DecorativeItem("cm6uhwsdp0007vs638qayx71d", "tonneau", new Position(9, 4), "Tonneau", "", "tonneau"),
    new DecorativeItem("cm6uhwsdp0008vs63m5ief2ju", "tonneau", new Position(9, 5), "Tonneau", "", "tonneau"),
    new DecorativeItem("cm6uhwsdq0009vs638ze6dcb0", "tonneau", new Position(8, 3), "Tonneau", "", "tonneau"),
    new DecorativeItem("cm6uhwsdq000avs6373xmzni4", "tonneau", new Position(8, 4), "Tonneau", "", "tonneau"),
    new DecorativeItem("cm6uhwsdq000bvs63rqcibozy", "tonneau", new Position(8, 5), "Tonneau", "", "tonneau"),
    new DecorativeItem("cm6uhwsdr000cvs6353vm2hah", "tonneau", new Position(9, 6), "Tonneau", "", "tonneau"),
    new DecorativeItem("cm6uhwsdr000dvs63fu1ef9c4", "tonneau", new Position(9, 7), "Tonneau", "", "tonneau"),
    new DecorativeItem("cm6uhwsds000evs634v1u7wqp", "tonneau", new Position(9, 8), "Tonneau", "", "tonneau"),
    new DecorativeItem("cm6uhwsds000fvs639s3hmb0x", "chandelier", new Position(24, 19), "chandelier", "", "chandelier"),
    new DecorativeItem("cm6uhwsds000gvs63p4inw2g3", "chandelier", new Position(26, 19), "chandelier", "", "chandelier"),
    new DecorativeItem("cm6uhwsdt000hvs633mymbil9", "chandelier", new Position(23, 12), "chandelier", "", "chandelier"),
    new DecorativeItem("cm6uhwsdt000ivs63h58pdyto", "chandelier", new Position(23, 14), "chandelier", "", "chandelier")
]