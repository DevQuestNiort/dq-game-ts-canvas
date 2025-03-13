import { IhmEntry } from "../../menu/IhmEntry.ts";
import { Position } from "../../Position.ts";
import {
  GRID_PITCH,
  TOTAL_PX_SIZE_X,
  TOTAL_PX_SIZE_Y,
  VIEWPORT_SIZE_X,
} from "../../../constants.ts";
import { gameState } from "../../../GameDataService.ts";
import { MenuState } from "./MenuState.ts";
import { viewEnum } from "../GameState.ts";
import {
  notifyViewChanged,
  notifyViewportChanged,
} from "../../../GraphicsEngine.ts";
import { getImage } from "../../../AssetLibrary.ts";

export class InventoryMenuState extends MenuState {
  public name: string = "InventoryMenu";
  public texts: IhmEntry[];

  public selectedEntry: number = 0;
  public entrys: IhmEntry[];

  constructor() {
    super();
    const entry1 = new IhmEntry(
      "01",
      new Position((GRID_PITCH * VIEWPORT_SIZE_X) / 2, GRID_PITCH * 25),
      20,
      "Retour au jeu",
      () => console.log("retour au jeu"),
    );

    this.entrys = [entry1];
    this.texts = [
      new IhmEntry(
        "title",
        new Position((GRID_PITCH * VIEWPORT_SIZE_X) / 2, GRID_PITCH * 2),
        50,
        "Inventaire",
        undefined,
      ),
    ];
  }

  build(evt: KeyboardEvent) {
    switch (evt.key) {
      case "Enter":
      case "I":
      case "i":
        gameState.view = viewEnum.MAP;
        notifyViewChanged();
        notifyViewportChanged();
        break;
    }
  }

  paint() {
    const patternCanvas = document.createElement("canvas");
    patternCanvas.width = TOTAL_PX_SIZE_X;
    patternCanvas.height = TOTAL_PX_SIZE_Y;

    const pCtx = patternCanvas.getContext("2d") as CanvasRenderingContext2D;
    pCtx.font = "50px gamms";
    pCtx.fillStyle = "#fff";

    pCtx.textAlign = "center";

    this.texts.forEach((entry) => {
      pCtx.font = `${entry.size}px gamms`;
      pCtx.fillStyle = "#fff";
      pCtx.fillText(
        entry.text,
        entry.position.x,
        entry.position.y + 30,
        GRID_PITCH * 20,
      );
    });

    pCtx.fillStyle = "#fff";
    const LigneDebutListeInventaire = 3;
    pCtx.textAlign = "left";
    pCtx.font = `${20}px gamms`;
    gameState.player.inventory.get().forEach((item, index) => {
      pCtx.drawImage(
        getImage(item.image),
        GRID_PITCH * 2,
        GRID_PITCH * LigneDebutListeInventaire + GRID_PITCH * (index + 1),
        GRID_PITCH,
        GRID_PITCH,
      );
      pCtx.fillText(
        item.name,
        GRID_PITCH * 4,
        GRID_PITCH * LigneDebutListeInventaire + GRID_PITCH * (index + 1) + 20,
        GRID_PITCH * 10 - 10,
      );
      pCtx.fillText(
        item.description,
        GRID_PITCH * 10,
        GRID_PITCH * LigneDebutListeInventaire + GRID_PITCH * (index + 1) + 20,
        GRID_PITCH * 12 - 10,
      );
    });
    pCtx.textAlign = "center";
    this.entrys.forEach((entry, index) => {
      pCtx.font = `${entry.size}px gamms`;
      if (index === this.selectedEntry) {
        const textWidth = pCtx.measureText(entry.text).width + 20;
        pCtx.fillRect(
          entry.position.x - textWidth / 2,
          entry.position.y,
          textWidth,
          entry.size + 20,
        );
        pCtx.fillStyle = "#245a5a";
      } else {
        pCtx.fillStyle = "#fff";
      }
      pCtx.fillText(
        entry.text,
        entry.position.x,
        entry.position.y + 30,
        GRID_PITCH * 20,
      );
    });
    return patternCanvas;
  }
}
