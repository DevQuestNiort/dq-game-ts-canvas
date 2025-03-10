const assets: Record<string, HTMLImageElement> = {};

export const init = async () => {
    await loadAsset("player", "troll.png");
    await loadAsset("bouclier", "bouclier.png");
    await loadAsset("chicken", "chicken.png");
    await loadAsset("anneau", "anneau.png");
    await loadAsset("appareil", "appareil.png");
    await loadAsset("arbre", "arbre1.png");
    await loadAsset("archer", "archer.png");
    await loadAsset("armure", "armure.png");
    await loadAsset("backpack", "backpack.png");
    await loadAsset("bibliotheque", "bibliotheque.png");
    await loadAsset("bouclier", "bouclier.png");
    await loadAsset("carte-au-tresor", "carte-au-tresor.png");
    await loadAsset("carte-au-tresor-bis", "carte-au-tresor-bis.png");
    await loadAsset("chandelier", "chandelier.png");
    await loadAsset("chicken", "chicken.png");
    await loadAsset("chevre01", "chevre01.png");
    await loadAsset("chevre02", "chevre02.png");
    await loadAsset("cle", "cle.png");
    await loadAsset("cleBlue", "cleBlue.png");
    await loadAsset("cleGreen", "cleGreen.png");
    await loadAsset("cleRed", "cleRed.png");
    await loadAsset("collier", "collier.png");
    await loadAsset("communsword", "communsword.png");
    await loadAsset("cor-des-alpes", "cor-des-alpes.png");
    await loadAsset("diamantRouge", "diamantRouge.png");
    await loadAsset("diamantBleu", "diamantBleu.png");
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
    await loadAsset("ogre01", "ogre01.png");
    await loadAsset("ogre02", "ogre02.png");
    await loadAsset("ogre03", "ogre03.png");
    await loadAsset("ogre04", "ogre04.png");
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
    await loadAsset("bg-lava", "bg/lave.png");
    await loadAsset("bg-mur", "bg/mur-donjon.png");
    await loadAsset("bg-sol", "bg/sol-interieur.png");
    await loadAsset("bg-water", "bg/eau.png");
    await loadAsset("bg-herbe", "bg/herbe.png");
    await loadAsset("bg-chemin", "bg/chemin.png");
    await loadAsset("echelle", "echelle.png");
    await loadAsset("trapp", "trapp.png");
    //
    await loadAsset("boat01", "boat01.png");
    await loadAsset("boat02", "boat02.png");
    await loadAsset("boat03", "boat03.png");


    await loadAsset("tapisMilieu", "dungeon/tapisMilieu.png");
    await loadAsset("tapisCoteHaut", "dungeon/tapisCoteHaut.png");
    await loadAsset("tapisCoteBas", "dungeon/tapisCoteBas.png");
    await loadAsset("tapisCoteGauche", "dungeon/tapisCoteGauche.png");
    await loadAsset("tapisCoteDroit", "dungeon/tapisCoteDroit.png");
    await loadAsset("tapisAngleHautGauche", "dungeon/tapisAngleHautGauche.png");
    await loadAsset("tapisAngleBasGauche", "dungeon/tapisAngleBasGauche.png");
    await loadAsset("tapisAngleHautDroit", "dungeon/tapisAngleHautDroit.png");
    await loadAsset("tapisAngleBasDroit", "dungeon/tapisAngleBasDroit.png");
    await loadAsset("feu", "dungeon/feu.png");
    await loadAsset("fleurs", "dungeon/fleurs.png");
    await loadAsset("trone", "dungeon/trone.png");
    await loadAsset("tresor01", "dungeon/tresor01.png");
    await loadAsset("tresor02", "dungeon/tresor02.png");
    await loadAsset("tonneau", "dungeon/tonneau.png");
    await loadAsset("porteh", "dungeon/porteh.png");
    await loadAsset("portev", "dungeon/portev.png");
    await loadAsset("skeletteMort", "dungeon/skeletteMort.png");


    //
    await loadAsset("boite01", "item/Boxes/1.png");
    await loadAsset("boite02", "item/Boxes/2.png");
    await loadAsset("boite03", "item/Boxes/3.png");
    await loadAsset("boite04", "item/Boxes/4.png");
    await loadAsset("boite05", "item/Boxes/5.png");
    await loadAsset("boite06", "item/Boxes/6.png");
    await loadAsset("boite07", "item/Boxes/7.png");
    await loadAsset("boite08", "item/Boxes/8.png");
    await loadAsset("boite09", "item/Boxes/9.png");
    await loadAsset("boite10", "item/Boxes/10.png");
    await loadAsset("boite11", "item/Boxes/11.png");
    await loadAsset("boite12", "item/Boxes/12.png");
    await loadAsset("boite13", "item/Boxes/13.png");
    await loadAsset("boite14", "item/Boxes/14.png");
    await loadAsset("boite15", "item/Boxes/15.png");

    await loadAsset("table01", "item/furniture/32x32_table.png");
    await loadAsset("chair01", "item/furniture/32x32_chair01_blue.png");



    await  loadAsset("deadbg","deadBg.webp")
    await  loadAsset("bgMenu","bgMenu.webp")
    await  loadAsset("logodq","logo.png")

    await loadAsset("question", "question.png");
}


export const getImage = (id: string) => {
    return assets[id]||assets["question"];
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
