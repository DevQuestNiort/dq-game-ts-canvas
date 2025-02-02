import {MapConfiguration} from "./MapConfiguration.ts";
import {PlayerConfiguration} from "./PlayerConfiguration.ts";
import {ViewportConfiguration} from "./ViewportConfiguration.ts";

export class GameConfiguration {
    public player: PlayerConfiguration;
    public maps: Record<string, MapConfiguration>;
    public initialMap: string;
    public viewport: ViewportConfiguration;

    constructor(maps: Record<string, MapConfiguration>, initialMap: string, player: PlayerConfiguration, viewport: ViewportConfiguration) {
        this.maps = maps;
        this.initialMap = initialMap;
        this.player = player;
        this.viewport = viewport;
    }
}