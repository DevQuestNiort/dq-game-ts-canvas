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
    new TrapItem("cm83kk24v0000iw63uqjwdypx",
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

    new TrapItem("cm83kk24w0001iw63hyeget1j",
        "trapp",
        new Position(13, 16),

        "trapp",
        "Aie",
        "piege",
        () => {
            gameState.player.takeCriticalDamage(4);
            playSound(SoundType.PIEGE);
        },
        true,"collier"),

    new TrapItem("cm83kk24x0002iw63nez5e383",
        "trapp",
        new Position(14, 13),

        "trapp",
        "Aie",
        "piege",
        () => {
            gameState.player.takeCriticalDamage(4);
            playSound(SoundType.PIEGE);
        },
        true,"collier"),

    new TrapItem("cm83kk24x0003iw63juzc1vzh",
        "trapp",
        new Position(28, 36),

        "trapp",
        "Aie",
        "piege",
        () => {
            gameState.player.takeCriticalDamage(4);
            playSound(SoundType.PIEGE);
        },
        true,"collier"),

    new TrapItem("cm83kk24x0004iw634g8rw5z6",
        "trapp",
        new Position(42, 26),

        "trapp",
        "Aie",
        "piege",
        () => {
            gameState.player.takeCriticalDamage(4);
            playSound(SoundType.PIEGE);
        },
        true,"collier"),
    new TrapItem("cm83kk24y0005iw63qbjpyvvn",
        "trapp",
        new Position(42, 27),

        "trapp",
        "Aie",
        "piege",
        () => {
            gameState.player.takeCriticalDamage(4);
            playSound(SoundType.PIEGE);
        },
        true,"collier"),
    new TrapItem("cm83kk24y0006iw63yld5gx20",
        "trapp",
        new Position(40, 22),

        "trapp",
        "Aie",
        "piege",
        () => {
            gameState.player.takeCriticalDamage(4);
            playSound(SoundType.PIEGE);
        },
        true,"collier"),
    new TrapItem("cm83kk24y0007iw63r8s3cbyh",
        "trapp",
        new Position(40, 13),

        "trapp",
        "Aie",
        "piege",
        () => {
            gameState.player.takeCriticalDamage(4);
            playSound(SoundType.PIEGE);
        },
        true,"collier"),
    new TrapItem("cm83kk24z0008iw6375hr76ni",
        "trapp",
        new Position(42, 14),

        "trapp",
        "Aie",
        "piege",
        () => {
            gameState.player.takeCriticalDamage(4);
            playSound(SoundType.PIEGE);
        },
        true,"collier"),
    new TrapItem("cm83kk24z0009iw63o3c32xmy",
        "trapp",
        new Position(45, 39),

        "trapp",
        "Aie",
        "piege",
        () => {
            gameState.player.takeCriticalDamage(4);
            playSound(SoundType.PIEGE);
        },
        true,"collier"),
    new TrapItem("cm83kk24z000aiw630t0vzcvq",
        "trapp",
        new Position(41, 24),

        "trapp",
        "Aie",
        "piege",
        () => {
            gameState.player.takeCriticalDamage(4);
            playSound(SoundType.PIEGE);
        },
        true,"collier"),

]