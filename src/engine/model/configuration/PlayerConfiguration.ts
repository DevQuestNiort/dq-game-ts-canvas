import {PlayerState} from "../state/PlayerState.ts";

export class PlayerConfiguration {
    public initialState: PlayerState;
    public playerImageUrl: string;


    constructor(initialState: PlayerState, playerImageUrl: string) {
        this.initialState = initialState;
        this.playerImageUrl = playerImageUrl;
    }
}