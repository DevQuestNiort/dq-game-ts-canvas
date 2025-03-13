import { PlayerState } from "../engine/model/state/PlayerState.ts";

export const PlayerStat = (playerStat: PlayerState) => {
  return `<span> x :${playerStat.position.x}</span>  <span> y : ${playerStat.position.y} </span> <span> life: 12 </span>`;
};
