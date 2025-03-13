import { GameState } from "./model/state/GameState.ts";
import { GameConfiguration } from "./model/configuration/GameConfiguration.ts";

export let gameState: GameState;
export let gameConfiguration: GameConfiguration;
export let canvas: HTMLCanvasElement;
export let canvasContext: CanvasRenderingContext2D;

export const setGameState = (gameSt: GameState): void => {
  gameState = gameSt;
};
export const setGameConfiguration = (gameCfg: GameConfiguration): void => {
  gameConfiguration = gameCfg;
};
export const setCanvas = (cnv: HTMLCanvasElement): void => {
  canvas = cnv;
  canvasContext = canvas.getContext("2d") as CanvasRenderingContext2D;
};

export const getCurrentMap = () => {
  return gameConfiguration.maps[gameState.currentMap];
};
