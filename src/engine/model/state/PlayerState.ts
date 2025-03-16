import { Position } from "../Position.ts";
import { Orientation } from "../Orientation.ts";
import { Items } from "../item/Items.ts";
import { gameState } from "../../GameDataService.ts";
import { playSound, SoundType } from "../../SoundEngine.ts";
import { PickableItem } from "../item/PickableItem.ts";
import { ComsumableItem } from "../item/ComsumableItem.ts";

export class PlayerState {
  /** position sur la grille */
  public position: Position;
  public orientation: Orientation;
  public readonly baseAttack: number;
  public readonly baseDefense: number;
  public attack: number;
  public defense: number;
  public maxLife: number;
  public inventory: Items;

  constructor(
    position: Position,
    orientation: Orientation,
    baseAttack: number,
    baseDefense: number,
    life: number,
  ) {
    this.position = position;
    this.orientation = orientation;
    this.baseAttack = baseAttack;
    this.baseDefense = baseDefense;
    this.attack = baseAttack;
    this.defense = baseDefense;
    this._life = life;
    this.maxLife = life;
    this.inventory = new Items([]);
  }

  private _life: number;

  get life(): number {
    return this._life;
  }

  isDead() {
    return this._life < 1;
  }

  heal(life: number) {
    this._life = this._life + life;
    if (this._life > this.maxLife) {
      this._life = this.maxLife;
    }
  }

  augmenterMaxLife(life: number) {
    this.maxLife = this.maxLife + life;
  }

  takeDamage(damage: number) {
    //console.log("take damage player ", damage);
    let degatToPlayer = damage - gameState.player.defense;
    //console.log("real take damage player ", degatToPlayer);
    if (degatToPlayer < 1) {
      degatToPlayer = 1;
    }
    this._life = this._life - degatToPlayer;
    if (this.isDead()) {
      playSound(SoundType.GAMEOVER);
    }
  }

  takeCriticalDamage(damage: number) {
    //console.log("take Critical damage player ", damage);
    this._life = this._life - damage;
    if (this.isDead()) {
      playSound(SoundType.GAMEOVER);
    }
  }

  takeItem(item: PickableItem) {
    this.inventory.addItem(item);
    this.updateStats();
    playSound(SoundType.PICK);
  }

  consumItem(item: ComsumableItem) {
    item.playerModificator(this);
    playSound(SoundType.PICK);
  }

  /*
    recalcul stat a partir de l'inventaire
     */
  updateStats = () => {
    // recalcul attack, on parcourt les objets pour appliquer les effets
    this.attack = this.baseAttack;
    this.defense = this.baseDefense;
    this.inventory
      .get()
      .map((item) => item as PickableItem)
      .forEach((item) => item.playerModificator(gameState.player));
  };
}
