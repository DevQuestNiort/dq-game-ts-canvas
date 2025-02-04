import grid from './grid.json'
import {items} from "./item.ts";
import {MapConfiguration} from "../../engine/model/configuration/MapConfiguration.ts";
import {Grid} from "../../engine/model/configuration/Grid.ts";


export default new MapConfiguration(new Grid(grid), items);

