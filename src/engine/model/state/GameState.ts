import {PlayerState} from "./PlayerState.ts";
import {ViewportState} from "./ViewportState.ts";

export class GameState {
    public player: PlayerState;
    public currentMap: string;
    public viewport: ViewportState;


    constructor(player: PlayerState, viewport: ViewportState, currentMap: string) {
        this.player = player;
        this.viewport = viewport;
        this.currentMap = currentMap;
    }
}