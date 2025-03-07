import {Position} from "../../engine/model/Position.ts";
import {DecorativeItem} from "../../engine/model/item/DecorativeItem.ts";
import {PickableItem} from "../../engine/model/item/PickableItem.ts";
import {ComsumableItem} from "../../engine/model/item/ComsumableItem.ts";
import {UsableItem} from "../../engine/model/item/UsableItem.ts";
import {movePlayer, movePlayerToPosition, movePlayerToPositionAndMap} from "../../engine/PlayerManager.ts";
import {PNJItem} from "../../engine/model/item/PNJItem.ts";
import {playSound} from "../../engine/SoundEngine.ts";
import {DoorItem} from "../../engine/model/item/DoorItem.ts";
import {ModalTemplate} from "../../engine/model/modalTemplate/ModalTemplate.ts";

export const items = [

    new DoorItem("cm6uhwsdo0005vs630x547dy7", "Porte Rouge", new Position(13, 17), "Porte Rouge", "", "prisonRed","cleRouge"),

    new PickableItem("cm6uhwsdm0002vs63dzl0g70a", "Epee", new Position(10, 5), (player) => player.attack += 3, "Epee Magique augmentant l'attaque +3", "press T pour prendre", "raresword"),
    new PickableItem("cm6uhwsdn0003vs63vjx18npm", "bouclier", new Position(9, 13), (player) => player.defense += 5, "Bouclier D' Agnes, +5 en defense", "press T pour prendre", "bouclier"),

    new PickableItem("cleRouge", "cle", new Position(8, 16), (player) => {}, "Une cle Rouge", "press T pour prendre", "cleRed"),
    new PickableItem("redStone", "Red Stone", new Position(25, 13), (player) => {}, "Diamant rendant insensible à la chaleur", "press T pour prendre", "gem"),
    new PickableItem("blueStone", "Blue Stone", new Position(11, 11), (player) => {}, "Diamant permettant de marcher sur l'eau", "press T pour prendre", "diamantBleu"),

    new ComsumableItem("cm6uhwsdn0004vs63z2xh2hfh", "Potion", new Position(16, 16), (player) => player.life += 15, "Potion de soin +15", "press T pour Boise", "potion"),
    new UsableItem("cm6uiav5h000jvs633dm9oyj9", "Vortex", new Position(110, 29), (player) => {
        movePlayerToPositionAndMap(8, 10, "labyrinthe");
        playSound("jump")
    }, "Vortex dimensionel", "Press T pour entrer dans le vortex", "vortex"),
    new UsableItem("cm6uiryd9000kvs6308ahv6nm", "Vortex", new Position(124, 23), (player) => {
        movePlayerToPosition(56, 3);
        playSound("jump")
    }, "Vortex dimensionel", "Press T pour entrer dans le vortex", "vortex"),

    new UsableItem("cm6uiryd9000kvs6308ahv6nm", "Vortex", new Position(53, 3), (player) => {
        movePlayerToPosition(111, 29);
        playSound("jump")
    }, "Vortex dimensionel", "Press T pour entrer dans le vortex", "vortex"),

    new UsableItem("cm6v5vbc4000ovs633vgd1cdb", "Vortex", new Position(30, 13), (player) => {
        movePlayerToPositionAndMap(23, 26,"castelm01");// 18 / 14
    }, "Vortex dimensionel", "Press T pour entrer dans la trappe", "trapp"),

    new PNJItem("cm6uj11q4000lvs63d6xka7h4", "Monster", new Position(13, 10), 10, 8, 2, (stateContext) => {
        stateContext.mapStates[stateContext.currentMap].items.addItem(new ComsumableItem("cm6ul464y000mvs630qlpu3ik", "Potion", new Position(13, 10), (player) => player.life += 15, "Potion de soin +15", "", "potion"),)
    }, "niak", "", "troll"),

    new DecorativeItem("cm6ux31s6000nvs63zvk1aj1s", "Carte", new Position(2, 20), "panneau", "", "panneau",
        new ModalTemplate("CastelGori",["Propriete du grand chaman El Paco Tille","ne supporte pas la salade et les elfes"])),

    new PNJItem("cm6v5vbc4000ovs633vgd1cdb", "arbre", new Position(78, 33), 1, 0, 0, (player) => {
        movePlayerToPositionAndMap(23, 26,"castelm01");// 18 / 14
    },"","","arbre"),


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