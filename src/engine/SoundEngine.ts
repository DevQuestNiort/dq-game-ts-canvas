import {zzfx} from "zzfx";
import {BooleanOption, getBooleanOption} from "./OptionManager.ts";

export const playSound = (id: string) => {

    if (!getBooleanOption(BooleanOption.SOUND_MUTED)) {
        switch (id) {
            case "pick" :
                soundPick()
                break;
            case "attack" :
                soundAttack()
                break
            case "move" :
                soundMove()
                break
            case "error" :
                soundError()
                break
            case "gameover" :
                soundGameOver()
                break
            case "jump" :
                soundJump()
                break
            case "piege" :
                soundPick()
                break
            case "kill" :
                soundKillEnnemy()
                break
        }
    }
}

export const soundPick = () => zzfx(2.2, 0.05, 360, 0.01, 0.01, 0.07, 0, 2.1, 0, -3, 158, 0.09, 0, 0, 0, 0, 0.05, 0.56, 0, 0, 0,);
export const soundAttack = () => zzfx(1, 0.05, 474, 0.03, 0.01, 0.14, 4, 1.2, 0, 1, 0, -0.01, 0, 1.9, 0, 0.1, 0, 0.93, 0.02, 0.25, 0,);
export const soundMove = () => zzfx(1.4, 0.05, 120, 0, 0.03, 0.01, 0, 1.6, -6, 11, 0, 0, 0, 0, 130, 0, 0, 0.72, 0.03, 0.22, 0,);
export const soundError = () => zzfx(1, 0.05, 98, 0.02, 0.01, 0.13, 2, 3.4, 0, 0, 0, 0, 0, 1.2, 0, 0.1, 0, 0.64, 0.01, 0, -1860,);
export const soundKillEnnemy = () => zzfx(0.9, 0.05, 79, 0.03, 0.04, 0.46, 3, 2, 5, -1, 0, 0, 0, 1.1, 0, 0.3, 0, 0.39, 0.06, 0.46, -3453,);
export const soundGameOver = () => zzfx(2.1, 0.05, 52, 0.03, 0.28, 0.46, 1, 0.1, -0.2, 0, 0, 0, 0.06, 0.9, 0, 0.2, 0.37, 0.49, 0.21, 0, 0,);
export const soundJump = () => zzfx(0.6, 0.05, 235, 0.05, 0.09, 0.19, 1, 0.3, 9, 24, 0, 0, 0, 0.1, 0, 0, 0.03, 0.55, 0.03, 0, 369,);
export const soundPiege = () => zzfx(0.8, 0.05, 283, 0, 0.17, 0.16, 2, 3.3, -15, 2, 0, 0, 0, 0, 0, 0.1, 0.2, 0.66, 0.15, 0, 597,);