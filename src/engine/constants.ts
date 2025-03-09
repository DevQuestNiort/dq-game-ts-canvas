// pas de la grille en pixels (taille des cases)
export const GRID_PITCH = 32


// definit la largeur du view port en Pitch de 32 px doit être impair

export const VIEWPORT_SIZE_X =35
/*
definit la hauteur du view port en Pitch de 32 px doit être impair
 */
export const VIEWPORT_SIZE_Y =23
/*
definit la largeur de la zone de deplacement stable ( centre au centre) doit être impair
 */
export const STABLE_ZONE_SIZE_X   = 5
/*
definit la hauteur de la zone de deplacement stable ( centre au centre) doit être impair
 */
export const STABLE_ZONE_SIZE_Y  =5

/* definit la hauteur du menu*/
export const BOTTOM_MENU_SIZE_Y = 3


export const TOTAL_SIZE_Y = BOTTOM_MENU_SIZE_Y + VIEWPORT_SIZE_Y

export const TOTAl_SIZE_X = VIEWPORT_SIZE_X


export const TOTAL_PX_SIZE_Y =  GRID_PITCH * TOTAL_SIZE_Y

export const TOTAL_PX_SIZE_X =  GRID_PITCH * TOTAl_SIZE_X