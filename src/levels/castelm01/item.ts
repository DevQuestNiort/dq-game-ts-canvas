import {UsableItem} from "../../engine/model/item/UsableItem.ts";
import {Position} from "../../engine/model/Position.ts";
import {movePlayerToPositionAndMap} from "../../engine/PlayerManager.ts";
import {playSound, SoundType} from "../../engine/SoundEngine.ts";
import {DoorItem} from "../../engine/model/item/DoorItem.ts";


export const items = [
    new UsableItem("cm6wgtgl8000pvs637yvkmuig", "Vortex", new Position(23, 26), () => {
        movePlayerToPositionAndMap(30, 13,"astenia");// 30, 13
        playSound(SoundType.JUMP)
    }, "Vortex dimensionel", "Press T pour entrer dans le vortex", "echelle"),

    new DoorItem("cm8219pvl000gqw630vrmr7sl", "Porte Rouge", new Position(29, 26), "Porte Rouge", "", "prisonRed","cleRouge"),

    new DoorItem("cm8219pvm000hqw63a7q142j6", "Porte Verte", new Position(20, 7), "Porte Verte", "", "prisonGreen","cleVerte"),
    new DoorItem("cm8219pvo000iqw63xdsldpr3", "Porte Verte", new Position(25, 7), "Porte Verte", "", "prisonGreen","cleVerte"),
    new DoorItem("cm8219pvp000jqw63ferp70n4", "Porte Verte", new Position(32, 7), "Porte Verte", "", "prisonGreen","cleVerte"),
    new DoorItem("cm8219pvp000kqw63f2hrrk21", "Porte Verte", new Position(38, 7), "Porte Verte", "", "prisonGreen","cleVerte"),
    new DoorItem("cm8219pvp000lqw63xixm9chm", "Porte Verte", new Position(20, 11), "Porte Verte", "", "prisonGreen","cleVerte"),
    new DoorItem("cm8219pvp000mqw638lc29z15", "Porte Verte", new Position(25, 11), "Porte Verte", "", "prisonGreen","cleVerte"),
    new DoorItem("cm8219pvq000nqw63gd38vbhq", "Porte Verte", new Position(32, 11), "Porte Verte", "", "prisonGreen","cleVerte"),
    new DoorItem("cm8219pvr000oqw63injdipya", "Porte Verte", new Position(38, 11), "Porte Verte", "", "prisonGreen","cleVerte"),

    new DoorItem("cm8219pvs000pqw63pea15phs", "Porte Verte", new Position(20, 39), "Porte Verte", "", "prisonGreen","cleVerte"),
    new DoorItem("cm8219pvs000qqw631meq7s19", "Porte Verte", new Position(25, 39), "Porte Verte", "", "prisonGreen","cleVerte"),
    new DoorItem("cm8219pvs000rqw63w2iu79t1", "Porte Verte", new Position(32, 39), "Porte Verte", "", "prisonGreen","cleVerte"),
    new DoorItem("cm8219pvt000sqw63unhlztv1", "Porte Verte", new Position(38, 39), "Porte Verte", "", "prisonGreen","cleVerte"),
    new DoorItem("cm8219pvu000tqw63i9ihsmai", "Porte Verte", new Position(20, 43), "Porte Verte", "", "prisonGreen","cleVerte"),
    new DoorItem("cm8219pvu000uqw632omo42vw", "Porte Verte", new Position(25, 43), "Porte Verte", "", "prisonGreen","cleVerte"),
    new DoorItem("cm8219pvv000vqw63w2d3qyjh", "Porte Verte", new Position(32, 43), "Porte Verte", "", "prisonGreen","cleVerte"),
    new DoorItem("cm8219pvv000wqw63arfcynk2", "Porte Verte", new Position(38, 43), "Porte Verte", "", "prisonGreen","cleVerte"),


]