import { Orientation } from "./model/Orientation.ts";
import { gameState, getCurrentMap } from "./GameDataService.ts";
import { notifyChangedTile, notifyViewportChanged } from "./GraphicsEngine.ts";
import { Position } from "./model/Position.ts";
import {
  centerViewportOnPlayer,
  computeViewportPosition,
} from "./ViewportManager.ts";
import {
  getItemAtPlayerPosition,
  getItemAtPosition,
  getItemInFrontOfPlayer,
  isTileAccessible,
  isTileIsNotObstructed,
  removeItemFromCurrentMapByUid,
} from "./MapManager.ts";
import { PickableItem } from "./model/item/PickableItem.ts";
import { ComsumableItem } from "./model/item/ComsumableItem.ts";
import { UsableItem } from "./model/item/UsableItem.ts";
import { PNJItem } from "./model/item/PNJItem.ts";
import { playSound, SoundType } from "./SoundEngine.ts";
import { viewEnum } from "./model/state/GameState.ts";
import { DialogueMenuState } from "./model/state/menu/DialogueMenuState.ts";
import { AbstractTalkablePlayerItem } from "./model/item/AbstractTalkablePlayerItem.ts";
import { TrapItem } from "./model/item/TrapItem.ts";
import { BooleanOption, getBooleanOption } from "./OptionManager.ts";
import { notifyItemAtPlayerPositionChanged } from "./DialogPainter.ts";

let lastMoveDate: number = Date.now();

export const upKeyPressed = () => {
  rotatePlayer(Orientation.UP);
  movePlayer(0, -1);
};

export const downKeyPressed = () => {
  rotatePlayer(Orientation.DOWN);
  movePlayer(0, 1);
};

export const leftKeyPressed = () => {
  rotatePlayer(Orientation.LEFT);
  movePlayer(-1, 0);
};

export const rightKeyPressed = () => {
  rotatePlayer(Orientation.RIGHT);
  movePlayer(1, 0);
};

export const actionKeyPressed = () => {
  const itemInFrontOfPlayer = getItemInFrontOfPlayer();
  if (itemInFrontOfPlayer && itemInFrontOfPlayer instanceof PNJItem) {
   // console.log("j'attaque'" + itemInFrontOfPlayer.name);
    attack(itemInFrontOfPlayer);
  }
};

export const interactKeyPressed = () => {
  const itemInFrontOfPlayer = getItemInFrontOfPlayer();
  if (
    itemInFrontOfPlayer &&
    itemInFrontOfPlayer instanceof AbstractTalkablePlayerItem
  ) {
    //console.log("j'" + itemInFrontOfPlayer.name);
    interact(itemInFrontOfPlayer);
  }
};

export const inventoryKeyPressed = () => {
  gameState.view = viewEnum.INVENTORYMENU;
  notifyViewportChanged();
};

export const pickUpKeyPressed = () => {
  const itemAtPlayerPosition = getItemAtPlayerPosition();

  if (itemAtPlayerPosition && itemAtPlayerPosition instanceof PickableItem) {
    //console.log("je ramasse");
    addItemToInventory(itemAtPlayerPosition);
  } else if (
    itemAtPlayerPosition &&
    itemAtPlayerPosition instanceof ComsumableItem
  ) {
    //console.log("je Consomme");
    comsumnItem(itemAtPlayerPosition);
  } else if (
    itemAtPlayerPosition &&
    itemAtPlayerPosition instanceof UsableItem
  ) {
    //console.log("j utilise");
    useItem(itemAtPlayerPosition);
  }
};

const attack = (pnj: PNJItem) => {
  pnj.takeDamage(gameState.player.attack);

  if (pnj.life < 1) {
  } else {
    gameState.player.takeDamage(pnj.attack);
  }
  notifyChangedTile(pnj.position);
  playSound(SoundType.ATTACK);
};

function interact(itemInFrontOfPlayer: AbstractTalkablePlayerItem) {
  if (itemInFrontOfPlayer instanceof PNJItem) {
    if (itemInFrontOfPlayer.underAttack) {
      return;
    }
  }
  if (itemInFrontOfPlayer.interaction) {
    const dialogue = new DialogueMenuState();
    dialogue.setTemplate(itemInFrontOfPlayer.interaction);
    gameState.menusStates[viewEnum.DIALOGUEMENU] = dialogue;
    gameState.view = viewEnum.DIALOGUEMENU;

    notifyViewportChanged();
  }
}

const addItemToInventory = (item: PickableItem) => {
  gameState.player.takeItem(item);
  removeItemFromCurrentMapByUid(item.uid);
  notifyViewportChanged();
};

const comsumnItem = (item: ComsumableItem) => {
  gameState.player.consumItem(item);
  removeItemFromCurrentMapByUid(item.uid);
  notifyViewportChanged();
};

const useItem = (item: UsableItem) => {
  //console.log("useItem");
  item.playerModificator(gameState.player);
  computeViewportPosition();
  notifyViewportChanged();
};

export const rotatePlayer = (orientation: Orientation) => {
  gameState.player.orientation = orientation;
  notifyChangedTile(gameState.player.position);
};

export const movePlayerToPositionAndMap = (
  playerX: number,
  playerY: number,
  mapName: string,
) => {
  gameState.player.position.x = playerX;
  gameState.player.position.y = playerY;
  gameState.currentMap = mapName;
  centerViewportOnPlayer();
  // puis je aller en playerX playerY
  notifyViewportChanged(); // Revoir
};

export const movePlayerToPosition = (playerX: number, playerY: number) => {
  // puis je aller en playerX playerY
  if (
    (isTileAccessible(playerX, playerY) &&
      isTileIsNotObstructed(playerX, playerY)) ||
    getBooleanOption(BooleanOption.DEBUG_MODE)
  ) {
    const oldPosition = structuredClone(gameState.player.position);

    gameState.player.position.x = playerX;
    gameState.player.position.y = playerY;

    if (getItemAtPosition(oldPosition)) {
      notifyViewportChanged();
    }

    notifyChangedTile(oldPosition);
    const fog = getCurrentMap().fog;
    if (fog === undefined) {
      notifyChangedTile(new Position(playerX, playerY));
    } else {
      for (
        let x = playerX - fog.distance - 1;
        x <= playerX + fog.distance + 1;
        x++
      ) {
        for (
          let y = playerY - fog.distance - 1;
          y <= playerY + fog.distance + 1;
          y++
        ) {
          if (
            x >= 0 &&
            x < getCurrentMap().grid.getWidth() &&
            y >= 0 &&
            y < getCurrentMap().grid.getHeight()
          ) {
            notifyChangedTile(new Position(x, y));
          }
        }
      }
    }

    computeViewportPosition();
    return true;
  }

  return false;
};

export const movePlayer = (x: number, y: number) => {
  if (!getBooleanOption(BooleanOption.DEBUG_MODE)) {
    if (lastMoveDate + 80 > Date.now()) {
      return;
    }
  }
  let playerX = gameState.player.position.x + x;
  if (playerX < 0) {
    playerX = 0;
  }
  if (playerX >= getCurrentMap().grid.getWidth()) {
    playerX = getCurrentMap().grid.getWidth() - 1;
  }

  let playerY = gameState.player.position.y + y;
  if (playerY < 0) {
    playerY = 0;
  }
  if (playerY >= getCurrentMap().grid.getHeight()) {
    playerY = getCurrentMap().grid.getHeight() - 1;
  }

  const boolean = movePlayerToPosition(playerX, playerY);
  if (boolean) {
    const item = getItemAtPlayerPosition();
    if (item && item instanceof TrapItem) {
      item.activerPiege();
    }
    playSound(SoundType.MOVE);
  } else {
    playSound(SoundType.ERROR);
  }

  lastMoveDate = Date.now();
  notifyItemAtPlayerPositionChanged();
};
