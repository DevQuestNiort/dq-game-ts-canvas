const assets: Record<string, HTMLImageElement> = {};

export const init = async () => {
  await Promise.all([
    loadAsset("player", "troll.png"),
    loadAsset("bouclier", "bouclier.png"),
    loadAsset("chicken", "chicken.png"),
    loadAsset("anneau", "anneau.png"),
    loadAsset("appareil", "appareil.png"),
    loadAsset("arbre", "arbre1.png"),
    loadAsset("archer", "archer.png"),
    loadAsset("armure", "armure.png"),
    loadAsset("backpack", "backpack.png"),
    loadAsset("bibliotheque", "bibliotheque.png"),
    loadAsset("bouclier", "bouclier.png"),
    loadAsset("carte-au-tresor", "carte-au-tresor.png"),
    loadAsset("carte-au-tresor-bis", "carte-au-tresor-bis.png"),
    loadAsset("chandelier", "chandelier.png"),
    loadAsset("chicken", "chicken.png"),
    loadAsset("chevre01", "chevre01.png"),
    loadAsset("chevre02", "chevre02.png"),
    loadAsset("cle", "cle.png"),
    loadAsset("cleBlue", "cleBlue.png"),
    loadAsset("cleGreen", "cleGreen.png"),
    loadAsset("cleRed", "cleRed.png"),
    loadAsset("collier", "collier.png"),
    loadAsset("communsword", "communsword.png"),
    loadAsset("cor-des-alpes", "cor-des-alpes.png"),
    loadAsset("diamantRouge", "diamantRouge.png"),
    loadAsset("diamantBleu", "diamantBleu.png"),
    loadAsset("doorleft", "doorleft.png"),
    loadAsset("doorright", "doorright.png"),
    loadAsset("dragon", "dragon.png"),
    loadAsset("dwarf", "dwarf.png"),
    loadAsset("elf", "elf.png"),
    loadAsset("fond-carte", "fond-carte.jpg"),
    loadAsset("forgeron", "forgeron.png"),
    loadAsset("frankenstein", "frankenstein.png"),
    loadAsset("gateaux", "gateaux.png"),
    loadAsset("gem", "gem.png"),
    loadAsset("group", "group.png"),
    loadAsset("guillotine", "guillotine.png"),
    loadAsset("hache", "hache.png"),
    loadAsset("king", "king.png"),
    loadAsset("knight", "knight.png"),
    loadAsset("la-tombe", "la-tombe.png"),
    loadAsset("levier", "levier.png"),
    loadAsset("magicsword", "magicsword.png"),
    loadAsset("mission", "mission.png"),
    loadAsset("necromancer", "necromancer.png"),
    loadAsset("ogre01", "ogre01.png"),
    loadAsset("ogre02", "ogre02.png"),
    loadAsset("ogre03", "ogre03.png"),
    loadAsset("ogre04", "ogre04.png"),
    loadAsset("oldchandelier", "oldchandelier.png"),
    loadAsset("panneau", "panneau.png"),
    loadAsset("piege", "piege.png"),
    loadAsset("player", "player.png"),
    loadAsset("porte", "porte.png"),
    loadAsset("potion", "potion.png"),
    loadAsset("potion-bis", "potion-bis.png"),
    loadAsset("potion-tr", "potion-tr.png"),
    loadAsset("prison", "prison.png"),
    loadAsset("prisonBlue", "prisonBlue.png"),
    loadAsset("prisonGreen", "prisonGreen.png"),
    loadAsset("prisonRed", "prisonRed.png"),
    loadAsset("prisonYellow", "prisonYellow.png"),
    loadAsset("quest", "quest.png"),
    loadAsset("quete", "quete.png"),
    loadAsset("raresword", "raresword.png"),
    loadAsset("role-playing", "role-playing.png"),
    loadAsset("serpent", "serpent.png"),
    loadAsset("shaman", "shaman.png"),
    loadAsset("shield", "shield.png"),
    loadAsset("squelette", "squelette.png"),
    loadAsset("table", "table.png"),
    loadAsset("tasse-a-cafe", "tasse-a-cafe.png"),
    loadAsset("tonneau", "tonneau.png"),
    loadAsset("tonneau-de-vin", "tonneau-de-vin.png"),
    loadAsset("troll", "troll.png"),
    loadAsset("uniquesword", "uniquesword.png"),
    loadAsset("village", "village.png"),
    loadAsset("vortex", "vortex.png"),
    loadAsset("wizard", "wizard.png"),
    loadAsset("bg-carrelage", "bg/carrelage.png"),
    loadAsset("bg-lava", "bg/lave.png"),
    loadAsset("bg-mur", "bg/mur-donjon.png"),
    loadAsset("bg-sol", "bg/sol-interieur.png"),
    loadAsset("bg-water", "bg/eau.png"),
    loadAsset("bg-herbe", "bg/herbe.png"),
    loadAsset("bg-chemin", "bg/chemin.png"),
    loadAsset("echelle", "echelle.png"),
    loadAsset("trapp", "trapp.png"),
    loadAsset("boat01", "boat01.png"),
    loadAsset("boat02", "boat02.png"),
    loadAsset("boat03", "boat03.png"),
    loadAsset("tapisMilieu", "dungeon/tapisMilieu.png"),
    loadAsset("tapisCoteHaut", "dungeon/tapisCoteHaut.png"),
    loadAsset("tapisCoteBas", "dungeon/tapisCoteBas.png"),
    loadAsset("tapisCoteGauche", "dungeon/tapisCoteGauche.png"),
    loadAsset("tapisCoteDroit", "dungeon/tapisCoteDroit.png"),
    loadAsset("tapisAngleHautGauche", "dungeon/tapisAngleHautGauche.png"),
    loadAsset("tapisAngleBasGauche", "dungeon/tapisAngleBasGauche.png"),
    loadAsset("tapisAngleHautDroit", "dungeon/tapisAngleHautDroit.png"),
    loadAsset("tapisAngleBasDroit", "dungeon/tapisAngleBasDroit.png"),
    loadAsset("feu", "dungeon/feu.png"),
    loadAsset("fleurs", "dungeon/fleurs.png"),
    loadAsset("trone", "dungeon/trone.png"),
    loadAsset("tresor01", "dungeon/tresor01.png"),
    loadAsset("tresor02", "dungeon/tresor02.png"),
    loadAsset("tonneau", "dungeon/tonneau.png"),
    loadAsset("porteh", "dungeon/porteh.png"),
    loadAsset("portev", "dungeon/portev.png"),
    loadAsset("skeletteMort", "dungeon/skeletteMort.png"),
    loadAsset("boite01", "item/Boxes/1.png"),
    loadAsset("boite02", "item/Boxes/2.png"),
    loadAsset("boite03", "item/Boxes/3.png"),
    loadAsset("boite04", "item/Boxes/4.png"),
    loadAsset("boite05", "item/Boxes/5.png"),
    loadAsset("boite06", "item/Boxes/6.png"),
    loadAsset("boite07", "item/Boxes/7.png"),
    loadAsset("boite08", "item/Boxes/8.png"),
    loadAsset("boite09", "item/Boxes/9.png"),
    loadAsset("boite10", "item/Boxes/10.png"),
    loadAsset("boite11", "item/Boxes/11.png"),
    loadAsset("boite12", "item/Boxes/12.png"),
    loadAsset("boite13", "item/Boxes/13.png"),
    loadAsset("boite14", "item/Boxes/14.png"),
    loadAsset("boite15", "item/Boxes/15.png"),
    loadAsset("table01", "item/furniture/32x32_table.png"),
    loadAsset("chair01", "item/furniture/32x32_chair01_blue.png"),
    loadAsset("deadbg", "deadBg.webp"),
    loadAsset("bgMenu", "bgMenu.webp"),
    loadAsset("logodq", "logo.png"),
    loadAsset("sac-plastique", "sac-plastique.png"),
    loadAsset("question", "question.png"),
  ]);
};

export const getImage = (id: string) => {
  return assets[id] || assets["question"];
};

const loadAsset = async (id: string, fileName: string) => {
  await loadImage("./assets/" + fileName).then(
    (img) => (assets[id] = img),
    (err) => console.error(err),
  );
};

const loadImage: (src: string) => Promise<HTMLImageElement> = async (
  src: string,
) => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};
