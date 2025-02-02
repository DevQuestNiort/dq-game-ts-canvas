export class AssetLibrary {

    public assets: Record<string, HTMLImageElement>;


    constructor() {
        this.assets = {}
    }

    init = async () => {
        await this.loadAsset("player", "troll.png");
        await this.loadAsset("bouclier", "bouclier.png");
        await this.loadAsset("chicken", "chicken.png");
        await this.loadAsset("anneau","anneau.png");
        await this.loadAsset("appareil","appareil.png");
        await this.loadAsset("archer","archer.png");
        await this.loadAsset("armure","armure.png");
        await this.loadAsset("backpack","backpack.png");
        await this.loadAsset("bibliotheque","bibliotheque.png");
        await this.loadAsset("bouclier","bouclier.png");
        await this.loadAsset("carte-au-tresor","carte-au-tresor.png");
        await this.loadAsset("carte-au-tresor-bis","carte-au-tresor-bis.png");
        await this.loadAsset("chandelier","chandelier.png");
        await this.loadAsset("chicken","chicken.png");
        await this.loadAsset("cle","cle.png");
        await this.loadAsset("cleBlue","cleBlue.png");
        await this.loadAsset("cleGreen","cleGreen.png");
        await this.loadAsset("cleRed","cleRed.png");
        await this.loadAsset("communsword","communsword.png");
        await this.loadAsset("cor-des-alpes","cor-des-alpes.png");
        await this.loadAsset("diamond ","diamond .png");
        await this.loadAsset("doorleft","doorleft.png");
        await this.loadAsset("doorright","doorright.png");
        await this.loadAsset("dragon","dragon.png");
        await this.loadAsset("dwarf","dwarf.png");
        await this.loadAsset("elf","elf.png");
        await this.loadAsset("fond-carte","fond-carte.jpg");
        await this.loadAsset("forgeron","forgeron.png");
        await this.loadAsset("frankenstein","frankenstein.png");
        await this.loadAsset("gateaux","gateaux.png");
        await this.loadAsset("gem","gem.png");
        await this.loadAsset("group","group.png");
        await this.loadAsset("guillotine","guillotine.png");
        await this.loadAsset("hache","hache.png");
        await this.loadAsset("king","king.png");
        await this.loadAsset("knight","knight.png");
        await this.loadAsset("la-tombe","la-tombe.png");
        await this.loadAsset("levier","levier.png");
        await this.loadAsset("magicsword","magicsword.png");
        await this.loadAsset("mission","mission.png");
        await this.loadAsset("necromancer","necromancer.png");
        await this.loadAsset("ogre","ogre.png");
        await this.loadAsset("ogre1","ogre (1).png");
        await this.loadAsset("ogre2","ogre (2).png");
        await this.loadAsset("ogre3","ogre (3).png");
        await this.loadAsset("oldchandelier","oldchandelier.png");
        await this.loadAsset("panneau","panneau.png");
        await this.loadAsset("piege","piege.png");
        await this.loadAsset("player","player.png");
        await this.loadAsset("porte","porte.png");
        await this.loadAsset("potion","potion.png");
        await this.loadAsset("potion-bis","potion-bis.png");
        await this.loadAsset("potion-tr","potion-tr.png");
        await this.loadAsset("prison","prison.png");
        await this.loadAsset("prisonBlue","prisonBlue.png");
        await this.loadAsset("prisonGreen","prisonGreen.png");
        await this.loadAsset("prisonRed","prisonRed.png");
        await this.loadAsset("prisonYellow","prisonYellow.png");
        await this.loadAsset("quest","quest.png");
        await this.loadAsset("quete","quete.png");
        await this.loadAsset("raresword","raresword.png");
        await this.loadAsset("role-playing","role-playing.png");
        await this.loadAsset("serpent","serpent.png");
        await this.loadAsset("shaman","shaman.png");
        await this.loadAsset("shield","shield.png");
        await this.loadAsset("squelette","squelette.png");
        await this.loadAsset("table","table.png");
        await this.loadAsset("tasse-a-cafe","tasse-a-cafe.png");
        await this.loadAsset("tonneau","tonneau.png");
        await this.loadAsset("tonneau-de-vin","tonneau-de-vin.png");
        await this.loadAsset("troll","troll.png");
        await this.loadAsset("uniquesword","uniquesword.png");
        await this.loadAsset("village","village.png");
        await this.loadAsset("vortex","vortex.png");
        await this.loadAsset("wizard","wizard.png");
    }


    getImage = (id: string) => {
        return this.assets[id];
    }


    async loadAsset(id: string, fileName: string) {
        await this.loadImage("./assets/" + fileName)
            .then(img => this.assets[id] = img, err => console.log(err))
    }

    loadImage(src: string): Promise<HTMLImageElement> {
        return new Promise((resolve, reject) => {
            let img = new Image()
            img.onload = () => resolve(img);
            img.onerror = reject
            img.src = src
        })
    }
}