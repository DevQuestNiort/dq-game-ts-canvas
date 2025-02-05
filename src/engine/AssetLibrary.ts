const assets: Record<string, HTMLImageElement> = {};

export const init = async () => {
    await loadAsset("player", "troll.png");
    await loadAsset("bouclier", "bouclier.png");
    await loadAsset("chicken", "chicken.png");
    await loadAsset("anneau", "anneau.png");
    await loadAsset("appareil", "appareil.png");
    await loadAsset("arbre", "arbre.png");
    await loadAsset("archer", "archer.png");
    await loadAsset("armure", "armure.png");
    await loadAsset("backpack", "backpack.png");
    await loadAsset("bibliotheque", "bibliotheque.png");
    await loadAsset("bouclier", "bouclier.png");
    await loadAsset("carte-au-tresor", "carte-au-tresor.png");
    await loadAsset("carte-au-tresor-bis", "carte-au-tresor-bis.png");
    await loadAsset("chandelier", "chandelier.png");
    await loadAsset("chicken", "chicken.png");
    await loadAsset("cle", "cle.png");
    await loadAsset("cleBlue", "cleBlue.png");
    await loadAsset("cleGreen", "cleGreen.png");
    await loadAsset("cleRed", "cleRed.png");
    await loadAsset("communsword", "communsword.png");
    await loadAsset("cor-des-alpes", "cor-des-alpes.png");
    await loadAsset("diamond ", "diamond .png");
    await loadAsset("doorleft", "doorleft.png");
    await loadAsset("doorright", "doorright.png");
    await loadAsset("dragon", "dragon.png");
    await loadAsset("dwarf", "dwarf.png");
    await loadAsset("elf", "elf.png");
    await loadAsset("fond-carte", "fond-carte.jpg");
    await loadAsset("forgeron", "forgeron.png");
    await loadAsset("frankenstein", "frankenstein.png");
    await loadAsset("gateaux", "gateaux.png");
    await loadAsset("gem", "gem.png");
    await loadAsset("group", "group.png");
    await loadAsset("guillotine", "guillotine.png");
    await loadAsset("hache", "hache.png");
    await loadAsset("king", "king.png");
    await loadAsset("knight", "knight.png");
    await loadAsset("la-tombe", "la-tombe.png");
    await loadAsset("levier", "levier.png");
    await loadAsset("magicsword", "magicsword.png");
    await loadAsset("mission", "mission.png");
    await loadAsset("necromancer", "necromancer.png");
    await loadAsset("ogre", "ogre.png");
    await loadAsset("ogre1", "ogre (1).png");
    await loadAsset("ogre2", "ogre (2).png");
    await loadAsset("ogre3", "ogre (3).png");
    await loadAsset("oldchandelier", "oldchandelier.png");
    await loadAsset("panneau", "panneau.png");
    await loadAsset("piege", "piege.png");
    await loadAsset("player", "player.png");
    await loadAsset("porte", "porte.png");
    await loadAsset("potion", "potion.png");
    await loadAsset("potion-bis", "potion-bis.png");
    await loadAsset("potion-tr", "potion-tr.png");
    await loadAsset("prison", "prison.png");
    await loadAsset("prisonBlue", "prisonBlue.png");
    await loadAsset("prisonGreen", "prisonGreen.png");
    await loadAsset("prisonRed", "prisonRed.png");
    await loadAsset("prisonYellow", "prisonYellow.png");
    await loadAsset("quest", "quest.png");
    await loadAsset("quete", "quete.png");
    await loadAsset("raresword", "raresword.png");
    await loadAsset("role-playing", "role-playing.png");
    await loadAsset("serpent", "serpent.png");
    await loadAsset("shaman", "shaman.png");
    await loadAsset("shield", "shield.png");
    await loadAsset("squelette", "squelette.png");
    await loadAsset("table", "table.png");
    await loadAsset("tasse-a-cafe", "tasse-a-cafe.png");
    await loadAsset("tonneau", "tonneau.png");
    await loadAsset("tonneau-de-vin", "tonneau-de-vin.png");
    await loadAsset("troll", "troll.png");
    await loadAsset("uniquesword", "uniquesword.png");
    await loadAsset("village", "village.png");
    await loadAsset("vortex", "vortex.png");
    await loadAsset("wizard", "wizard.png");
    await loadAsset("bg-carrelage", "bg/carrelage.png");
    await loadAsset("bg-lava", "bg/lava.png");
}


export const getImage = (id: string) => {
    return assets[id];
}


const loadAsset = async (id: string, fileName: string) => {
    await loadImage("./assets/" + fileName)
        .then(img => assets[id] = img, err => console.log(err))
}

const loadImage: (src: string) => Promise<HTMLImageElement> = async (src: string) => {
    return new Promise((resolve, reject) => {
        let img = new Image()
        img.onload = () => resolve(img);
        img.onerror = reject
        img.src = src
    })
}
