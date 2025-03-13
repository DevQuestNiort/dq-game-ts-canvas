import { TwoDimensionalSize } from "../TwoDimensionalSize.ts";
import { DeadZone } from "./DeadZone.ts";

export class ViewportConfiguration {
  public dimension: TwoDimensionalSize;
  public deadZone: DeadZone;
  public fpsLimit: number;

  constructor(
    dimension: TwoDimensionalSize,
    deadZone: DeadZone,
    fpsLimit: number,
  ) {
    this.dimension = dimension;
    this.fpsLimit = fpsLimit;
    this.deadZone = deadZone;
  }
}
