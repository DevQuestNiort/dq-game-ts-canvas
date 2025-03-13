import { ModalChoice } from "./ModalChoice.ts";

export class ModalTemplate {
  title: string;
  image: string;
  text: string;

  choices: ModalChoice[];

  constructor(
    title: string,
    image: string,
    text: string,
    choices: ModalChoice[] = [],
  ) {
    this.title = title;
    this.image = image;
    this.text = text;
    this.choices = choices;
  }
}
