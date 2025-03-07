import {PlayerState} from "./PlayerState.ts";
import {ViewportState} from "./ViewportState.ts";
import {MapState} from "./MapState.ts";
import {MainMenuState} from "./MainMenuState.ts";

export class GameState {
    public player: PlayerState;
    public currentMap: string;
    public viewport: ViewportState;
    public mapStates: Record<string, MapState>;
    public view:viewEnum = viewEnum.MAINMENU
    public isOnMap: boolean = true;
    public openMenu: boolean = false
    public contentMenu: any = undefined
    public mainmenu : MainMenuState

    constructor(player: PlayerState, viewport: ViewportState, currentMap: string, mapStates: Record<string, MapState>,menu : MainMenuState) {
        this.player = player;
        this.viewport = viewport;
        this.currentMap = currentMap;
        this.mapStates = mapStates;
        this.mainmenu = menu
    }
}

export enum viewEnum {
    MAP,
    MAINMENU

}
