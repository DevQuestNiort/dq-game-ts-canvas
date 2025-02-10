export const Debug = (data, gameConfiguration) => {

    return `<div>
    
    <div>
    gameState.player.position.y   : ${data.player.position.y } 
    <br/>
        
     (gameState.viewport.position.y + gameConfiguration.viewport.deadZone.position.y + gameConfiguration.viewport.deadZone.dimension.height)</div>
    ${data.viewport.position.y }  + ${gameConfiguration.viewport.deadZone.position.y }  +${gameConfiguration.viewport.deadZone.dimension.height }
    </div>
<pre> ${JSON.stringify(data, null, 4)} </pre>

`
}