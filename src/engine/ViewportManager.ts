import {GameState} from "./model/state/GameState.ts";
import {GameConfiguration} from "./model/configuration/GameConfiguration.ts";

export class ViewportManager {

    gameState: GameState;
    gameConfiguration: GameConfiguration;
    notifyViewportChanged: () => void;

    constructor(gameState: GameState, gameConfiguration: GameConfiguration, notifyViewportChanged: () => void) {
        this.gameState = gameState;
        this.gameConfiguration = gameConfiguration;
        this.notifyViewportChanged = notifyViewportChanged;
    }

    centerViewportOnPlayer = () => {
        this.setViewportPositionWithinMapX(this.gameState.player.position.x - Math.floor(this.gameConfiguration.viewport.dimension.width / 2))
        this.setViewportPositionWithinMapY(this.gameState.player.position.y - Math.floor(this.gameConfiguration.viewport.dimension.height / 2));
    }

    computeViewportPosition = () => {
        // on recalcule le viewport au cas ou on sort de la dead zone
        // top boundary
        if (this.gameState.player.position.y < (this.gameState.viewport.position.y + this.gameConfiguration.viewport.deadZone.position.y)) {
            this.setViewportPositionWithinMapY(this.gameState.player.position.y - this.gameConfiguration.viewport.deadZone.position.y);
            // bottom boundary
        } else if (this.gameState.player.position.y > (this.gameState.viewport.position.y + this.gameConfiguration.viewport.deadZone.position.y + this.gameConfiguration.viewport.deadZone.dimension.height)) {
            this.setViewportPositionWithinMapY(this.gameState.player.position.y - this.gameConfiguration.viewport.deadZone.position.y - this.gameConfiguration.viewport.deadZone.dimension.height);
        }
        // left boundary
        if (this.gameState.player.position.x < (this.gameState.viewport.position.x + this.gameConfiguration.viewport.deadZone.position.x)) {
            this.setViewportPositionWithinMapX(this.gameState.player.position.x - this.gameConfiguration.viewport.deadZone.position.x);
            // right boundary
        } else if (this.gameState.player.position.x > (this.gameState.viewport.position.x + this.gameConfiguration.viewport.deadZone.position.x + this.gameConfiguration.viewport.deadZone.dimension.width)) {
            this.setViewportPositionWithinMapX(this.gameState.player.position.x - this.gameConfiguration.viewport.deadZone.position.x - this.gameConfiguration.viewport.deadZone.dimension.width);
        }
    }

    setViewportPositionWithinMapX(x: number) {
        let viewportX = x;
        if (viewportX < 0) {
            viewportX = 0;
        }
        if (viewportX + this.gameConfiguration.viewport.dimension.width > this.getCurrentMap().grid.getWidth()) {
            viewportX = this.getCurrentMap().grid.getWidth() - this.gameConfiguration.viewport.dimension.width;
        }
        if (this.gameState.viewport.position.x !== viewportX) {
            this.gameState.viewport.position.x = viewportX;
            this.notifyViewportChanged();
        }
    }

    setViewportPositionWithinMapY(y: number) {
        let viewportY = y;
        if (viewportY < 0) {
            viewportY = 0;
        }
        if (viewportY + this.gameConfiguration.viewport.dimension.height > this.getCurrentMap().grid.getHeight()) {
            viewportY = this.getCurrentMap().grid.getHeight() - this.gameConfiguration.viewport.dimension.height;
        }

        if (this.gameState.viewport.position.y !== viewportY) {
            this.gameState.viewport.position.y = viewportY;
            this.notifyViewportChanged();
        }
    }

    getCurrentMap = () => {
        return this.gameConfiguration.maps[this.gameState.currentMap];
    }
}