import {init as initGameEngine, run} from "./engine/GameEngine.ts";
import {GameConfiguration} from "./engine/model/configuration/GameConfiguration.ts";
import asteniaConfiguration from "./levels/astenia/astenia.ts";
import castelm01Configuration  from './levels/castelm01/castelm01.ts'
import {Orientation} from "./engine/model/Orientation.ts";
import {PlayerConfiguration} from "./engine/model/configuration/PlayerConfiguration.ts";
import {PlayerState} from "./engine/model/state/PlayerState.ts";
import {Position} from "./engine/model/Position.ts";
import {ViewportConfiguration} from "./engine/model/configuration/ViewportConfiguration.ts";
import {TwoDimensionalSize} from "./engine/model/TwoDimensionalSize.ts";
import {DeadZone} from "./engine/model/configuration/DeadZone.ts";




/* Configureation
 taille du canva de jeux
 vieportSizeX vieportSizeY
 */

/*
definit la largeur du view port en Pitch de 32 px doit être impair
 */
const vieportSizeX =35
/*
definit la hauteur du view port en Pitch de 32 px doit être impair
 */
const vieportSizeY =23
/*
definit la largeur de la zone de deplacement stable ( centre au centre) doit être impair
 */
const stableZoneSizeX  = 3
/*
definit la hauteur de la zone de deplacement stable ( centre au centre) doit être impair
 */
const stableZoneSizeY  =3

const stableZonedebutZoneX = (vieportSizeX -  stableZoneSizeX) / 2
const stableZonedebutZoneY = (vieportSizeY -  stableZoneSizeY) / 2



window.onload = async function () {
    const mapsConfiguration = {
        astenia: asteniaConfiguration,
        castelm01: castelm01Configuration
    };
    const initialMap = "astenia";
    const playerConfiguration = new PlayerConfiguration(
        new PlayerState(new Position(71, 10), Orientation.RIGHT, 3, 2, 25),
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