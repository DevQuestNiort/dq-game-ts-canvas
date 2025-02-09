import {PlayerState} from "./PlayerState.ts";
import {ViewportState} from "./ViewportState.ts";
import {MapState} from "./MapState.ts";
import {Options} from "./Options.ts";

export class GameState {
    public player: PlayerState;
    public currentMap: string;
    public viewport: ViewportState;
    public mapStates: Record<string, MapState>;
    public isOnMap : boolean = true;
    public options: Options
    public openMenu: boolean = false
    public contentMenu : any = undefined



    constructor(player: PlayerState, viewport: ViewportState, currentMap: string, mapStates: Record<string, MapState>,options: Options) {
        this.player = player;
        this.viewport = viewport;
        this.currentMap = currentMap;
        this.mapStates = mapStates;
        this.options = options
    }
}