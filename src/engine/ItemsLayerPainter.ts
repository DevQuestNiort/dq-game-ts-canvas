import {GRID_PITCH} from "./constants.ts";
import {Items} from "./model/Items.ts";
import {getImage} from "./AssetLibrary.ts";
import {canvasContext, gameConfiguration, gameState} from "./GameDataService.ts";

export const paintItemsLayer = (items: Items) => {
    items.get().map(item => {
        if (item.position.x >= gameState.viewport.position.x && item.position.x < gameState.viewport.position.x + gameConfiguration.viewport.dimension.width && item.position.y >= gameState.viewport.position.y && item.position.y < gameState.viewport.position.y + gameConfiguration.viewport.dimension.height) {
            const theImage = getImage(item.image)
            drawImg(theImage, item.position.x - gameState.viewport.position.x, item.position.y - gameState.viewport.position.y)
        }
    })
}


const drawImg = (image: HTMLImageElement, x: number, y: number) => {
    canvasContext.drawImage(image, x * GRID_PITCH, y * GRID_PITCH, GRID_PITCH, GRID_PITCH);
}