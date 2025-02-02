import {GameEngine} from "./engine/GameEngine.ts";
import {GameConfiguration} from "./engine/model/configuration/GameConfiguration.ts";
import asteniaConfiguration from "./levels/astenia/astenia.ts";
import {Orientation} from "./engine/model/Orientation.ts";
import {PlayerConfiguration} from "./engine/model/configuration/PlayerConfiguration.ts";
import {PlayerState} from "./engine/model/state/PlayerState.ts";
import {Position} from "./engine/model/Position.ts";
import {ViewportConfiguration} from "./engine/model/configuration/ViewportConfiguration.ts";
import {TwoDimensionalSize} from "./engine/model/TwoDimensionalSize.ts";
import {DeadZone} from "./engine/model/configuration/DeadZone.ts";


window.onload = function () {
    const mapsConfiguration = {
        astenia: asteniaConfiguration
    };
    const initialMap = "astenia";
    const playerConfiguration = new PlayerConfiguration(
        new PlayerState(new Position(5, 13), Orientation.RIGHT,3,2,25),
        "./assets/player-sprite.png")
    const viewportConfiguration = new ViewportConfiguration(
        new TwoDimensionalSize(35, 19),
        new DeadZone(new Position(8, 4), new TwoDimensionalSize(19, 11)),
        30)
    const configuration = new GameConfiguration(mapsConfiguration, initialMap, playerConfiguration, viewportConfiguration);

    const engine = new GameEngine(configuration);
    console.log("engine created, starting loop");
    engine.run();
}