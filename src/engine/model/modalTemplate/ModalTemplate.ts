import { ModalChoice } from "./ModalChoice.ts";
import {GameState} from "../state/GameState.ts";

export class ModalTemplate {
  title: string;
  image: string;
  text: string | ((gameState: GameState) => string);

  choices: ModalChoice[];

  constructor(
    title: string,
    image: string,
    text: string | ((gameState: GameState) => string),
    choices: ModalChoice[] = [],
  ) {
    this.title = title;
    this.image = image;
    this.text = text;
    this.choices = choices;
  }
}
