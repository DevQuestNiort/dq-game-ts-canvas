import { notifyViewportChanged } from "./GraphicsEngine.ts";
import {
  gameConfiguration,
  gameState,
  getCurrentMap,
} from "./GameDataService.ts";

export const centerViewportOnPlayer = () => {
  setViewportPositionWithinMapX(
    gameState.player.position.x -
      Math.floor(gameConfiguration.viewport.dimension.width / 2),
  );
  setViewportPositionWithinMapY(
    gameState.player.position.y -
      Math.floor(gameConfiguration.viewport.dimension.height / 2),
  );
};

export const computeViewportPosition = () => {
  // on recalcule le viewport au cas ou on sort de la dead zone
  // top boundary
  if (
    gameState.player.position.y <
    gameState.viewport.position.y +
      gameConfiguration.viewport.deadZone.position.y
  ) {
    setViewportPositionWithinMapY(
      gameState.player.position.y -
        gameConfiguration.viewport.deadZone.position.y,
    );
    // bottom boundary
  } else if (
    gameState.player.position.y >=
    gameState.viewport.position.y +
      gameConfiguration.viewport.deadZone.position.y +
      gameConfiguration.viewport.deadZone.dimension.height
  ) {
    setViewportPositionWithinMapY(
      gameState.player.position.y -
        gameConfiguration.viewport.deadZone.position.y -
        gameConfiguration.viewport.deadZone.dimension.height,
    );
    setViewportPositionWithinMapY(
      gameState.player.position.y -
        gameConfiguration.viewport.deadZone.position.y -
        gameConfiguration.viewport.deadZone.dimension.height +
        1,
    );
  }
  // left boundary
  if (
    gameState.player.position.x <
    gameState.viewport.position.x +
      gameConfiguration.viewport.deadZone.position.x
  ) {
    setViewportPositionWithinMapX(
      gameState.player.position.x -
        gameConfiguration.viewport.deadZone.position.x,
    );
    // right boundary
  } else if (
    gameState.player.position.x >=
    gameState.viewport.position.x +
      gameConfiguration.viewport.deadZone.position.x +
      gameConfiguration.viewport.deadZone.dimension.width
  ) {
    setViewportPositionWithinMapX(
      gameState.player.position.x -
        gameConfiguration.viewport.deadZone.position.x -
        gameConfiguration.viewport.deadZone.dimension.width +
        1,
    );
  }
};

const setViewportPositionWithinMapX = (x: number) => {
  let viewportX = x;
  if (viewportX < 0) {
    viewportX = 0;
  }
  if (
    viewportX + gameConfiguration.viewport.dimension.width >
    getCurrentMap().grid.getWidth()
  ) {
    viewportX =
      getCurrentMap().grid.getWidth() -
      gameConfiguration.viewport.dimension.width;
  }
  if (gameState.viewport.position.x !== viewportX) {
    gameState.viewport.position.x = viewportX;
    notifyViewportChanged();
  }
};

const setViewportPositionWithinMapY = (y: number) => {
  let viewportY = y;
  if (viewportY < 0) {
    viewportY = 0;
  }
  if (
    viewportY + gameConfiguration.viewport.dimension.height >
    getCurrentMap().grid.getHeight()
  ) {
    viewportY =
      getCurrentMap().grid.getHeight() -
      gameConfiguration.viewport.dimension.height;
  }

  if (gameState.viewport.position.y !== viewportY) {
    gameState.viewport.position.y = viewportY;
    notifyViewportChanged();
  }
};
