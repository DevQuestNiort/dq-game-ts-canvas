import {GameEngine} from "./engine/GameEngine.ts";
import {GameConfiguration} from "./engine/model/configuration/GameConfiguration.ts";
import {Grid} from "./engine/model/configuration/Grid.ts";


import asteniaGrid from './levels/astenia.json'
import {Item} from "./engine/model/Item.ts";
import {Position} from "./engine/model/Position.ts";


window.onload = function () {
    const configuration = {
        maps: {
            astenia: {
                grid: new Grid(asteniaGrid),
                items: [new Item("16adcb0b-e281-460d-a1fa-98876df8edd5", "bouclier", "item", new Position(12, 12), true, "le bouclier +3", "press F to take", "bouclier"),
                    new Item("16adcb0b-e281-460d-a1fa-98876df8edd5", "bouclier", "item", new Position(12, 8), true, "le bouclier +3", "press F to take", "chicken")]
            }
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