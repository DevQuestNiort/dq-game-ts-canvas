import {GRID_PITCH} from "./constants.ts";
import {Items} from "./model/item/Items.ts";
import {getImage} from "./AssetLibrary.ts";
import {canvasContext, gameConfiguration, gameState} from "./GameDataService.ts";
import {Position} from "./model/Position.ts";

export const paintItemsLayer = (items: Items, tilesChanged: Position[], viewportChanged: boolean) => {
    items.get().map(item => {
        // si il est dans le viewport
        if (item.position.x >= gameState.viewport.position.x && item.position.x < gameState.viewport.position.x + gameConfiguration.viewport.dimension.width && item.position.y >= gameState.viewport.position.y && item.position.y < gameState.viewport.position.y + gameConfiguration.viewport.dimension.height) {
            //si cette case doit etre repeinte
            if (viewportChanged || (tilesChanged.find(tile => tile.x === item.position.x && tile.y === item.position.y))) {
                const theImage = getImage(item.image)
                drawImg(theImage, item.position.x - gameState.viewport.position.x, item.position.y - gameState.viewport.position.y)
            }
        }
    })
}


const drawImg = (image: HTMLImageElement, x: number, y: number) => {
    canvasContext.drawImage(image, x * GRID_PITCH, y * GRID_PITCH, GRID_PITCH, GRID_PITCH);
}