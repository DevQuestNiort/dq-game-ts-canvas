import {Position} from "../../engine/model/Position.ts";
import {DecorativeItem} from "../../engine/model/item/DecorativeItem.ts";
import {PickableItem} from "../../engine/model/item/PickableItem.ts";
import {ComsumableItem} from "../../engine/model/item/ComsumableItem.ts";
import {UsableItem} from "../../engine/model/item/UsableItem.ts";
import {movePlayerToPosition, movePlayerToPositionAndMap} from "../../engine/PlayerManager.ts";
import {PNJItem} from "../../engine/model/item/PNJItem.ts";
import {playSound, SoundType} from "../../engine/SoundEngine.ts";
import {DoorItem} from "../../engine/model/item/DoorItem.ts";
import {ModalTemplate} from "../../engine/model/modalTemplate/ModalTemplate.ts";
import {gameState} from "../../engine/GameDataService.ts";
import {TrapItem} from "../../engine/model/item/TrapItem.ts";

export const items = [

    new DoorItem("cm6uhwsdo0005vs630x547dy7", "Porte Rouge", new Position(14, 17), "Porte Rouge", "", "prisonRed", "cleRouge"),
    new DoorItem("porteBleu", "Porte Bleu", new Position(26, 30), "Porte Bleu", "", "prisonBlue", "cleBleu"),
    new DoorItem("portesimple", "Porte", new Position(26, 11), "Porte", "", "porte", undefined
    ),
    new DoorItem("porteJaune01", "Porte", new Position(111, 27), "Porte", "", "prisonYellow", undefined
    ),



    new PickableItem("epee", "Epee", new Position(10, 5), (player) => player.attack += 3, "Epee Magique augmentant l'attaque +3", "press T pour prendre", "raresword"),
    new PickableItem("bouclier", "bouclier", new Position(9, 13), (player) => player.defense += 5, "Bouclier D' Agnes, +5 en defense", "press T pour prendre", "bouclier"),
    new PickableItem("collier", "collier", new Position(9, 14), (player) => {}, "Collier du trappeur, detecte les pièges", "press T pour prendre", "collier"),

    new PickableItem("cleRouge", "cle", new Position(8, 16), () => {
    }, "Une cle Rouge", "press T pour prendre", "cleRed"),
    new PickableItem("cleBleu", "cle", new Position(123, 5), () => {
    }, "Une cle Bleu", "press T pour prendre", "cleBlue"),
    new PickableItem("redStone", "Red Stone", new Position(25, 13), () => {
    }, "Diamant rendant insensible à la chaleur", "press T pour prendre", "gem"),
    new PickableItem("blueStone", "Blue Stone", new Position(117, 22), () => {
    }, "Diamant permettant de marcher sur l'eau", "press T pour prendre", "diamantBleu"),

    new ComsumableItem("poutionsoin01 ", "Potion", new Position(16, 16), () => gameState.player.heal(15), "Potion de soin +15", "press T pour Boire", "potion"),

    new ComsumableItem("PotionMaxVie", "Potion", new Position(17, 18), () => gameState.player.augmenterMaxLife(5), "Augmente la vie max de 5 points", "press T pour Boire", "potion-tr"),









    new TrapItem("piege001",
        "trapp",
        new Position(11, 10),

        "trapp",
        "Aie",
        "piege",
        () => {
            gameState.player.takeCriticalDamage(10);
            playSound(SoundType.PIEGE);
        },
        true,"collier"),


    new UsableItem("TeleportVersMarecage", "Vers Marecage", new Position(124, 23), () => {
        movePlayerToPositionAndMap(0, 40,"marecage");
        playSound(SoundType.JUMP)
    }, "Vers le marécage", "Press T pour entrer dans le marécage", "vortex"),

    new UsableItem("cm6uiryd9000kvs6308ahv6nm", "Vortex", new Position(53, 3), () => {
        movePlayerToPosition(111, 29);
        playSound(SoundType.JUMP)
    }, "Vortex dimensionel", "Press T pour entrer dans le vortex", "vortex"),


    new UsableItem("cm6v5vbc4000ovs633vgd1cdb", "Vers le sous sol", new Position(30, 13), () => {
        movePlayerToPositionAndMap(23, 26, "castelm01");// 18 / 14
    }, "Trappe d'accès", "Press T pour descendre dans les prisons du chateau", "trapp"),

    new UsableItem("vortexToLabyrintheMAP", "vers le labyrinthe", new Position(112, 30), () => {
        movePlayerToPositionAndMap(8, 10, "labyrinthe");
        playSound(SoundType.JUMP)
    }, "Trap d'acces", "Press T pour descendre dans le labyrinthe", "trapp"),



    new UsableItem("moveToIleDeserte", "vers ile ", new Position(46, 20), () => {
        movePlayerToPositionAndMap(5, 21, "ile");
        playSound(SoundType.VOYAGE)
    }, "Bateau", "Press T pour voyager vers l'ile mysterieuse", "boat01"),
    new UsableItem("moveToIleDeserte", "vers ile ", new Position(46, 21), () => {
        movePlayerToPositionAndMap(5, 21, "ile");
        playSound(SoundType.VOYAGE)
    }, "Bateau", "Press T pour voyager vers l'ile mysterieuse", "boat02"),
    new UsableItem("moveToIleDeserte", "vers ile ", new Position(46, 22), () => {
        movePlayerToPositionAndMap(5, 21, "ile");
        playSound(SoundType.VOYAGE)
    }, "Bateau", "Press T pour voyager vers l'ile mysterieuse", "boat03"),


    new DecorativeItem("cm6ux31s6000nvs63zvk1aj1s", "Information", new Position(82, 29), "panneau", "", "panneau",
        new ModalTemplate("DEVQUEST", "panneau", "Bienvenue dans cette quete aventurier aventureux. Ne fait confiance a personne dans ce monde. Les dieux qui l'ont cree sont aussi fou qu ils sont incompetents. Mais qui sais, une recompense est peut etre au bout de cette aventure !!!")),


    new DecorativeItem("informationMarecage", "Information", new Position(120, 22), "panneau", "", "panneau",
        new ModalTemplate("Marécage Passec", "panneau", " Voici le marécage Passec. Le dernier repaire d'une race de serpent vorace. Nombreux sont les villageois qui ont disparu dans ce marécage. \n \n " +
            " Homage aux disparus \n " +
            " * Gaspar le maraicher \n " +
            " * René la taupe \n " +
            " * Roger le gardien du la grotte au sud \n "+
            " \n \n Attention ! Les serpents avalent tout et n'importe quoi  !")),


    new DecorativeItem("infoChateau", "Information", new Position(23, 32), "panneau", "", "panneau",
        new ModalTemplate("Chateau d'iRule", "panneau", "Bienvenue au Dark iRule ! Soyez prévenu, si vous y pénétrez, vous vous y risquez ! Le maitre incontesté Browser le méchant navigateur ainsi que ces fidèles sous fifres I'x et Cess vous chasseront sans cesse !")),

    new DecorativeItem("infoGrotte", "Information", new Position(113, 26), "panneau", "", "panneau",
        new ModalTemplate("Grotte", "panneau", " Accès interdit aux néophytes !")),



    new DecorativeItem("bibliotheque002", "Information", new Position(8, 19), "bibliotheque", "", "bibliotheque",
        new ModalTemplate("Grotte", "bibliotheque", " Accès interdit aux néophytes !")),

    new DecorativeItem("bibliotheque003", "Information", new Position(9, 19), "bibliotheque", "", "bibliotheque",
        new ModalTemplate("Grotte", "bibliotheque", " Accès interdit aux néophytes !")),

    new DecorativeItem("bibliotheque004", "Information", new Position(8, 21), "bibliotheque", "", "bibliotheque",
        new ModalTemplate("Grotte", "bibliotheque", " Accès interdit aux néophytes !")),

    new DecorativeItem("bibliotheque005", "Information", new Position(9, 21), "bibliotheque", "", "bibliotheque",
        new ModalTemplate("Grotte", "bibliotheque", " Accès interdit aux néophytes !")),


    new DecorativeItem("bibliotheque002", "Information", new Position(19, 19), "bibliotheque", "", "bibliotheque",
        new ModalTemplate("Grotte", "bibliotheque", " Accès interdit aux néophytes !")),

    new DecorativeItem("bibliotheque003", "Information", new Position(19, 21), "bibliotheque", "", "bibliotheque",
        new ModalTemplate("Grotte", "bibliotheque", " Accès interdit aux néophytes !")),

    new DecorativeItem("bibliotheque004", "Information", new Position(20, 19), "bibliotheque", "", "bibliotheque",
        new ModalTemplate("Grotte", "bibliotheque", " Accès interdit aux néophytes !")),

    new DecorativeItem("bibliotheque005", "Information", new Position(20, 21), "bibliotheque", "", "bibliotheque",
        new ModalTemplate("Grotte", "bibliotheque", " Accès interdit aux néophytes !")),


    new DecorativeItem("", "table", new Position(13, 21), "table", "", "table01"
        ),
    new DecorativeItem("", "table", new Position(14, 20), "table", "", "table01"
    ),
    new DecorativeItem("", "table", new Position(13, 20), "table", "", "table01"
    ),





    new PNJItem("gardienDeLaTrapLabyrinthe", "La Poisse", new Position(111, 29), 15, 5, 1, () => {

    }, "", "", "ogre02", new ModalTemplate("La Poisse", "ogre02", "Ca fait longtemps que je n'avais pas vu une tête vivante... Je m'appelle La Poisse. Je suis la pour garder l'accès du labirynthe maudit et prévenir les aventuriers des dangers a y pénétrer. Mais j'en ai ma claque donc si tu veux te faire tuer libre à toi..  ")),

    new PNJItem("cm6v5vbc4000ovs633vgd1cdb", "arbre", new Position(78, 33), 1, 0, 0, () => {
        console.log("in death arbre")
        movePlayerToPositionAndMap(23, 26, "castelm01");
    }, "", "", "arbre"),


    new PNJItem("Turuk", "Turuk", new Position(13, 10), 10, 8, 2, (stateContext) => {
        stateContext.mapStates[stateContext.currentMap].items.addItem(new ComsumableItem("cm6ul464y000mvs630qlpu3ik", "Potion", new Position(13, 10), () => gameState.player.heal(15), "Potion de soin +15", "", "potion"),)
    }, "niak", "", "troll",new ModalTemplate("Turuk", "troll", "Gniak !!!! Que viens tu faire aventurier... Ne commence pas à me chercher ! Moi je garde la boustifaille et le pinard !! Et je ne partage pas !! Donc vas t-en !")),


    new PNJItem("Yanok", "Yanok", new Position(26, 22), 10, 3, 1, (stateContext) => {

    }, "niak", "", "troll",new ModalTemplate("Yanok", "troll", "Team Fayos au bouloss")),


    new PNJItem("necromancer", "necromancer", new Position(11, 19), 10, 3, 1, (stateContext) => {

    }, "necromancer", "", "necromancer",new ModalTemplate("necromancer", "necromancer",
        "Je suis Darnillam, nécromancien  renommé.. Vous me connaissez ??  eumh Non . Tant pis ! Je suis prisonnier de ce chateau depuis longtemps. Trop longtemps. Tous ce que je puis vous dire c'est que je ne suis pas celui que vous penser que je soit..  Mais soit !!!  \n Ne toucher pas à mes grimoires.. Par contre le potion  viollette à coté de moi est pour vous !  "
    )),





    new PNJItem("Shamin", "Shamin", new Position(100, 15), 7, 15, 2, (stateContext) => {
        stateContext.mapStates[stateContext.currentMap].items.addItem(new ComsumableItem("cm6ul464y000mvs630qlpu3ik", "Potion", new Position(13, 10), () => gameState.player.heal(15), "Potion de soin +15", "", "potion"),)
    }, "wizard", "", "wizard",new ModalTemplate("Shamin", "wizard", "Bienvenu sur Astenia jeu aventurier ! Cette ville connait une historie sombre en cette époque. Notre princesse L'IA s'est faite capturer par Browser, le maitre du château.\n" +
        "Aidez-nous à sauver notre princesse pour restaurer l'équilibre de notre ville!\n" +
        "Vous trouverez votre premier indice vers le nord Est")),

    new PNJItem("Grodor", "Grodor", new Position(81, 11), 12, 5, 1, (stateContext) => {

        }, "wizard",
        "",
        "ogre01",
        new ModalTemplate("Grodor", "ogre01", "Gnufur , Ferum dakiki...  Retro pedalo.... GRONCOLUPUK ! ")),






    new DecorativeItem("cm6uhwsdo0005vs630x547dy7", "tonneau", new Position(8, 13), "Tonneau", "", "tonneau"),
    new DecorativeItem("cm6uhwsdo0006vs63ms9nj6rz", "tonneau", new Position(9, 3), "Tonneau", "", "tonneau"),
    new DecorativeItem("cm6uhwsdp0007vs638qayx71d", "tonneau", new Position(9, 4), "Tonneau", "", "tonneau"),
    new DecorativeItem("cm6uhwsdp0008vs63m5ief2ju", "tonneau", new Position(9, 5), "Tonneau", "", "tonneau"),
    new DecorativeItem("cm6uhwsdq0009vs638ze6dcb0", "tonneau", new Position(8, 3), "Tonneau", "", "tonneau"),
    new DecorativeItem("cm6uhwsdq000avs6373xmzni4", "tonneau", new Position(8, 4), "Tonneau", "", "tonneau"),
    new DecorativeItem("cm6uhwsdq000bvs63rqcibozy", "tonneau", new Position(8, 5), "Tonneau", "", "tonneau"),
    new DecorativeItem("cm6uhwsdr000cvs6353vm2hah", "tonneau", new Position(9, 6), "Tonneau", "", "tonneau"),
    new DecorativeItem("cm6uhwsdr000dvs63fu1ef9c4", "tonneau", new Position(9, 7), "Tonneau", "", "tonneau"),

    new DecorativeItem("464646456513", "tonneau", new Position(56, 17), "Tonneau", "", "tonneau"),
    new DecorativeItem("4646464sds56513", "tonneau", new Position(37, 18), "Tonneau", "", "tonneau"),
    new DecorativeItem("sd", "tonneau", new Position(38, 18), "Tonneau", "", "tonneau"),
    new DecorativeItem("46dsds646456513", "tonneau", new Position(37, 19), "Tonneau", "", "tonneau"),
    new DecorativeItem("cm6dsuhwsds000evs634v1u7wqp", "tonneau", new Position(9, 8), "Tonneau", "", "tonneau"),
    new DecorativeItem("", "tonneau", new Position(38, 21), "Tonneau", "", "tonneau"),
    new DecorativeItem("", "tonneau", new Position(39, 21), "Tonneau", "", "tonneau"),
    new DecorativeItem("", "tonneau", new Position(40, 21), "Tonneau", "", "tonneau"),
    new DecorativeItem("", "tonneau", new Position(41, 21), "Tonneau", "", "tonneau"),

    new DecorativeItem("", "tonneau", new Position(41, 19), "Tonneau", "", "tonneau"),






    new DecorativeItem("cm6uhwsds000fvs639s3hmb0x", "chandelier", new Position(24, 19), "chandelier", "", "chandelier"),
    new DecorativeItem("cm6uhwsds000gvs63p4inw2g3", "chandelier", new Position(28, 19), "chandelier", "", "chandelier"),
    new DecorativeItem("cm6uhwsdt000hvs633mymbil9", "chandelier", new Position(24, 16), "chandelier", "", "chandelier"),
    new DecorativeItem("cm6uhwsdt000ivs63h58pdyto", "chandelier", new Position(28, 16), "chandelier", "", "chandelier"),

    new DecorativeItem("biblio01", "biblio", new Position(96, 13), "", "", "bibliotheque"),
    new DecorativeItem("dfsfds", "tonneau", new Position(102, 14), "Tonneau", "", "tonneau"),
    new DecorativeItem("biblio02", "biblio", new Position(97, 13), "", "", "bibliotheque"),
    new DecorativeItem("table01", "biblio", new Position(98, 15), "", "", "table01"),
    new DecorativeItem("chair01", "biblio", new Position(97, 15), "", "", "chair01"),
    new DecorativeItem("table02", "biblio", new Position(90, 15), "", "", "table01"),
    new DecorativeItem("table03", "biblio", new Position(78, 12), "", "", "table01"),
    new DecorativeItem("table04", "biblio", new Position(95, 7), "", "", "table01"),



]