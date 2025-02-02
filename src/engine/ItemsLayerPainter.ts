import {AssetLibrary} from "./AssetLibrary.ts";
import {Item} from "./model/Item.ts";
import {GRID_PITCH} from "./constants.ts";
import {GameState} from "./model/state/GameState.ts";
import {GameConfiguration} from "./model/configuration/GameConfiguration.ts";

export class ItemsLayerPainter {

    assetLibrary: AssetLibrary
    canvasCtx: CanvasRenderingContext2D;
    gameState: GameState;
    gameConfiguration: GameConfiguration;

    constructor(canvasCtx: CanvasRenderingContext2D, gameState: GameState, gameConfiguration: GameConfiguration) {
        this.assetLibrary = new AssetLibrary();
        this.canvasCtx = canvasCtx;
        this.gameState = gameState;
        this.gameConfiguration = gameConfiguration;
    }

    init = async () => {
        await this.assetLibrary.init();
    }

    paintItemsLayer = (items: Item[]) => {
        items.map(item => {
            if (item.position.x >= this.gameState.viewport.position.x
                && item.position.x < this.gameState.viewport.position.x + this.gameConfiguration.viewport.dimension.width
                && item.position.y >= this.gameState.viewport.position.y
                && item.position.y < this.gameState.viewport.position.y + this.gameConfiguration.viewport.dimension.height
            ) {
                const theImage = this.assetLibrary.getImage(item.image)

                this.drawImg(theImage, item.position.x - this.gameState.viewport.position.x, item.position.y - this.gameState.viewport.position.y)
            }
        })
    }


    drawImg = (image: HTMLImageElement, x: number, y: number) => {
        this.canvasCtx.drawImage(image, x * GRID_PITCH, y * GRID_PITCH, GRID_PITCH, GRID_PITCH);
    }
}