import {canvasContext, gameConfiguration, gameState, getCurrentMap} from "./GameDataService.ts";
import {Position} from "./model/Position.ts";
import {Fog} from "./model/configuration/Fog.ts";
import {GRID_PITCH} from "./constants.ts";
import {BooleanOption, getBooleanOption} from "./OptionManager.ts";

export const paintFog = (tilesChanged: Position[], viewportChanged: boolean) => {
    const fog = getCurrentMap().fog;
    if (fog !== undefined && !getBooleanOption(BooleanOption.DEBUG_MODE)) {
        if (viewportChanged) {
            for (let x = 0; x < gameConfiguration.viewport.dimension.width; x++) {
                for (let y = 0; y < gameConfiguration.viewport.dimension.height; y++) {
                    paintFogTile(x, y, fog);
                }
            }
        } else {
            for (let tile of tilesChanged) {
                paintFogTile(tile.x - gameState.viewport.position.x, tile.y - gameState.viewport.position.y, fog);
            }
        }
    }
}

const paintFogTile = (x: number, y: number, fog: Fog) => {
    const distanceX = Math.abs(x + gameState.viewport.position.x - gameState.player.position.x);
    const distanceY = Math.abs(y + gameState.viewport.position.y - gameState.player.position.y);
    const distanceMax = Math.max(distanceX, distanceY);
    if (distanceMax > fog.distance) {
        canvasContext.fillStyle = "rgba(0, 0, 0, 1)"
        canvasContext.fillRect(x * GRID_PITCH, y * GRID_PITCH, GRID_PITCH, GRID_PITCH)
    } else if (distanceMax === fog.distance) {
        canvasContext.fillStyle = "rgba(0, 0, 0, 0.5)"
        canvasContext.fillRect(x * GRID_PITCH, y * GRID_PITCH, GRID_PITCH, GRID_PITCH)
    }
}