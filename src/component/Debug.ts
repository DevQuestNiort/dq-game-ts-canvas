import { GameConfiguration } from "../engine/model/configuration/GameConfiguration.ts";
import { GameState } from "../engine/model/state/GameState.ts";

export const Debug = (
  data: GameState,
  gameConfiguration: GameConfiguration,
) => {
  return `<div>
    
    <div>
    gameState.player.position.y   : ${data.player.position.y} 
    <br/>
        
     (gameState.viewport.position.y + gameConfiguration.viewport.deadZone.position.y + gameConfiguration.viewport.deadZone.dimension.height)</div>
    ${data.viewport.position.y}  + ${gameConfiguration.viewport.deadZone.position.y}  +${gameConfiguration.viewport.deadZone.dimension.height}
    </div>
<pre> ${JSON.stringify(data, null, 4)} </pre>

`;
};
