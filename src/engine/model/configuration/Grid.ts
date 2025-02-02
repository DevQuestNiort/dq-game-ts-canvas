export class Grid {
    public rows: string[]

    constructor(rows: string[]) {
        /*
        // FIX refaire correctement cette verification
        const columnCount: number = rows[0].length

            for( const row in rows){
                if ( row.length !== columnCount){
                    console.log("Data grid has differents length in row",columnCount, row.length)
                    throw Error("Data grid has differents length in row")
                }
            }*/

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

