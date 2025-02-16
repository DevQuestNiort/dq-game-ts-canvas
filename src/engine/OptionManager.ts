export enum BooleanOption {
    SOUND_MUTED
}

export enum NumberOption {
    SOUND_VOLUME// multiplicateur, 1 est le volume max
}

let booleanOptions: Record<BooleanOption, boolean> = {[BooleanOption.SOUND_MUTED]: false};
let numberOptions: Record<NumberOption, number> = {[NumberOption.SOUND_VOLUME]: 1};

export const getBooleanOption = (option: BooleanOption) => {
    return booleanOptions[option]
}

export const setBooleanOption = (option: BooleanOption, value: boolean) => {
    booleanOptions[option] = value;
}

export const switchOption = (option: BooleanOption) => {
    booleanOptions[option] = !booleanOptions[option];
}

export const getNumberOption = (option: NumberOption) => {
    return numberOptions[option];
}

export const setNumberOption = (option: NumberOption, value: number) => {
    numberOptions[option] = value;
}

export const saveOptionsInLocalStorage = () => {
    localStorage.setItem("options", JSON.stringify({"booleanOptions": booleanOptions, "numberOptions": numberOptions}))
}

export const loadOptionsFromLocalStorage = () => {
    const raw = localStorage.getItem("options");
    if (raw) {
        const {boolOpts, numberOpts} = JSON.parse(raw);
        booleanOptions = {...booleanOptions, ...boolOpts};
        numberOptions = {...numberOptions, ...numberOpts};
    }
}