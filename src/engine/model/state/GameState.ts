import { PlayerState } from "./PlayerState.ts";
import { ViewportState } from "./ViewportState.ts";
import { MapState } from "./MapState.ts";
import { MainMenuState } from "./menu/MainMenuState.ts";
import { InventoryMenuState } from "./menu/InventoryMenuState.ts";
import { MenuState } from "./menu/MenuState.ts";
import { HelpMenuState } from "./menu/HelpMenuState.ts";

export class GameState {
  public player: PlayerState;
  public currentMap: string;
  public viewport: ViewportState;
  public mapStates: Record<string, MapState>;
  public view: viewEnum = viewEnum.MAINMENU;
  public isOnMap: boolean = true;
  public openMenu: boolean = false;
  public contentMenu: any = undefined;
  public menusStates: Record<string, MenuState>;
  public startTime: Date;
  public time: number;

  constructor(
    player: PlayerState,
    viewport: ViewportState,
    currentMap: string,
    mapStates: Record<string, MapState>,
  ) {
    this.player = player;
    this.viewport = viewport;
    this.currentMap = currentMap;
    this.mapStates = mapStates;
    this.menusStates = {
      mainMenu: new MainMenuState(),
      inventoryMenu: new InventoryMenuState(),
      [viewEnum.HELPMENU]: new HelpMenuState(),
    };
  }

  getCurrentView() {
    return this.menusStates[this.view];
  }
}

export enum viewEnum {
  MAP,
  MAINMENU = "mainMenu",
  INVENTORYMENU = "inventoryMenu",
  HELPMENU = "helpMenu",
  DIALOGUEMENU = "dialogueMenu",
}
