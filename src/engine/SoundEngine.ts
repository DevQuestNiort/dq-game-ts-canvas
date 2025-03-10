import {zzfx} from "zzfx";
import {BooleanOption, getBooleanOption} from "./OptionManager.ts";

export enum SoundType {
    PICK,
    ATTACK,
    MOVE,
    ERROR,
    GAMEOVER,
    JUMP,
    PIEGE,
    KILL,
    VOYAGE,
}

export const playSound = (id: SoundType) => {

    if (!getBooleanOption(BooleanOption.SOUND_MUTED)) {
        switch (id) {
            case SoundType.PICK :
                soundPick()
                break;
            case SoundType.ATTACK :
                soundAttack()
                break
            case SoundType.MOVE :
                soundMove()
                break
            case SoundType.ERROR :
                soundError()
                break
            case SoundType.GAMEOVER :
                soundGameOver()
                break
            case SoundType.JUMP :
                soundJump()
                break
            case SoundType.VOYAGE :
                soundVoyage()
                break
            case SoundType.PIEGE :
                soundPiege()
                break
            case SoundType.KILL :
                soundKillEnnemy()
                break
        }
    }
}

const soundPick = () => zzfx(2.2, 0.05, 360, 0.01, 0.01, 0.07, 0, 2.1, 0, -3, 158, 0.09, 0, 0, 0, 0, 0.05, 0.56, 0, 0, 0,);
const soundAttack = () => zzfx(1, 0.05, 474, 0.03, 0.01, 0.14, 4, 1.2, 0, 1, 0, -0.01, 0, 1.9, 0, 0.1, 0, 0.93, 0.02, 0.25, 0,);
const soundMove = () => zzfx(1.4, 0.05, 120, 0, 0.03, 0.01, 0, 1.6, -6, 11, 0, 0, 0, 0, 130, 0, 0, 0.72, 0.03, 0.22, 0,);
const soundError = () => zzfx(1, 0.05, 98, 0.02, 0.01, 0.13, 2, 3.4, 0, 0, 0, 0, 0, 1.2, 0, 0.1, 0, 0.64, 0.01, 0, -1860,);
const soundKillEnnemy = () => zzfx(0.9, 0.05, 79, 0.03, 0.04, 0.46, 3, 2, 5, -1, 0, 0, 0, 1.1, 0, 0.3, 0, 0.39, 0.06, 0.46, -3453,);
const soundGameOver = () => zzfx(2.1, 0.05, 52, 0.03, 0.28, 0.46, 1, 0.1, -0.2, 0, 0, 0, 0.06, 0.9, 0, 0.2, 0.37, 0.49, 0.21, 0, 0,);
const soundJump = () => zzfx(0.6, 0.05, 235, 0.05, 0.09, 0.19, 1, 0.3, 9, 24, 0, 0, 0, 0.1, 0, 0, 0.03, 0.55, 0.03, 0, 369,);
const soundPiege = () => zzfx(0.8, 0.05, 283, 0, 0.17, 0.16, 2, 3.3, -15, 2, 0, 0, 0, 0, 0, 0.1, 0.2, 0.66, 0.15, 0, 597,);
const soundVoyage = () => zzfx(1,.05,505,.06,.21,.12,1,3.7,4,-87,319,.08,.04,0,.2,0,0,.92,.17,0,0);