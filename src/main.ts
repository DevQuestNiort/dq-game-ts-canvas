import {GameEngine} from "./engine/GameEngine.ts";
import {GameConfiguration} from "./engine/model/configuration/GameConfiguration.ts";
import asteniaConfiguration from "./levels/astenia/astenia.ts";


window.onload = function () {
    const configuration = {
        maps: {
            astenia: asteniaConfiguration
        },
        initialMap: "astenia",
        player: {
            playerImageUrl: "./assets/knight.png", initialState: {
                position: {
                    x: 5, y: 13
                }
            }
        },
        viewport: {
            dimension: {
                width: 49, height: 29,
            }, deadZone: {
                dimension: {
                    width: 29, height: 9,
                }, position: {
                    x: 10, y: 10
                }
            }, fpsLimit: 30
        }
    } as GameConfiguration;

    const engine = new GameEngine(configuration);
    console.log("engine created, starting loop");
    engine.run();
}