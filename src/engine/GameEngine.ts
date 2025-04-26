import { GameConfiguration } from "./model/configuration/GameConfiguration.ts";
import {
  draw,
  init as initGraphicsEngine,
  notifyViewChanged,
  notifyViewportChanged,
} from "./GraphicsEngine.ts";
import { GameState, viewEnum } from "./model/state/GameState.ts";
import { PlayerState } from "./model/state/PlayerState.ts";
import { ViewportState } from "./model/state/ViewportState.ts";
import { Position } from "./model/Position.ts";
import { MapState } from "./model/state/MapState.ts";
import { centerViewportOnPlayer } from "./ViewportManager.ts";
import { init as initAssetLibrary } from "./AssetLibrary.ts";
import {
  gameConfiguration,
  gameState,
  setCanvas,
  setGameConfiguration,
  setGameState,
} from "./GameDataService.ts";
import {
  actionKeyPressed,
  downKeyPressed,
  interactKeyPressed,
  inventoryKeyPressed,
  leftKeyPressed,
  pickUpKeyPressed,
  rightKeyPressed,
  upKeyPressed,
} from "./PlayerManager.ts";
import {
  BooleanOption,
  loadOptionsFromLocalStorage,
  switchOption,
} from "./OptionManager.ts";

export const init = async (gameCfg: GameConfiguration) => {
  setCanvas(document.getElementById("gameCanvas") as HTMLCanvasElement);
  setGameConfiguration(gameCfg);
  setGameState(
    buildInitialGameState(
      gameConfiguration.player.initialState,
      gameConfiguration.initialMap,
    ),
  );
  loadOptionsFromLocalStorage();
  await initAssetLibrary();
  await initGraphicsEngine();
  bindKeys();
  centerViewportOnPlayer();
};

const buildInitialGameState: (
  initialPlayerState: PlayerState,
  initialMap: string,
) => GameState = (initialPlayerState: PlayerState, initialMap: string) => {
  const mapStates = Object.entries(gameConfiguration.maps)
    .map(([name, map]) => {
      return {
        name: name,
        mapState: new MapState(map.items),
      };
    })
    .reduce((acc: Record<string, MapState>, map) => {
      acc[map.name] = map.mapState;
      return acc;
    }, {});

  return new GameState(
    initialPlayerState,
    new ViewportState(new Position(0, 0)),
    initialMap,
    mapStates,
  );
};

export function newGame() {
  gameState.view = viewEnum.MAP;
  gameState.startTime = new Date();
  notifyViewChanged();
  notifyViewportChanged();
}

const bindKeys = () => {
  addEventListener("keydown", (evt) => {
    evt.preventDefault();
    if (evt.ctrlKey && evt.shiftKey && evt.key.toLowerCase() === "a") {
      switchOption(BooleanOption.DEBUG_MODE);
      notifyViewportChanged();
    }
    if (gameState.player.isDead()) {
      return;
    }

    if (gameState.view !== viewEnum.MAP) {
      gameState.getCurrentView().build(evt);
      notifyViewChanged();
    }

    if (gameState.view === viewEnum.MAP) {
      switch (evt.key) {
        case "ArrowUp":
        case "z":
        case "Z":
          upKeyPressed();
          break;
        case "ArrowDown":
        case "s":
        case "S":
          downKeyPressed();
          break;
        case "ArrowLeft":
        case "q":
        case "Q":
          leftKeyPressed();
          break;
        case "ArrowRight":
        case "d":
        case "D":
          rightKeyPressed();
          break;
        case "f":
        case "F":
          actionKeyPressed();
          break;
        case "t":
        case "T":
          pickUpKeyPressed();
          break;
        case "m":
        case "M":
          switchOption(BooleanOption.SOUND_MUTED);
          break;
        case "i":
        case "I":
          inventoryKeyPressed();
          break;
        case "h":
        case "H":
          gameState.view = viewEnum.HELPMENU;
          notifyViewportChanged();
          break;
        case "r":
        case "R":
          interactKeyPressed();
          break;
      }
    }
  });
};

export const run = async () => {
  draw();
};
