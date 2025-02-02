export class Grid {
    public rows: string[]

    constructor(rows: string[]) {
        this.rows = rows;
    }


    /**
     * return la case
     * @param x
     * @param y
     */
    getCase: (x: number, y: number) => string = (x: number, y: number) => {
        try {
            return this.rows[y].charAt(x)
        } catch (e) {
            console.error("erreur d acces ", x, y)
            return "h"
        }

    }

    getWidth: () => number = () => {
        return this.rows[0].length
    }

    getHeight: () => number = () => {
        return this.rows.length
    }
}

