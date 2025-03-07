import {init as initGameEngine, run} from "./engine/GameEngine.ts";
import {GameConfiguration} from "./engine/model/configuration/GameConfiguration.ts";


import mapsConfigurations from './levels/index.ts'

import {Orientation} from "./engine/model/Orientation.ts";
import {PlayerConfiguration} from "./engine/model/configuration/PlayerConfiguration.ts";
import {PlayerState} from "./engine/model/state/PlayerState.ts";
import {Position} from "./engine/model/Position.ts";
import {ViewportConfiguration} from "./engine/model/configuration/ViewportConfiguration.ts";
import {TwoDimensionalSize} from "./engine/model/TwoDimensionalSize.ts";
import {DeadZone} from "./engine/model/configuration/DeadZone.ts";
import {STABLE_ZONE_SIZE_X, STABLE_ZONE_SIZE_Y, VIEWPORT_SIZE_X, VIEWPORT_SIZE_Y} from "./engine/constants.ts";

const stableZonePositionX = (VIEWPORT_SIZE_X - STABLE_ZONE_SIZE_X) / 2
const stableZonePositionY = (VIEWPORT_SIZE_Y - STABLE_ZONE_SIZE_Y) / 2

window.onload = async function () {



    console.log("Chargement des maps", mapsConfigurations)
    const initialMap = "astenia";
    const playerConfiguration = new PlayerConfiguration(
        new PlayerState(new Position(10, 10), Orientation.RIGHT, 3, 2, 25),
        "./assets/player-sprite.png")
    const viewportConfiguration = new ViewportConfiguration(
        new TwoDimensionalSize(VIEWPORT_SIZE_X, VIEWPORT_SIZE_Y),
        new DeadZone(new Position(stableZonePositionX, stableZonePositionY), new TwoDimensionalSize(STABLE_ZONE_SIZE_X, STABLE_ZONE_SIZE_Y)),
        30)
    const configuration = new GameConfiguration(mapsConfigurations, initialMap, playerConfiguration, viewportConfiguration);
    await initGameEngine(configuration);
    console.log("engine created, starting loop");
    run();
}