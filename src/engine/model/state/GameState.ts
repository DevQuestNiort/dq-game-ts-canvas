import {PlayerState} from "./PlayerState.ts";
import {ViewportState} from "./ViewportState.ts";
import {MapState} from "./MapState.ts";

export class GameState {
    public player: PlayerState;
    public currentMap: string;
    public viewport: ViewportState;
    public mapStates: Record<string, MapState>;



    constructor(player: PlayerState, viewport: ViewportState, currentMap: string, mapStates: Record<string, MapState>) {
        this.player = player;
        this.viewport = viewport;
        this.currentMap = currentMap;
        this.mapStates = mapStates;
    }
}