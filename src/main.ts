import {GameEngine} from "./engine/GameEngine.ts";
import {GameConfiguration} from "./engine/model/configuration/GameConfiguration.ts";
import {MapConfiguration} from "./engine/model/configuration/MapConfiguration.ts";
import {Grid} from "./engine/model/configuration/Grid.ts";


import asteniaGrid from './levels/astenia.json'


window.onload = function () {
    const configuration = {
        maps: {
            astenia : {grid : new Grid (asteniaGrid)
            }
        },
        initialMap: "astenia",
        player: {
            playerImageUrl: "./assets/player.png", initialState: {
                position: {
                    x: 17, y: 17
                }
            }
        },
        viewport: {
            dimension: {
                width: 50, height: 30,
            }, deadZone: {
                dimension: {
                    width: 10, height: 10,
                }, position: {
                    x: 10, y: 5
                }
            }, fpsLimit: 10
        }
    } as GameConfiguration;

    const engine = new GameEngine(configuration);
    console.log("engine created, starting loop");
    engine.run();
}