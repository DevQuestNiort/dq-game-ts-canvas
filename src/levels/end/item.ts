import {UsableItem} from "../../engine/model/item/UsableItem.ts";
import {Position} from "../../engine/model/Position.ts";
import {movePlayerToPositionAndMap} from "../../engine/PlayerManager.ts";
import {playSound, SoundType} from "../../engine/SoundEngine.ts";
import {DecorativeItem} from "../../engine/model/item/DecorativeItem.ts";
import {ModalTemplate} from "../../engine/model/modalTemplate/ModalTemplate.ts";

const humanReadableTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString(10).padStart(2, "0")}`;
};

export const items = [new UsableItem("fsdfsfdsfdsfs", "Vortex", new Position(28, 11), () => {
    movePlayerToPositionAndMap(20, 20, "astenia"); // 30, 13
    playSound(SoundType.JUMP);
}, "Vortex dimensionnel", "appuyer sur T pour entrer dans le vortex", "vortex",),

    new DecorativeItem("fgddsfdsffg", "quest", new Position(27, 10), "", "Clique sur R pour lire", "quest", new ModalTemplate("Too late", "quest", (gameState) => `Félicitations d'être parvenu jusqu'ici! Cependant la récompense unique a déjà été trouvée par un aventurier. N'hésites pas poster ton temps sur les réseaux sociaux en taguant le DevQuest, comme preuve et reconnaissance de ta victoire!\n\nTemps: ${humanReadableTime(gameState.time)}`),),];
