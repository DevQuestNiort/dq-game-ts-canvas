export class ModalChoice {
  titre: string;
  action: () => void;

  constructor(titre: string, action: () => void) {
    this.titre = titre;
    this.action = action;
  }
}
