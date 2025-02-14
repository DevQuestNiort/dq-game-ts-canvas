## Gestion des cartes


Une carte est répésenté par un dossier. 

Celui ci contient 

* un fichier  grid.json

```json
[
  "wwwwwwwwwwwwwwwwwwwwwwwww",
  "wwwwwwwwwwwwwwwwwwwwwwwww",
  "wwwwwwwwwwwwwwwwwwwwwwwww",
  "wwwwwwwwwwwwwwwwwwwwwwwww",
  "wwwwwwwwSSSSSSSSSSwwwwwww",
  "wwwwwwwSSSSSSSSSSSSSwwwww",
  "wwwwwwSSShhhThSSSSSSSwwww",
  "wwwwwSSSShhhThhhhSSSSwwww",
  "wwwwwSSSSSSSShThhhhSSSwww",
  "wwwwwwSSSSSSSThhhhhSSSwww",
  "wwwwwwwwwwwSShhhhThhSSwww",
  "wwwwSSSSwwSSShhhhhhhSSwww",
  "wwwwSSSSSSSShhhhhhhhSSwww",
  "wwwwwSSSSShhhhhThhhhSSwww",
  "wwwwwSShhhhhhhhhhhThSSwww",
  "wwwwwSShhhThhThhhhhhSSwww",
  "wwwwwSSSShhhhhhhhThSSSwww",
  "wwwwwwBBBBBhhhhhSSSSSwwww",
  "wwwwwwBBBBBSSSSSSSSSSwwww",
  "wwwwwwBBBBBSSSSSSSSwwwwww",
  "wwwwwwBBwwwwwwwwwwwwwwwww",
  "wwwwwwBBwwwwwwwwwwwwwwwww",
  "wwwwwwBBwwwwwwwwwwwwwwwww",
  "wwwwwwBBwwwwwwwwwwwwwwwww",
  "wwwwwwwwwwwwwwwwwwwwwwwww"
]

```


* un fichier items.ts


```ts
export const items = [
    new UsableItem("cm6wgtgl8000pvs637yvkmuig", "Vortex", new Position(23, 26), (player) => {
        movePlayerToPositionAndMap(30, 13,"astenia");// 30, 13
        playSound("jump")
    }, "Vortex dimensionel", "Press T pour entrer dans le vortex", "echelle"),

    new DoorItem("cm6wgtl9d000qvs632skbx029", "Porte Rouge", new Position(29, 26), "Porte Rouge", "", "prisonRed","cleRouge"),
]


```



* un index.ts
```ts
import grid from './grid.json'
import {items} from "./item.ts";
import {MapConfiguration} from "../../engine/model/configuration/MapConfiguration.ts";
import {Grid} from "../../engine/model/configuration/Grid.ts";


export default new MapConfiguration(new Grid(grid), items);


```

