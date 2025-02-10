import {init as initGameEngine, run} from "./engine/GameEngine.ts";
import {GameConfiguration} from "./engine/model/configuration/GameConfiguration.ts";
import asteniaConfiguration from "./levels/astenia/astenia.ts";
import castelm01Configuration  from './levels/castelm01/castelm01.ts'
import endConfifuration from './levels/end/end.ts'
import {Orientation} from "./engine/model/Orientation.ts";
import {PlayerConfiguration} from "./engine/model/configuration/PlayerConfiguration.ts";
import {PlayerState} from "./engine/model/state/PlayerState.ts";
import {Position} from "./engine/model/Position.ts";
import {ViewportConfiguration} from "./engine/model/configuration/ViewportConfiguration.ts";
import {TwoDimensionalSize} from "./engine/model/TwoDimensionalSize.ts";
import {DeadZone} from "./engine/model/configuration/DeadZone.ts";
import {STABLE_ZONE_SIZE_X, STABLE_ZONE_SIZE_Y, VIEWPORT_SIZE_X, VIEWPORT_SIZE_y} from "./engine/constants.ts";






const vieportSizeX =VIEWPORT_SIZE_X
const vieportSizeY =VIEWPORT_SIZE_y
const stableZoneSizeX  = STABLE_ZONE_SIZE_X
const stableZoneSizeY  =STABLE_ZONE_SIZE_Y
const stableZonedebutZoneX = (vieportSizeX -  stableZoneSizeX) / 2
const stableZonedebutZoneY = (vieportSizeY -  stableZoneSizeY) / 2



window.onload = async function () {
    const mapsConfiguration = {
        astenia: asteniaConfiguration,
        castelm01: castelm01Configuration,
        end: endConfifuration
    };
    const initialMap = "astenia";
    const playerConfiguration = new PlayerConfiguration(
        new PlayerState(new Position(10, 10), Orientation.RIGHT, 3, 2, 25),
        "./assets/player-sprite.png")
    const viewportConfiguration = new ViewportConfiguration(
        new TwoDimensionalSize(vieportSizeX, vieportSizeY),
        new DeadZone(new Position(stableZonedebutZoneX, stableZonedebutZoneY), new TwoDimensionalSize(stableZoneSizeX, stableZoneSizeY)),
        30)
    const configuration = new GameConfiguration(mapsConfiguration, initialMap, playerConfiguration, viewportConfiguration);
    await initGameEngine(configuration);
    console.log("engine created, starting loop");
    run();
}