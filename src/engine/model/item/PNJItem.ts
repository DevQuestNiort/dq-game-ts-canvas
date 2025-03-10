import {Position} from "../Position.ts";
import {ItemType} from "./Item.ts";
import {GameState} from "../state/GameState.ts";
import {AbstractTalkablePlayerItem} from "./AbstractTalkablePlayerItem.ts";
import {ModalTemplate} from "../modalTemplate/ModalTemplate.ts";
import {gameState} from "../../GameDataService.ts";
import {playSound, SoundType} from "../../SoundEngine.ts";

export class PNJItem extends AbstractTalkablePlayerItem {

    life: number
    attack: number
    defense: number
    underAttack : boolean = false

    onDeath: (stateContext : GameState) => void;


    constructor(uid: string, name: string, position: Position, life: number, attack: number, defense: number, onDeath: (stateContext : GameState) => void , description: string, instructions: string, image: string, interaction: ModalTemplate | undefined = undefined
    ) {
        super(uid, name, ItemType.PNJ, position, description, instructions, image,interaction);
        this.life = life
        this.attack = attack
        this.defense = defense
        this.onDeath = onDeath
    }


    takeDamage(damage :number){
        let degatToPnj = (damage - this.defense)
        this.underAttack=true
        if (degatToPnj < 1) {
            degatToPnj = 1
        }
        this.life = this.life - degatToPnj
        if (this.life < 1) {
            console.log('death of ', this.name)
            this.death(gameState)
            playSound(SoundType.KILL)
        }

    }


    death(stateContext : GameState){
        stateContext.mapStates[stateContext.currentMap].items.removeItemByUid(this.uid)
        this.onDeath(stateContext);

    }

}