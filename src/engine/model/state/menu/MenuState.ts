import { IhmEntry } from "../../menu/IhmEntry.ts";

export abstract class MenuState {
  public selectedEntry: number = 0;
  public entrys: IhmEntry[];

  abstract build(evt: KeyboardEvent): void;

  abstract paint(): void;
}
