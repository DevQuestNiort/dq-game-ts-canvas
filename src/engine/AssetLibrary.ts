export class AssetLibrary {

    public assets: Record<string, HTMLImageElement>;


    constructor() {
        this.assets = {}
    }

    init = async () => {
        await this.loadAsset("player", "troll.png");
        await this.loadAsset("bouclier", "bouclier.png");
        await this.loadAsset("chicken", "chicken.png");
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