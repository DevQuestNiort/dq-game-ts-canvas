import {UsableItem} from "../../engine/model/item/UsableItem.ts";
import {Position} from "../../engine/model/Position.ts";
import {movePlayerToPositionAndMap} from "../../engine/PlayerManager.ts";
import {playSound, SoundType} from "../../engine/SoundEngine.ts";
import {TrapItem} from "../../engine/model/item/TrapItem.ts";
import {gameState} from "../../engine/GameDataService.ts";
import {DecorativeItem} from "../../engine/model/item/DecorativeItem.ts";
import {ModalTemplate} from "../../engine/model/modalTemplate/ModalTemplate.ts";

export const items = [
    new UsableItem("cm6uiaf5h000jvs643dm9oyj9", "Vortex", new Position(48, 40), () => {
        movePlayerToPositionAndMap(29, 30, "boss");
        playSound(SoundType.JUMP)
    }, "Vortex dimensionel", "Press T pour entrer dans le vortex", "vortex"),


    new TrapItem("piege001",
        "trapp",
        new Position(11, 17),

        "trapp",
        "Aie",
        "piege",
        () => {
            gameState.player.takeCriticalDamage(4);
            playSound(SoundType.PIEGE);
        },
        true,"collier"),

    new TrapItem("piege002",
        "trapp",
        new Position(33, 15),

        "trapp",
        "Aie",
        "piege",
        () => {
            gameState.player.takeCriticalDamage(4);
            playSound(SoundType.PIEGE);
        },
        true,"collier"),

    new TrapItem("piege003",
        "trapp",
        new Position(35, 16),

        "trapp",
        "Aie",
        "piege",
        () => {
            gameState.player.takeCriticalDamage(4);
            playSound(SoundType.PIEGE);
        },
        true,"collier"),

    new TrapItem("piege004",
        "trapp",
        new Position(41, 39),

        "trapp",
        "Aie",
        "piege",
        () => {
            gameState.player.takeCriticalDamage(4);
            playSound(SoundType.PIEGE);
        },
        true,"collier"),
    new TrapItem("piege005",
        "trapp",
        new Position(19, 23),

        "trapp",
        "Aie",
        "piege",
        () => {
            gameState.player.takeCriticalDamage(4);
            playSound(SoundType.PIEGE);
        },
        true,"collier"),
    new TrapItem("piege006",
        "trapp",
        new Position(28, 37),

        "trapp",
        "Aie",
        "piege",
        () => {
            gameState.player.takeCriticalDamage(4);
            playSound(SoundType.PIEGE);
        },
        true,"collier"),
    new TrapItem("piege007",
        "trapp",
        new Position(32, 29),

        "trapp",
        "Aie",
        "piege",
        () => {
            gameState.player.takeCriticalDamage(4);
            playSound(SoundType.PIEGE);
        },
        true,"collier"),





]