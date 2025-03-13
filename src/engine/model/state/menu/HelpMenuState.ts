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

export class HelpMenuState extends MenuState {
  public name: string = "HelpMenu";
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
        "Aide",
        undefined,
      ),
    ];
  }

  build(evt: KeyboardEvent) {
    switch (evt.key) {
      case "Enter":
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

    pCtx.font = "20px gamms";
    pCtx.fillStyle = "#fff";
    const listeHelp = [
      "Touche Z Q S D : Monter, Gauche, Descendre, Droite",
      "Touche I : Ouvrir l'inventaire",
      "Touche T : Prendre ou interagir avec un objet",
      "Touche F : Frapper un objet ou un personnage",
      "Touche R : Parler avec un PNJ",
      "Touche M : Couper/Activer le son",
      "Alt + F4 : Ragequit  ",
    ];
    const ligneDebutHelp = 4;

    pCtx.fillText(
      "Aide",
      GRID_PITCH * 3,
      GRID_PITCH * ligneDebutHelp,
      GRID_PITCH * 23 - 10,
    );

    listeHelp.forEach((text, index) => {
      pCtx.fillText(
        text,
        GRID_PITCH * 4,
        GRID_PITCH * ligneDebutHelp + GRID_PITCH * (index + 1) + 20,
        GRID_PITCH * 20,
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
