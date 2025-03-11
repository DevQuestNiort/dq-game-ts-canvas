import {Position} from "../../engine/model/Position.ts";
import {DecorativeItem} from "../../engine/model/item/DecorativeItem.ts";
import {PickableItem} from "../../engine/model/item/PickableItem.ts";
import {ComsumableItem} from "../../engine/model/item/ComsumableItem.ts";
import {UsableItem} from "../../engine/model/item/UsableItem.ts";
import {movePlayerToPositionAndMap} from "../../engine/PlayerManager.ts";
import {PNJItem} from "../../engine/model/item/PNJItem.ts";
import {playSound, SoundType} from "../../engine/SoundEngine.ts";
import {DoorItem} from "../../engine/model/item/DoorItem.ts";
import {ModalTemplate} from "../../engine/model/modalTemplate/ModalTemplate.ts";
import {gameState} from "../../engine/GameDataService.ts";
import {TrapItem} from "../../engine/model/item/TrapItem.ts";
import {ModalChoice} from "../../engine/model/modalTemplate/ModalChoice.ts";

export const items = [


    //  Laboratoire


    new DoorItem("PorteRouge01", "Porte Rouge", new Position(14, 17), "Porte Rouge", "", "prisonRed", "cleRouge"),

    new DecorativeItem("bibliotheque002", "Information", new Position(8, 19), "bibliotheque", "", "bibliotheque"),

    new DecorativeItem("bibliotheque003", "Information", new Position(9, 19), "bibliotheque", "", "bibliotheque"),

    new DecorativeItem("bibliotheque004", "Information", new Position(8, 21), "bibliotheque", "", "bibliotheque"),

    new DecorativeItem("bibliotheque005", "Information", new Position(9, 21), "bibliotheque", "", "bibliotheque"),


    new DecorativeItem("bibliotheque002", "Information", new Position(19, 19), "bibliotheque", "", "bibliotheque"),

    new DecorativeItem("bibliotheque003", "Information", new Position(19, 21), "bibliotheque", "", "bibliotheque"),

    new DecorativeItem("bibliotheque004", "Information", new Position(20, 19), "bibliotheque", "", "bibliotheque",
        new ModalTemplate("Bibliotheque", "bibliotheque", "Tiens? un passage secret!",
            [
                new ModalChoice("Teleportation" , ()=> movePlayerToPositionAndMap(10,10,"end")),
            ])),

    new DecorativeItem("bibliotheque005", "Information", new Position(20, 21), "bibliotheque", "", "bibliotheque"),

    new DecorativeItem("", "table", new Position(13, 21), "table", "", "table01"),
    new DecorativeItem("", "table", new Position(14, 20), "table", "", "table01"),
    new DecorativeItem("", "table", new Position(13, 20), "table", "", "table01"),

    new PickableItem("cleVerte", "cle", new Position(17, 21), () => {
    }, "Une cle vert", "appuyer sur T pour prendre", "cleGreen"),

    new PNJItem("necromancer", "necromancer", new Position(11, 19), 10, 3, 1, (stateContext) => {
    }, "necromancer", "", "necromancer", new ModalTemplate("necromancer", "necromancer",
        "Je suis Darnillam, nécromancien renommé, Vous me connaissez? Non? Tant pis! Je suis prisonnier de ce château depuis longtemps. Trop longtemps. Tous ce que je puis vous dire c'est que je ne suis pas celui que vous pensez, mais soit! \n \n Le repaire de Browser se trouve dans une grotte au sud du village.\n\n\nNe touchez pas à mes grimoires! En revanche, la potion violette à coté de moi est pour vous!"
    )),

    new ComsumableItem("PotionMaxVie", "Potion", new Position(17, 18), () => gameState.player.augmenterMaxLife(5), "Augmente la vie max de 5 points", "appuyer sur T pour boire", "potion-tr"),
    // ----------------------------------------------------------


    // Salle du trone

    new DecorativeItem("", "", new Position(8, 12), "", "", "tapisCoteHaut", undefined, true),
    new DecorativeItem("", "", new Position(9, 12), "", "", "tapisCoteHaut", undefined, true),
    new DecorativeItem("", "", new Position(10, 12), "", "", "tapisCoteHaut", undefined, true),
    new DecorativeItem("", "", new Position(11, 12), "", "", "tapisCoteHaut", undefined, true),
    new DecorativeItem("", "", new Position(12, 12), "", "", "tapisCoteHaut", undefined, true),
    new DecorativeItem("", "", new Position(13, 12), "", "", "tapisCoteHaut", undefined, true),
    new DecorativeItem("", "", new Position(14, 12), "", "", "tapisAngleHautDroit", undefined, true),
    new DecorativeItem("", "", new Position(8, 13), "", "", "tapisMilieu", undefined, true),
    new DecorativeItem("", "", new Position(9, 13), "", "", "tapisMilieu", undefined, true),
    new DecorativeItem("", "", new Position(10, 13), "", "", "tapisMilieu", undefined, true),
    new DecorativeItem("", "", new Position(11, 13), "", "", "tapisMilieu", undefined, true),
    new DecorativeItem("", "", new Position(12, 13), "", "", "tapisMilieu", undefined, true),
    new DecorativeItem("", "", new Position(13, 13), "", "", "tapisMilieu", undefined, true),
    new DecorativeItem("", "", new Position(14, 13), "", "", "tapisCoteDroit", undefined, true),
    new DecorativeItem("", "", new Position(8, 14), "", "", "tapisCoteBas", undefined, true),
    new DecorativeItem("", "", new Position(9, 14), "", "", "tapisCoteBas", undefined, true),
    new DecorativeItem("", "", new Position(10, 14), "", "", "tapisCoteBas", undefined, true),
    new DecorativeItem("", "", new Position(11, 14), "", "", "tapisCoteBas", undefined, true),
    new DecorativeItem("", "", new Position(12, 14), "", "", "tapisCoteBas", undefined, true),
    new DecorativeItem("", "", new Position(13, 14), "", "", "tapisCoteBas", undefined, true),

    new DecorativeItem("", "", new Position(14, 14), "", "", "tapisAngleBasDroit", undefined, true),
    new DecorativeItem("", "chandelier", new Position(8, 15), "chandelier", "", "feu"),
    new DecorativeItem("", "chandelier", new Position(8, 11), "chandelier", "", "feu"),
    new DecorativeItem("", "chandelier", new Position(15, 11), "chandelier", "", "feu"),
    new DecorativeItem("", "chandelier", new Position(15, 15), "chandelier", "", "feu"),


    new DecorativeItem("", "fleurs", new Position(20, 15), "fleurs", "", "fleurs"),
    new DecorativeItem("", "fleurs", new Position(20, 11), "fleurs", "", "fleurs"),

    new DecorativeItem("trone", "trone", new Position(8, 13), "trone", "", "trone"),

    new PNJItem("Turuk", "Turuk", new Position(13, 10), 10, 8, 2, (stateContext) => {
        stateContext.mapStates[stateContext.currentMap].items.addItem(new ComsumableItem("cm6ul464y000mvs630qlpu3ik", "Potion", new Position(13, 10), () => gameState.player.heal(15), "Potion de soin +15", "", "potion"),)
    }, "niak", "", "troll", new ModalTemplate("Turuk", "troll", "Gniak!!!! Que viens-tu faire aventurier... Ne commence pas à me chercher! Moi je garde la salle du trésor! Et je le fais bien! Donc va-t'en!")),


    // salle trésor



    new DecorativeItem("", "", new Position(10, 4), "", "", "tapisCoteHaut", undefined, true),
    new DecorativeItem("", "", new Position(11, 4), "", "", "tapisCoteHaut", undefined, true),
    new DecorativeItem("", "", new Position(12, 4), "", "", "tapisCoteHaut", undefined, true),
    new DecorativeItem("", "", new Position(13, 4), "", "", "tapisCoteHaut", undefined, true),
    new DecorativeItem("", "", new Position(14, 4), "", "", "tapisCoteHaut", undefined, true),
    new DecorativeItem("", "", new Position(15, 4), "", "", "tapisCoteHaut", undefined, true),
    new DecorativeItem("", "", new Position(16, 4), "", "", "tapisCoteHaut", undefined, true),


    new DecorativeItem("", "", new Position(17, 4), "", "", "tapisAngleHautDroit", undefined, true),
    new DecorativeItem("", "", new Position(17, 5), "", "", "tapisCoteDroit", undefined, true),
    new DecorativeItem("", "", new Position(17, 6), "", "", "tapisCoteDroit", undefined, true),
    new DecorativeItem("", "", new Position(17, 7), "", "", "tapisAngleBasDroit", undefined, true),

    new DecorativeItem("", "", new Position(11, 5), "", "", "tapisMilieu", undefined, true),
    new DecorativeItem("", "", new Position(12, 5), "", "", "tapisMilieu", undefined, true),
    new DecorativeItem("", "", new Position(13, 5), "", "", "tapisMilieu", undefined, true),
    new DecorativeItem("", "", new Position(14, 5), "", "", "tapisMilieu", undefined, true),
    new DecorativeItem("", "", new Position(15, 5), "", "", "tapisMilieu", undefined, true),
    new DecorativeItem("", "", new Position(11, 6), "", "", "tapisMilieu", undefined, true),
    new DecorativeItem("", "", new Position(12, 6), "", "", "tapisMilieu", undefined, true),
    new DecorativeItem("", "", new Position(13, 6), "", "", "tapisMilieu", undefined, true),
    new DecorativeItem("", "", new Position(14, 6), "", "", "tapisMilieu", undefined, true),
    new DecorativeItem("", "", new Position(15, 6), "", "", "tapisMilieu", undefined, true),


    new DecorativeItem("", "", new Position(9, 4), "", "", "tapisAngleHautGauche", undefined, true),
    new DecorativeItem("", "", new Position(9, 5), "", "", "tapisCoteGauche", undefined, true),
    new DecorativeItem("", "", new Position(9, 6), "", "", "tapisCoteGauche", undefined, true),
    new DecorativeItem("", "", new Position(9, 7), "", "", "tapisAngleBasGauche", undefined, true),


    new DecorativeItem("", "", new Position(10, 7), "", "", "tapisCoteBas", undefined, true),
    new DecorativeItem("", "", new Position(11, 7), "", "", "tapisCoteBas", undefined, true),
    new DecorativeItem("", "", new Position(12, 7), "", "", "tapisCoteBas", undefined, true),
    new DecorativeItem("", "", new Position(13, 7), "", "", "tapisCoteBas", undefined, true),
    new DecorativeItem("", "", new Position(14, 7), "", "", "tapisCoteBas", undefined, true),
    new DecorativeItem("", "", new Position(15, 7), "", "", "tapisCoteBas", undefined, true),
    new DecorativeItem("", "", new Position(16, 7), "", "", "tapisCoteBas", undefined, true),

    new DecorativeItem("", "tresor01", new Position(9, 7), "Coffre", "", "tresor01"),
    new DecorativeItem("", "tresor02", new Position(11, 7), "Coffre", "", "tresor02"),
    new DecorativeItem("", "tresor01", new Position(9, 6), "Coffre", "", "tresor01"),
    new DecorativeItem("", "tresor02", new Position(9, 4), "Coffre", "", "tresor02"),
    new DecorativeItem("", "tresor01", new Position(11, 4), "Coffre", "", "tresor01"),
    new DecorativeItem("", "tresor02", new Position(11, 5), "Coffre", "", "tresor02"),

    new PickableItem("cleRouge", "cle", new Position(18, 3), () => {
    }, "Une cle Rouge", "appuyer sur T pour prendre", "cleRed"),

    //------------------------------------


    // --------------------------------------------------------
    // Cuisine reserve


    new DecorativeItem("", "tonneau", new Position(20, 6), "Tonneau", "", "tonneau"),
    new DecorativeItem("", "tonneau", new Position(21, 6), "Tonneau", "", "tonneau"),
    new DecorativeItem("", "tonneau", new Position(22, 6), "Tonneau", "", "tonneau"),
    new DecorativeItem("", "tonneau", new Position(20, 8), "Tonneau", "", "tonneau"),
    new DecorativeItem("", "tonneau", new Position(21, 8), "Tonneau", "", "tonneau"),
    new DecorativeItem("", "tonneau", new Position(22, 8), "Tonneau", "", "tonneau"),

    new DecorativeItem("", "tonneau", new Position(20, 4), "Tonneau", "", "tonneau"),
    new DecorativeItem("", "tonneau", new Position(20, 3), "Tonneau", "", "tonneau"),
    new DecorativeItem("", "tonneau", new Position(21, 3), "Tonneau", "", "tonneau"),


    new DoorItem("portesimple", "Porte", new Position(26, 11), "Porte", "", "porteh", undefined
    ),
    new DoorItem("portesimple", "Porte", new Position(23, 7), "Porte", "", "portev", undefined
    ),
    new DoorItem("portesimple", "Porte", new Position(23, 4), "Porte", "", "portev", undefined
    ),

    // --------------------------------------------------------


    // entre chateau

    new DecorativeItem("infoChateau", "Information", new Position(23, 32), "panneau", "", "panneau",
        new ModalTemplate("Chateau d'iRule", "panneau", "Bienvenue au Dark iRule! Soyez prévenus, si vous y pénétrez, vous vous y risquez! Le maitre incontesté Browser, le méchant navigateur ainsi que ses fidèles sous fifres I'x et Cess vous chasseront sans cesse!")),


    new PNJItem("Yanok", "Yanok", new Position(26, 22), 10, 3, 1, (stateContext) => {
    }, "niak", "", "troll", new ModalTemplate("Yanok", "troll", "Team Fayos au bouloss")),

    new DecorativeItem("", "chandelier", new Position(24, 19), "chandelier", "", "feu"),
    new DecorativeItem("", "chandelier", new Position(28, 19), "chandelier", "", "feu"),
    new DecorativeItem("", "chandelier", new Position(24, 16), "chandelier", "", "feu"),
    new DecorativeItem("", "chandelier", new Position(28, 16), "chandelier", "", "feu"),

    new DoorItem("porteBleu", "Porte Bleu", new Position(26, 30), "Porte Bleu", "", "prisonBlue", "cleBleu"),

    // --------




    new PickableItem("epee", "Epee", new Position(77, 10), (player) => player.attack += 3, "Epee Magique augmentant l'attaque +3", "appuyer sur T pour prendre", "raresword"),
    new PickableItem("bouclier", "bouclier", new Position(77, 13), (player) => player.defense += 5, "Bouclier De Ragnar, +5 en defense", "appuyer sur T pour prendre", "bouclier"),






    // village ecurie
    new PickableItem("cleBleu", "cle", new Position(123, 5), () => {
    }, "Une cle Bleu", "appuyer sur T pour prendre", "cleBlue"),
    // --------------------------------------------------------

    /*
    new PickableItem("redStone", "Red Stone", new Position(25, 13), () => {
    }, "Diamant rendant insensible à la chaleur", "appuyer sur T pour prendre", "gem"),

*/

    //new ComsumableItem("poutionsoin01 ", "Potion", new Position(16, 16), () => gameState.player.heal(15), "Potion de soin +15", "appuyer sur T pour Boire", "potion"),


    new TrapItem("piege001",
        "trapp",
        new Position(11, 10),

        "trapp",
        "Aïe",
        "piege",
        () => {
            gameState.player.takeCriticalDamage(10);
            playSound(SoundType.PIEGE);
        },
        true, "collier"),


    // marecage
    new UsableItem("TeleportVersMarecage", "Vers Marecage", new Position(124, 23), () => {
        movePlayerToPositionAndMap(0, 40, "marecage");
        playSound(SoundType.JUMP)
    }, "Vers le marécage", "appuyer sur T pour entrer dans le marécage", "vortex"),

    new DecorativeItem("informationMarecage", "Information", new Position(120, 22), "panneau", "", "panneau",
        new ModalTemplate("Marécage Passec", "panneau", "Voici le marécage Passec, le dernier repaire d'une race de serpent vorace. Nombreux sont les villageois qui ont disparu dans ce marécage.\n\n" +
            " Homage aux disparus\n" +
            " * Gaspar le maraicher\n" +
            " * René la taupe\n" +
            " * Roger le gardien du la grotte au sud\n" +
            " \n\nAttention! Les serpents avalent tout et n'importe quoi!")),

    new PNJItem("Dame", "Dame Damdeo", new Position(117, 21), 5, 5, 1, () => {

    }, "", "", "elfe", new ModalTemplate("Dame Damdeo", "elfe", "Pour rentrer dans ce marécage, il te faudra aller dans l'eau, Je possédais une gemme magique me permettant de marcher sur l'eau, mais une chèvre me la prise...\n" +
        "Et comme le roi a envoyé toutes les chèvres sur une île...\n" +
        " Peut-être qu'un bateau au port du château peut vous y emmener!")),

    //---------------------------------

    // GROTTE
    new UsableItem("vortexToLabyrintheMAP", "vers le labyrinthe", new Position(112, 30), () => {
        movePlayerToPositionAndMap(8, 10, "labyrinthe");
        playSound(SoundType.JUMP)
    }, "Trappe d'accès", "appuyer sur T pour descendre dans le labyrinthe", "trapp"),


    new DecorativeItem("infoGrotte", "Information", new Position(113, 26), "panneau", "", "panneau",
        new ModalTemplate("Grotte", "panneau", " Accès interdit aux néophytes !")),

    new PNJItem("gardienDeLaTrapLabyrinthe", "La Poisse", new Position(111, 29), 15, 5, 1, () => {

    }, "", "", "ogre02", new ModalTemplate("La Poisse", "ogre02", "Ca fait longtemps que je n'avais pas vu une tête vivante... " +
        "Je m'appelle La Poisse. Je suis la pour garder l'accès du labyrinthe maudit et prévenir les aventuriers des dangers d'y pénétrer. Mais j'en ai ma claque donc si tu veux te faire tuer libre à toi.\n\n\n" +
        "Mais si tu veux vivre, J'ai entendu dire qu'un prisonnier du donjon possédait un médaillon permettant la détection des dangers cachés. Je pense qu'il faudrait mieux descendre la dedans bien équipé.\nJe dis ca, je dis rien!")),

    new DoorItem("porteJaune01", "Porte", new Position(111, 27), "Porte", "", "prisonYellow", "cleJaune"
    ),

    // ---------------------------

    // Donjon
    new UsableItem("cm6v5vbc4000ovs633vgd1cdb", "Vers le sous sol", new Position(31, 3), () => {
        movePlayerToPositionAndMap(23, 26, "castelm01");// 18 / 14
    }, "Trappe d'accès", "appuyer sur T pour descendre dans les prisons du château", "trapp"),
// ---------------------------


    // port

    new UsableItem("moveToIleDeserte", "vers ile ", new Position(46, 20), () => {
        movePlayerToPositionAndMap(5, 21, "ile");
        playSound(SoundType.VOYAGE)
    }, "Bateau", "appuyer sur T pour voyager vers l'ile aux chèvres", "boat01"),
    new UsableItem("moveToIleDeserte", "vers ile ", new Position(46, 21), () => {
        movePlayerToPositionAndMap(5, 21, "ile");
        playSound(SoundType.VOYAGE)
    }, "Bateau", "appuyer sur T pour voyager vers l'ile aux chèvres", "boat02"),
    new UsableItem("moveToIleDeserte", "vers ile ", new Position(46, 22), () => {
        movePlayerToPositionAndMap(5, 21, "ile");
        playSound(SoundType.VOYAGE)
    }, "Bateau", "appuyer sur T pour voyager vers l'île aux chèvres", "boat03"),

    // ----------


    // croisement
    new DecorativeItem("cm6ux31s6000nvs63zvk1aj1s", "Information", new Position(82, 29), "panneau", "", "panneau",
        new ModalTemplate("DEVQUEST", "panneau", "Bienvenue dans cette quête, aventurier aventureux. Ne fait confiance à personne dans ce monde. Les dieux qui l'ont créé sont aussi fous qu'ils sont incompétents. Mais qui sait, une recompense est peut-être au bout de cette aventure!")),

    // ----------



    // Village
    new PNJItem("Shamin", "Shamin", new Position(100, 15), 7, 15, 2, (stateContext) => {
        stateContext.mapStates[stateContext.currentMap].items.addItem(new ComsumableItem("cm6ul464y000mvs630qlpu3ik", "Potion", new Position(13, 10), () => gameState.player.heal(15), "Potion de soin +15", "", "potion"),)
    }, "wizard", "", "wizard", new ModalTemplate("Shamin", "wizard", "Bienvenue sur Astenia jeune aventurier! Cette ville connait une histoire sombre en cette époque. Notre princesse L'IA s'est faite capturer par Browser, le maître du château.\n" +
        "Aidez-nous à sauver notre princesse pour restaurer l'équilibre de notre ville!\n" +
        "Il me semble que le palefrenier cache une clef du château. Il doit être dans son écurie au nord est!")),

    new PNJItem("Grodor", "Grodor", new Position(81, 11), 12, 5, 1, (stateContext) => {

        }, "wizard",
        "",
        "ogre01",
        new ModalTemplate("Grodor", "ogre01", "Gnufur , Ferum dakiki...  Retro pedalo.... GRONCOLUPUK ! ")),

    // ------


    new DecorativeItem("464646456513", "tonneau", new Position(56, 17), "Tonneau", "", "tonneau"),
    new DecorativeItem("4646464sds56513", "tonneau", new Position(37, 18), "Tonneau", "", "tonneau"),
    new DecorativeItem("sd", "tonneau", new Position(38, 18), "Tonneau", "", "tonneau"),
    new DecorativeItem("46dsds646456513", "tonneau", new Position(37, 19), "Tonneau", "", "tonneau"),

    new DecorativeItem("", "tonneau", new Position(38, 21), "Tonneau", "", "tonneau"),
    new DecorativeItem("", "tonneau", new Position(39, 21), "Tonneau", "", "tonneau"),
    new DecorativeItem("", "tonneau", new Position(40, 21), "Tonneau", "", "tonneau"),
    new DecorativeItem("", "tonneau", new Position(41, 21), "Tonneau", "", "tonneau"),

    new DecorativeItem("", "tonneau", new Position(41, 19), "Tonneau", "", "tonneau"),




    new DecorativeItem("biblio01", "biblio", new Position(96, 13), "", "", "bibliotheque"),
    new DecorativeItem("dfsfds", "tonneau", new Position(102, 14), "Tonneau", "", "tonneau"),
    new DecorativeItem("biblio02", "biblio", new Position(97, 13), "", "", "bibliotheque"),
    new DecorativeItem("table01", "biblio", new Position(98, 15), "", "", "table01"),
    new DecorativeItem("chair01", "biblio", new Position(97, 15), "", "", "chair01"),
    new DecorativeItem("table02", "biblio", new Position(90, 15), "", "", "table01"),
    new DecorativeItem("table03", "biblio", new Position(78, 12), "", "", "table01"),
    new DecorativeItem("table04", "biblio", new Position(95, 7), "", "", "table01"),


]